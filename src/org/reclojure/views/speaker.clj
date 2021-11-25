(ns org.reclojure.views.speaker
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.views.-colors :as c]
            [org.reclojure.views.-sizes :as s]
            [org.reclojure.views.components.navigation :as navigation]))

(defstyled speaker :article
  {:display "flex"
   :flex-wrap "wrap"
   :gap "1rem"
   :align-items "flex-start"

   :max-width "64rem"
   :margin "5vmin auto"
   :padding-left "2rem"
   :padding-right "2rem"})

(defstyled text :div
  {:flex-basis 0
   :flex-grow 999
   :min-width "50%"}
  [:h1 {:font-size "3rem"}]
  [:p {:font-size "1.125rem"
       :max-width "50ch"
       :line-height 1.6}])

(defstyled pic :img
  {:aspect-ratio "1 / 1"
   :object-fit "cover"
   :height "20rem"
   :width "100%"})

(defstyled sidebar :aside
  {:flex-basis "20rem"
   :flex-grow 1
   :border ["1px" "solid" c/light-green]
   :box-shadow [["1rem" "1rem" 0 c/light-green]]
   :margin-bottom "2rem"}
  [:img
   ["~ *" {:padding-left "1rem"
           :padding-right "1rem"}]
   ["~ :last-child" {:margin-bottom "1.3rem"}]])

;; (defstyled speaker-card :li
;;   {:background-color c/white
;;    :box-shadow [["1rem 1rem " c/light-blue]]
;;    :border ["1px" "solid" c/light-blue]}

;;   [:a {:color "initial"}]
  
;;   ["> :last-child" {:padding-bottom 0}]
  
;;   [:img {:width "100%"
;;          :object-fit "cover"
;;          :aspect-ratio "1/1"
;;          :max-height "max(10rem, 30vh)"}
;;    ["~ *" {:margin-left "1rem"
;;            :margin-right "1rem"}]]
  
;;   [:h3 {:font-size "2rem"
;;         :font-weight 700
;;         :line-height 1
;;         :margin-top "1.3rem"
;;         :margin-bottom "1.3rem"}]
  
;;   [:p {:font-size "1rem"
;;        :line-height 1.3
;;        :margin-bottom "2rem"}]
;;   ([speaker]
;;    [:<>
;;     [:a {:href (str "/2021/speaker/" (:slug speaker))}                     ;FIXME
;;      [:img {:src (str "images/speakers/" (:picture speaker))
;;             :alt (str "A picture of " (:name speaker) ".")
;;             :width "300"
;;             :height "300"}]
;;      [:h3 (:name speaker)]
;;      [:p (:brief speaker)]]]))

(defn page [{:keys [name handle link picture description]}]
  [:<>
   [navigation/header
    [navigation/navigation]]
   [:main
    [^:article speaker
     [^:div text
      [:header
       [:h1 name]]
      [:p description]]
     [^:aside sidebar
      [^:img pic {:alt (str "A picture of " name ".") :src (str "/images/speakers/" picture)}]
      [:p (str "@" handle)]
      [:p [:a {:href link} link]]]]]])
