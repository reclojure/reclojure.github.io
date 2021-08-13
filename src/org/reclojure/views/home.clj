(ns org.reclojure.views.home
  (:require [lambdaisland.ornament :refer [defstyled]]))

(let [inter "inter, sans-serif"]
  (def design-tokens
    {:font-regular {:font-family inter
                    :font-weight 400}
     :font-bold {:font-family inter
                 :font-weight 700}
     :font-small "1.3rem"
     :font-medium "1.5rem"
     :font-large "3rem"
     :font-extra-large "10rem"
     :colors {:light-green "#5bdc00"
              :dark-green "#0c2900"
              :light-blue "#726ee8"}}))

(def colors (:colors design-tokens))

(defstyled navigation :nav
  (:font-bold design-tokens)
  {:display "flex"
   :justify-content "space-between"
   :align-items "center"

   :margin "1rem auto 0"
   :padding "2.5rem"
   :width "100%"
   :max-width "1100px"

   :color (:dark-green colors)})

(defstyled navigation-links :ul
  {:display "flex"}
  [:li
   (:font-bold design-tokens)
   {:font-size (:font-small design-tokens)
    :color (:dark-green colors)
    ;; The following is only necessary because Safari doesn't
    ;; support flexbox gap yet
    :margin-right "2rem"}
   [:&:last-child {:margin-right 0}]])

(defstyled reclojure-symbol :img
  {:height "6.25rem"})

(defstyled reclojure-logo :img {})

(defstyled my-reclojure-logo :h1
  (:font-bold design-tokens)
  {:font-size (:font-extra-large design-tokens)
   :margin-left "-8px"}
  [:span:first-child {:color (:light-green colors)}]
  [:span:last-child {:color (:light-blue colors)}])

(defstyled background :svg
  {:background-color (:light-green colors)
   :background-image  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%235bdc00' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%2300d681' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%2300c8d5' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%2300b4ff' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%230096ff' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23726ee8' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E\")"
   :background-attachment "fixed"
   :background-size  "cover"})

(defstyled event-description :div
  (:font-regular design-tokens)
  {:display "grid"
   :grid-template-columns "1fr 1fr"
   :color (:dark-green colors)}
  [:p {:grid-column-start "2"
       :font-size (:font-small design-tokens)
       :line-height 1.6}
   [:&:first-child {:margin-bottom "1rem"}
    [:&:first-line
     (:font-bold design-tokens)]]])

(defstyled mark :mark
  {:margin "0 -0.4em"
   :padding "0.1em 0.4em"
   :border-radius "0.8em 0.3em"
   :background "transparent"
   :background-image "linear-gradient(to right, rgba(255,225,0,0.1), rgba(0, 255, 28, 0.7) 4%, rgba(20, 255, 0, 0.3))"
   :-webkit-box-decoration-break "clone"
   :box-decoration-break "clone"})

(defstyled info :div
  {:font-family "inter, sans-serif"
   :font-size (:font-medium design-tokens)
   :margin-top "2rem"
   :margin-bottom "4rem"
   :color (:dark-green colors)}
  [:p:last-child {:font-weight 700}])

(defstyled cfp :div
  {:text-align "center"
   :font-family "inter, sans-serif"}
  [:p {:font-size "2rem"
       :font-weight 700
       :margin-top "1rem"
       :margin-bottom "1rem"
       :line-height 1.2}]
  [:a {:display "inline-block"
       :padding ".8rem 2rem"
       :background "#5bdd0d"
       :border "none"
       :border-radius "2rem"
       :color "#101820"
       :cursor "pointer"
       :font-weight 700
       :transition "all .3s"
       :box-shadow "0 1rem 4rem -1.5rem transparent"
       :margin "1rem 0 0"
       :font-size "1.5rem"}]
  [:small {:display "block"
           :margin "1.5rem"
           :font-size "1.5rem"}])

(defn page [data]
  [:<>
   [navigation
    [:a
     [reclojure-symbol {:src "/images/re-logo-black-trans.png"}]]
    [navigation-links
     [:li [:a {:href "#"} "Speakers"]]
     [:li [:a {:href "#"} "Instructions"]]
     [:li [:a {:href "#"} "Tickets"]]]]
   ;; jumbotron
   [:img {:src "/images/left-2.svg"
          :style {:position "absolute"
                  :left 0
                  :top "55%"
                  :width "40%"
                  :z-index "-1"}}]
   [:img {:src "/images/right-3.svg"
          :style {:position "absolute"
                  :right "-10rem"
                  :top "15%"
                  :width "40%"
                  :z-index "-1"}}]
   [:div {:style {:margin "0 auto"
                  :padding "8rem 2.5rem"
                  :width "100%"
                  :max-width "1100px"
                  ;; :background-color "#1420ff"
                  ;; :background-image  "url(/images/Bullseye-Gradient(1).svg)"
                  ;; :background-attachment "fixed"
                  ;; :background-size  "cover"
                  }}
    ;; [:img {:src "/images/Clojure-icon-vector-04.svg"
    ;;        :style {:position "absolute"
    ;;                :z-index -2
    ;;                :top "-7vh"
    ;;                :right "50%"
    ;;                :width "1400px"
    ;;                :transform "translateX(50%) rotate(15deg)"}}]
    ;; [reclojure-logo {:src "/images/reclojure-banner-black-trans.png"}]
    [my-reclojure-logo [:span "re:"] [:span "Clojure"]]
    [info
     [:p "Virtual Conference"]
     [:p "Soon, 2021"]]
    [event-description
     [:p [mark "re:Clojure is a community-driven effort"] [:br] " to bring together
knowledgeable speakers to present new and exciting topics on all
things Clojure and ClojureScript."]
     [:p "It is our intention to keep the conferences lean, inclusive and
rewarding to all attendees and to promote other Clojure conferences in
Europe and worldwide."]]]
   ;; CFP
   [cfp
    [:p "Want to be a part of the show?"]
    [:p "Call for papers are now open! 🥳"]
    [:a {:href ""} "Apply"]
    [:small "Questions? Contact us through TODO"]]
   ;; Keynotes
   ;; Speakers
   ;; Instructions
   [:p "Please review our code of conduct, relax and enjoy the conference! If you have any questions, please do email us at info@reclojure.org"]
   ])
