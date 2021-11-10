(ns org.reclojure.views.components.schedule
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.views.-colors :as c]
            [org.reclojure.db :as db]
            [clojure.string :as str]
            [garden.selectors :as gs]))

;; Utils

(defn make-slug [name]
  (-> name (str/replace #" " "-") str/lower-case))

(defn time-str [datetime]
  (str/join " " [(last (re-find #"(\d+:\d+)" datetime)) "UTC"]))

(defn duration-str [duration]
  (str/join " " [duration "min"]))

;; Event type dispatch

(declare talk panel-and-break interlude keynote)

(defn make-event [event speakers]
  (case (:type event)
    :Talk      (talk event speakers)
    :Panel     (panel-and-break :Panel event)
    :Break     (panel-and-break :Break event)
    :Interlude (interlude event)
    :Keynote   (keynote event)))

(defstyled time-wrap :div
  {:background
   (str "linear-gradient(to right, transparent 80px, transparent 0, "
        c/light-green
        " 81px, transparent 0, transparent 100%)")
   :margin-bottom "2rem"
   :color c/darker-green}
  [:.time {:background-color c/white
          ;; :box-shadow (str "0 5px 0 " c/dark-green)
          :padding "0.8rem 2.5rem"}]
  ([_ [event1 event2] speakers]
   (let [time-start1 (:time-start event1)
         time-end1 (:time-end event1)
         time-start2 (:time-start event2)
         time-end2 (:time-start event2)]
     (cond
       (or (and (= (:type event1) :Talk)
                (= (:type event2) :Talk))
           (and (= (:type event1) :Panel)
                (= (:type event2) :Keynote)))
       [:<>
        [:p.time [:time {:datetime time-start1} (time-str time-start1)]]
        (make-event event1 speakers)
        [:p.time [:time {:datetime time-end1} (time-str time-end1)]]
        [:p.time [:time {:datetime time-start2} (time-str time-start2)]]
        (make-event event2 speakers)
        [:p.time [:time {:datetime time-end2} (time-str time-end2)]]]
       :else
       [:<>
        [:p.time [:time {:datetime time-start1} (time-str time-start1)]]
        (make-event event1 speakers)
        (make-event event2 speakers)
        [:p.time [:time {:datetime time-end2} (time-str time-end2)]]]))))

;; Containers

(defstyled days :ol
  {:list-style "none"
   :padding 0
   :margin 0}
  {:display "flex"
   :gap "5vw"
   :flex-wrap "wrap"
   :justify-content "center"})

(defstyled day :li
  {:margin-bottom "1rem"}
  [:h3
   {:font-size "2.5rem"}]
  [:h3.saturday
   {:padding-left "1.5rem"}])

(defstyled events :ol
  {:list-style "none"
   :padding 0
   :margin 0})

;; Smaller components

(defstyled pic :img
  {:aspect-ratio "1/1"
   :border-radius "50%" 
   :object-fit "cover"
   :width "6rem"
   ;; :grid-area "picture"
   :align-self "start"
   :justify-self "center"
   ;; :box-shadow "inset 0 0 0 1px hsla(0, 0%, 0%, 0.1)"
   :background-color c/white

   :border (str "0.1px solid " c/light-green)
   :box-shadow (str "1rem 1rem 0 0 " c/light-green)})

;; Styled elements for each event type

(defn get-speaker-data [speaker speakers-data]
  (let [[{:keys [link picture slug] :or {link ""
                                         picture ""
                                         slug ""}}]
        (seq (filter #(= (:name %) speaker)
                     speakers-data))]
    {:name speaker
     :link link
     :picture picture
     :slug slug}))

(defstyled talk :li
  {:padding "2rem 2rem"
   :display "grid"
   :grid-template-columns "6rem"
   :grid-template-areas [["picture1" "title"]
                         ["picture1" "name"]
                         ["picture1" "duration"]
                         ["picture2" "."]]
   :grid-column-gap "2rem"}
  [:h4 {:font-size "1.6rem"
        :max-width "29rem"
        :margin 0
        :grid-area "title"}]
  [:.name {:grid-area "name"
           :margin ".5rem 0"
           :font-size "1.25rem"
           :color c/dark-green}
   [:a {:color c/dark-green
        :text-decoration [["2px" "underline" c/dark-green]]}]]
  [:time {:display "block"
          :grid-area "duration"}]
  ([{:keys [duration title speakers #_tags #_abstract]} speakers-data]
   [:<>
    [:h4 title]
    [:p.name
     (->> (map (fn [speaker]
                 [:a {:href (str "/2021/speaker/" (make-slug speaker))} ;FIXME
                  speaker])
               speakers)
          (interleave (repeat ", "))
          rest)]
    (let [[speaker1 & [speaker2]] speakers
          picture1 (:picture (get-speaker-data speaker1 speakers-data))]
      [:<>
       [pic {:alt (str "A picture of the speaker " speaker1 ".")
             :src (str "images/speakers/" picture1)
             :style {:grid-area "picture1"}}]
       (when (seq speaker2)
         (let [picture2 (:picture (get-speaker-data speaker2 speakers-data))]
           [pic {:alt (str "A picture of the speaker " speaker2 ".")
                 :src (str "images/speakers/" picture2)
                 :style {:grid-area "picture2"}}]))])
    [:time {:datetime duration} (duration-str duration)]]))

(defstyled panel-and-break :li
  {:background-color c/lighter-green
   :padding "1rem 3.5rem"
   :margin "1rem 0"}
  [:p:first-child {:margin 0
                   :font-weight 700}]
  [:p:last-child {:margin-bottom 0}]
  [:.event {:font-size "1.125rem"}]
  ([_ event-type {:keys [duration]}]
   [:<>
    [:p.event (case event-type :Panel "Panel" :Break "Break")]
    [:p [:time {:datetime duration} (duration-str duration)]]]))

;; (defstyled break :li
;;   {:border "1px solid red"}
;;   ([{:keys [duration]}]
;;    [:<>
;;     [:p "Break"]
;;     [:time {:datetime duration} (duration-str duration)]]))

(defstyled interlude :li
  {:background-color c/lighter-green
   :padding "1rem 3.5rem"
   :margin "1rem 0"}
  [:p:first-child {:margin-top 0
                   :font-size "1.125rem"
                   :font-weight 700}]
  [:h4 {:font-size "1.25rem"
        :font-weight 400}]
  ([{:keys [duration title description]}]
   [:<>
    [:p "Interlude"]
    [:h4 title]
    (when description [:p description])
    [:p [:time {:datetime duration} (duration-str duration)]]]))

(defstyled keynote :li
  [:div.keynotes
   {;; :clip-path "polygon(0% 0%, 100% 0%, 100% 66%, 90% 100%, 0% 100%)"
    :padding-top "1.3rem"
    :padding-bottom "1.3rem"
    :display "grid"
    :grid-template-columns "12.5rem 1fr"}]
  [:p:first-child {:font-size "1.125rem"
                   :margin-top 0
                   :font-weight 700
                   :padding-left "2.8rem"}]
  [:img {:margin-left     "-1.5rem"
         :border          "6px solid white"
         :border-radius   "50%"
         :aspect-ratio    "1/1"
         :width           "12.5rem"
         :height          "12.5rem"
         :object-fit      "cover"
         :object-position "top"
         :grid-column-start "1"}]
  [:h4 {:font-size "clamp(1.5rem, 6vw, 2.5rem)"
        :grid-column-start "2"
        :align-self "center"
        :margin 0}
   [:span {:display "block"
           :font-size "clamp(2rem, 8vw, 4.5rem)"
           :color c/dark-green}]]
  [:p:last-child {:padding "0 3.3rem"}]
  [:.wolfram
   {:background-color c/lighter-green
    :color c/darker-green}
   [:h4 [:span {:color c/dark-green}]]]
  [:.sussman
   {:background-color c/lighter-blue
    :color c/copy-blue}
   [:h4 [:span {:color c/dark-blue}]]]
  ([{:keys [duration speaker]}]
   (case speaker
     "Stephen Wolfram"
     [:div.keynotes.wolfram
      [:p "Keynote"]
      [:img {:alt "A picture of Stephen Wolfram (wearing glasses and a blue
                      shirt) smiles."
             :src "images/speakers/stephen-wolfram.png"}]
      [:h4 "Stephen" [:span "Wolfram"]]
      [:p [:time {:datetime duration} (duration-str duration)]]]
     "Gerald Jay Sussman"
     [:div.keynotes.sussman
      [:p "Keynote"]
      [:img {:alt "A picture of a smiling Gerald Jay Sussman, who is wearing
              glasses and a blue plaid shirt."
             :src "images/speakers/gerald-jay-sussman-300x300.jpg"}]
      [:h4 "Gerald Jay" [:span "Sussman"]]
      [:p [:time {:datetime duration} (duration-str duration)]]])))

(defstyled schedule :section
  {:margin ["13vh" "auto" "20vh"]
   :max-width "max-content"}                  ;FIXME temporary value
  [:.pre-title {:font-size "1.3rem"
                :color c/gray
                :font-variant "all-small-caps"
                :margin 0
                :padding-left "1.5rem"}]
  [:h2 {:font-size "3.5rem"
        :font-weight 700
        :font-family "inter, sans-serif"
        :margin "0 0 3rem"
        :padding-left "1.4rem"}]
  ([_]
   [:<>
    [:p.pre-title "2021"]
    [:h2 "Schedule"]
    [days
     [day
      [:h3.friday {:style {:padding-left "1.5rem"}}
       [:time {:datetime "2021-12-03"} "Friday"]]
      [events
       (map time-wrap (partition 2 db/friday-2021) (repeat db/speakers-data))]]
     [day 
      [:h3.saturday [:time {:datetime "2021-12-04"} "Saturday"]]
      [events
       ;; FIXME
       (map time-wrap (partition 2 db/friday-2021) (repeat db/speakers-data))]]]]))
