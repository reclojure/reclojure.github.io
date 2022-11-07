(ns org.reclojure.views.speaker
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.views.-colors :as c]
            [org.reclojure.views.-sizes :as s]
            [org.reclojure.views.components.navigation :as navigation]
            [org.reclojure.db :as db]
            [clojure.string :as str]))

(defstyled main :main
  {:max-width "min(82%, 60vmax)"
   :margin "0 auto 5vmax"}
  [:h1 :h2 {:color "#222"}]
  [:p :small {:color "#333"}])

(defstyled speaker :header
  {:display "flex"
   :flex-wrap "wrap"
   :align-items "start"

   :flex-basis "20rem"
   :flex-grow 1
   :gap "4rem"
   
   :margin-top "5vmax"
   ;; :border ["1px" "solid" c/light-green]
   ;; :box-shadow [["1rem" "1rem" 0 c/light-green]]
   :margin-bottom "2rem"}
  [:img
   ["~ *" {:padding-left "1rem"
           :padding-right "1rem"}]
   ["~ :last-child" {:margin-bottom "1.3rem"}]]
  [:.info {:flex 1}]
  [:h1 {:font-size "3rem"}
   [:+ [:p {:font-size "1.125rem"
            :line-height 1.6}]]])

(defstyled pic :div
  {:flex-basis "20rem"
   :filter (str "drop-shadow(1rem 1rem " c/light-blue ")")}
  [:img
   {:aspect-ratio "1 / 1"
    :object-fit "cover"
    ;; :flex-basis "20rem"
    :width "100%"
    :max-height "20rem"
    :clip-path "polygon(2% 6%,91% 0%,100% 85%,88% 100%,0% 100%)"}])

(defstyled abstract* :p
  {:font-size "1.125rem"
   :max-width "65ch"
   :line-height 1.8})

(defstyled talk-title :h2
  {:font-size "clamp(1.5rem, 4vw, 4rem)"
   :margin-top "5vmax"
   :margin-bottom "2vmax"})

(defstyled by :p
  {:font-size "1.25rem"})

(defstyled video-placeholder :div
  {:aspect-ratio "16 / 9"
   :background-color "hsl(0, 0%, 10%)"
   :margin "2vmax auto"
   ;; :display "flex"
   :display "none"                      ;FIXME remove after conference
   :align-items "center"
   :justify-content "center"}
  [:time {:color "white"
          :font-size "3rem"
          :line-height 1.5}
   [:span {:display "block"}]])

(defn get-speaker [speaker speakers]
  (seq (filter #{speaker} speakers)))

(defn get-talks-by-author [speaker]
  (let [full-schedule (into db/friday-2021 db/saturday-2021)]
    (filter #(get-speaker speaker (:speakers %)) full-schedule)))

(defn page [{:keys [name sessions handle link picture description] :as speaker-data}]
  (println speaker-data)
  (let []
    [:<>
     [navigation/header
      [navigation/navigation]]
     [main
      [speaker
       [pic
        [:img {:alt (str "A picture of " name ".")
               :src picture}]]
       [:div.info
        [:h1 name]
        [:p description]
        [:p (when handle (str "@" handle))]
        [:p [:a {:href link} link]]]]
      (for [{:keys [title speakers description _time-start]} sessions]
        [:div
         [talk-title title]
         #_[by "By " (str/join " and " speakers)]
         [video-placeholder
          ;; [:time {:datetime time-start}
          ;;  (case (subs time-start 8 10)
          ;;    "03" [:span "Friday, 03/12/2021"
          ;;          [:span (subs time-start 11 16) " UTC"]]
          ;;    "04" [:span "Saturday, 04/12/2021"
          ;;          [:span (subs time-start 11 16) " UTC"]])]
          ]
         [abstract* description]])]]))
