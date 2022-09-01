(ns org.reclojure.views.components.navigation
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.views.utils :as utils]
            [org.reclojure.views.assets :as assets]
            [org.reclojure.views.-colors :as c]))

(defstyled header :header
  {:padding "2.5rem"
   :border-bottom (str "3px dotted " c/light-blue)}
  [:p :a {:display "block"
          :padding-block "1rem"
          :padding-inline "1.5rem"}])

(defstyled menu :button
  {:padding-block "1rem"
   :font-size "1.3rem"
   :font-weight 700
   :border "none"
   :background-color c/light-blue
   :color c/white
   :cursor "pointer"})

(defstyled navigation :nav
  {:display "flex"
   :flex-direction "column"
   :justify-content "start"
   :gap "1.5rem"}
  [:> [:a {:display "block"}]]
  [:ol {:display "flex"
        :flex-direction "column"
        :align-items "center"
        :gap "1rem"
        :list-style "none"
        :padding-left 0
        :font-size "clamp(2rem, 9vw, 3rem)"
        :margin 0}
   ["&[aria-expanded=\"false\"]" {:display "none"}]
   [:li {:font-weight 700}
    [:a {:color c/light-blue

         :display "block"
         :padding "1rem"}]]]
  [:at-media {:min-width "60em"}
   {:flex-direction "row"}
   [:button {:display "none"}]
   [:ol {:display "flex"
         :flex-flow "row wrap"
         :font-size "clamp(1.6rem, 2.8vw, 3rem)"}]
   ["ol:is([aria-expanded], #id)" {:display "flex"}]]
  ([_]
   [:<>
    [:a {:href "/"} [assets/reclojure-symbol
                     {:alt "reClojure Symbol"
                      :src "/images/re-logo-white-bg.png"
                      :width "324"
                      :height "327"}]]
    [menu "Menu"]
    [:ol.nav-list {:aria-expanded "true"}
     [:li [:a {:href "/#keynote"} "Keynotes"]]
     ; [:li [:a {:href "/#speakers"} "Speakers"]]
     ; [:li [:a {:href "/#schedule"} "Schedule"]]
     ; [:li [:a {:href "/#workshops"} "Workshops"]]
     ; [:li [:a {:href "/#sponsors"} "Sponsors"]]
     ; [:li [:a {:class utils/disabled :href "/#instructions"} "Instructions"]]
     ; [:li [utils/external-link {:href "https://www.meetup.com/London-Clojurians/events/281970268/"
     ;                            :class utils/disabled} "Tickets 🎟️🎫"]]
     [:li [:a {:href "/old_site/2019/"} "2019"]]
     [:li [:a {:href "/old_site/index.html"} "2020"]]
     [:li [:a {:href "/2021/index.html"} "2021"]]
     ]]))
