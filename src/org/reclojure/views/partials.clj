(ns org.reclojure.views.partials
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.views.utils :as utils]
            [org.reclojure.views.assets :as assets]
            [org.reclojure.views.-colors :as c]
            [org.reclojure.views.-sizes :as s]))

(defstyled header :header
  {:margin-bottom "10vh"}
  
  [:p :a {:color c/darker-green}]
  [:at-media {:min-width "60em"}
   {:background-size "cover"}])

(defstyled navigation :nav
  {:display "flex"
   :justify-content "space-between"
   :align-items "center"

   :margin "0 auto"
   :padding "1.5rem"
   :width "100%"
   :max-width "69rem"

   :font-weight 700}
  [:at-media {:min-width "40em"}
   {:padding "2.5rem"}]
  [:ul {:display "flex"
        :flex-wrap "wrap"
        :flex-direction "column"
        :align-items "flex-end"
        :list-style "none"}
   [:li
    {:font-size s/s-3
     :font-weight 700
     :margin-bottom "2rem"}
    [:a {:color c/light-blue}]
    [:&:last-child {:margin-bottom 0}]]
   ;; The following is only necessary because Safari doesn't support
   ;; flexbox gap yet
   [:at-media {:min-width "40em"}
    {:flex-direction "row"}
    [:li {:margin-right "2rem"
          :margin-bottom 0}
     [:&:last-child {:margin-right 0}]]]
   [:at-media {:min-width "80em"}
    [:li:first-child {:display "none"}]]]
  ([_]
   [:<>
    [:a {:href "/"}
     [assets/reclojure-symbol {:alt "re:Clojure Symbol"
                               :src "/images/re-logo-white-bg.png"
                               :width "324"
                               :height "327"}]]
    [:ul
     [:li [:a {:href "/#cfp"} "CFP"]]
     [:li [:a {:href "/#keynote"} "Keynotes"]]
     [:li [:a {:href "/#speakers"} "Speakers"]]
     [:li [:a {:href "/#schedule"} "Schedule"]]
     [:li [:a {:href "/#workshops"} "Workshops"]]
     [:li [:a {:href "/#sponsors"} "Sponsors"]]
     [:li [:a {:class utils/disabled :href "/#instructions"} "Instructions"]]
     [:li [:a {:class utils/disabled :href "#"} "Tickets"]]]]))
