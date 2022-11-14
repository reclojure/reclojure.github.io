(ns org.reclojure.views.components.workshops
  (:require [lambdaisland.ornament :as o]
            [org.reclojure.db :as db]
            [garden.selectors :as gs]
            [org.reclojure.views.utils :as utils]
            [org.reclojure.views.-colors :as c]
            [clojure.string :as string]
            [org.reclojure.views.assets :as assets]))

(o/defstyled table :table
  {:border-collapse "collapse"})

(o/defstyled head :thead
  {:filter "grayscale(50%) opacity(50%)"
   :margin-bottom "2rem"
   :display "block"}
  [:at-media {:min-width "80rem"}
   {:display "revert"
    :filter "revert"}])

(o/defstyled body :tbody
  {:color c/gray}
  [:a {:color c/gray
       :text-decoration "underline 0.1em"}]
  [:at-media {:min-width "80rem"}
   [:.event {:font-weight 700
             :padding ".5rem 1rem"
             :border-radius "2px"
             :font-variant "all-small-caps"}]
   [:> [(gs/nth-child "4n+1")
        {:background-color c/lighter-blue
         :color c/copy-blue}
        [:.event {:color c/copy-blue
                  :font-weight 700
                  :padding ".5rem 1rem"
                  :border-radius "2px"
                  :font-variant "all-small-caps"}]
        [:a {:color c/copy-blue}]]]
   [:> [(gs/nth-child "4n+3")
        {:background-color c/lighter-green
         :color c/darker-green}
        [:.event {:color c/darker-green
                  :font-weight 700
                  :padding ".5rem 1rem"
                  :border-radius "2px"
                  :font-variant "all-small-caps"}]
        [:a {:color c/darker-green}]]]])

(o/defstyled row :tr
  {:display "flex"
   :flex-direction "column"
   :text-align "left"
   :margin-bottom "2rem"

   :color c/gray
   "--icon-color" c/gray
   :box-shadow [["1rem" "1rem" 0 c/light-blue]]
   :border ["1px" "solid" c/light-blue]}

  [:> [(gs/nth-child "2n+1")
       {:background-color c/lighter-blue}]]
  [:&:last-child {:margin-bottom "initial"}]
  [:at-media {:min-width "80rem"}
   {:display "revert"
    :box-shadow "revert"
    :border "revert"}
   [:> [(gs/nth-child "2n+1")
        {:background-color "revert"}]]])

(def cell {:flex-basis "2rem"
           :line-height 1.4
           :padding-inline "1.5rem"
           :padding-block "1rem"
           :vertical-align "baseline"})

(o/defstyled th :th
  cell
  {:color c/gray
   :font-weight 400
   :font-style "italic"}
  [:at-media {:min-width "80rem"}
   {:line-height 2
    :font-style "revert"
    :font-variant "all-small-caps"}
   [:&:first-child {:text-align "center"}]])

(o/defstyled td :td
  cell
  [:time {:font-style "italic"}])

(o/defstyled libs :td
  cell
  [:ul {:max-width "20rem" :list-style "none" :padding 0 :margin 0}]
  [:li {:display "inline"}])

(o/defstyled workshop-title :h3
  {:margin        0
   :padding-block "0.5rem"
   :font-size     "1rem"
   :font-weight   700
   :max-width     "21rem"})

(o/defstyled workshop-description :p
  {:font-weight   400
   :margin        0
   :padding-block "0.5rem"
   :font-size     "1rem"
   :max-width     "30rem"
   :cursor        "pointer"}
  ["&[aria-checked='on']" {:overflow-block "clip"
                           :display "-webkit-box"
                           :-webkit-line-clamp 1
                           :-webkit-box-orient "vertical"
                           :padding-block-end 0
                           :margin-block-end ".5rem"}])

(def month-names ["Jan" "Feb" "Mar" "Apr"
                  "May" "Jun" "Jul" "Aug"
                  "Sep" "Oct" "Nov" "Dec"])

(defn datetime-view [datetime]
  (if datetime
    (let [[year month day hour-minute] (string/split datetime #"-")
          month-name                   (-> month
                                           (Integer/parseInt)
                                           dec
                                           month-names)
          [hour minute]                (string/split hour-minute #":")
          url                          (format "https://time.is/%s%s_%s_%s_%s_in_UTC"
                                               hour minute day month-name year)
          caption (format "%s. %s, %s UTC" month-name day hour-minute)]
      [utils/external-link {:href url} [utils/nowrap caption]])
    [utils/nowrap "To be scheduled"]))

(defn arrange-by-datetime [workshops]
  (->> workshops
       (mapcat (fn [{:keys [datetimes]
                     :as workshop}]
                 (if datetimes
                   (let [workshop-without-datetimes (dissoc workshop :datetimes)]
                     (->> datetimes
                          (map (fn [datetime]
                                 (-> workshop-without-datetimes
                                     (assoc
                                       :datetime datetime))))))
                   (do (println "DEBUG")
                       [workshop]))))
       (sort-by (fn [row] ; make sure rows with no datetime are last
                  (-> row
                      :datetime
                      (or "a"))))))

(o/defstyled iconify :span
  {:display "inline-flex"
   :align-items "baseline"}
  [:svg {:height "1em"
         :width "1em"
         :flex-shrink 0}
   [:path {:fill "var(--icon-color)"}]
   [:&:first-child {:margin-inline-end "1em"}]
   [(gs/& gs/last-child (gs/not gs/first-child)) {:margin-inline-start "0.5em"
                                                  :display "none"}]]
  [:at-supports {:gap "1em"}
   {:gap "1em"}
   [:svg
    [:&:first-child {:margin-inline-end :unset}]
    [(gs/& gs/last-child (gs/not gs/first-child))
     {:margin-inline-start :unset}]]]
  [:at-media {:min-width "80em"}
   [:svg {:display "none"
          :align-items "center"}
    [(gs/& gs/last-child (gs/not gs/first-child)) {:display "block"}]]])

(o/defstyled workshops :section
  ;; Section boilerplate to be abstracted
  {:margin ["13vh" "auto" "20vh"]
   :max-width "max-content"
   :padding "2rem"}
  [:.pre-title {:font-size "1.3rem"
                :color c/gray
                :font-variant "all-small-caps"
                :margin 0}]
  [:h2 {:font-size "3.5rem"
        :font-weight 700
        :font-family "inter, sans-serif"
        :margin "0 0 3rem"}]
  ([_]
   [:<>
    [:h2 "Workshops"]
    [table
     [head
      [row
       [th {:class "event"} [iconify assets/fa-up-right-from-square "Event" assets/fa-up-right-from-square]]
       [th [iconify assets/fa-calendar-day "Date" assets/fa-up-right-from-square]]
       [th [iconify assets/fa-stopwatch "Duration"]]
       [th [iconify assets/fa-pen-nib "Title"]]
       [th [iconify assets/fa-paragraph "Description"]]
       [th [iconify assets/fa-chalkboard-user "Presenter"]]
       [th [iconify assets/fa-book "Prerequisites"]]]]
     [body
      (->> db/workshops
           arrange-by-datetime
           (map (fn [{:keys [link datetime length title description prerequisites presenter]}]
                  [row
                   [td [iconify assets/fa-up-right-from-square
                        (when link
                          [utils/external-link {:class "event" :href link}
                           [utils/nowrap "Join"]])]]
                   [td {:class "datetime"} [iconify assets/fa-calendar-day (datetime-view datetime)]]
                   [td {:class "duration"} [iconify assets/fa-stopwatch length]]
                   [td {:class "title"} [iconify assets/fa-pen-nib [workshop-title title]]]
                   [td {:class "description"}
                    [iconify assets/fa-paragraph
                     [workshop-description {:role "switch"
                                            :aria-checked "off"
                                            :tabindex 0} description]]]
                   [td {:class "presenter"} [iconify assets/fa-chalkboard-user [utils/nowrap presenter]]]
                   [libs
                    [iconify assets/fa-book
                     [:ul
                      (let [prereq (fn [{:keys [name]}] [:li [utils/nowrap name]])
                            linked-prerequisites (map prereq prerequisites)]
                        (-> ", "
                            repeat
                            (interleave linked-prerequisites)
                            rest))]]]])))]]]))
