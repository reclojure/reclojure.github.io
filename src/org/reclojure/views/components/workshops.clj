(ns org.reclojure.views.components.workshops
  (:require [lambdaisland.ornament :as o]
            [org.reclojure.db :as db]
            [garden.selectors :as gs]
            [org.reclojure.views.utils :as utils]
            [org.reclojure.views.-colors :as c]
            [clojure.string :as string]))

(o/defstyled table :table
  {:border-collapse "collapse"})

(o/defstyled head :thead
  {:filter "grayscale(50%) opacity(50%)"
   :margin-bottom "2rem"
   :display "block"}
  [:at-media {:min-width "60rem"}
   {:display "revert"
    :filter "revert"}])

(o/defstyled body :tbody
  {}
  [:a {:color "black"
       :text-decoration "underline 0.1em"}]
  [:at-media {:min-width "60rem"}
   [:> [(gs/nth-child "4n+1")
        {:background-color c/lighter-blue
         :color c/copy-blue}
        [:a {:color c/copy-blue}]]]
   [:> [(gs/nth-child "4n+3")
        {:background-color c/lighter-green
         :color c/darker-green}
        [:a {:color c/darker-green}]]]])

(o/defstyled row :tr
  {:display "flex"
   :flex-direction "column"
   :text-align "left"
   :margin-bottom "2rem"

   :box-shadow [["1rem" "1rem" 0 c/light-blue]]
   :border ["1px" "solid" c/light-blue]}
  [:> [(gs/nth-child "2n+1") {:background-color c/lighter-blue}]]
  [:&:last-child {:margin-bottom "initial"}]
  [:at-media {:min-width "60rem"}
   {:display "revert"
    :box-shadow "revert"
    :border "revert"}
   [:> [(gs/nth-child "2n+1") {:background-color "revert"}]]])

(def cell {:flex-basis "2rem"
           :line-height 1.4
           :padding-inline "1.5rem"
           :padding-block ".5rem"
           :vertical-align "baseline"})

(o/defstyled th :th
  cell
  {:color c/gray
   :font-weight 400
   :font-style "italic"}
  [:at-media {:min-width "60rem"}
   {:line-height 2
    :font-style "revert"
    :font-variant "all-small-caps"}])

(o/defstyled td :td
  cell
  [:time {:font-style "italic"}])

(o/defstyled a :a)

(o/defstyled workshop-event-link :h3
  {:font-weight   400
   :margin        0
   :padding-block "0.5rem"
   :font-size     "1rem"})

(o/defstyled workshop-title :h3
  {:font-weight   400
   :margin        0
   :padding-block "0.5rem"
   :font-size     "1rem"})

(o/defstyled workshop-description :h3
  {:font-weight   400
   :margin        0
   :padding-block "0.5rem"
   :font-size     "1rem"})

(def month-names ["Jan" "Feb" "Mar" "Apr"
                  "May" "Jun" "Jul" "Aug"
                  "Sep" "Oct" "Nov" "Dec"])

(defn event-link [link]
  (when link
    [a {:href link}
     "Event link"]))

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
      [a {:href url} caption])
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

(o/defstyled workshops :section
  ;; Section boilerplate to be abstracted
  {:margin ["13vh" "auto" "20vh"]
   :width "min(82%, 76.75rem)"}
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
    [:p.pre-title "Confirmed"]
    [:h2 "Workshops"]
    [table
     [head
      [row
       [th "Event"]
       [th "Date"]
       [th "Length"]
       [th "Title"]
       [th "Description"]
       [th "Presenter"]
       [th "Libraries"]]]
     [body
      (->> db/workshops
           arrange-by-datetime
           (map (fn [{:keys [link datetime length title description libraries presenter]}]
                  [row
                   [td [event-link link]]
                   [td {:class "datetime"} (datetime-view datetime)]
                   [td {:class "length"} length]
                   [td {:class "title"} [workshop-title title]]
                   [td {:class "description"} [workshop-title description]]
                   [td {:class "presenter"} [utils/nowrap presenter]]
                   [td {:class "libs"}
                    (let [lib-link (fn [{:keys [href name]}]
                                     (utils/external-link {:href href} name))
                          linked-libraries (map lib-link libraries)]
                      (-> ", "
                          repeat
                          (interleave linked-libraries)
                          rest))]])))]]]))






