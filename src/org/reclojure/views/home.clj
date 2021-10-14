(ns org.reclojure.views.home
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.views.-colors :as c]))

(let [inter "Inter, sans-serif"]
  (def design-tokens
    {:font-regular {:font-family inter
                    :font-weight 400}
     :font-bold {:font-family inter
                 :font-weight 700}
     :font-small "1.3rem"
     :font-medium "1.5rem"
     :font-large "3rem"
     :font-extra-large "10rem"}))

;;; Helpers

(defstyled disabled :div
  {:color [[c/dark-blue " !important"]]
   :cursor "default"
   :text-decoration "line-through"}
  [:at-media {:min-width "60em"}
   {:color [[c/disabled-blue "!important"]]}])

(defstyled highlight :mark
  {:margin "0 -0.4em"
   :padding "0.1em 0.4em"
   :border-radius "0.8em 0.3em"
   :background "transparent"
   :background-image "linear-gradient(to right, rgba(255,225,0,0.1), rgb(0 255 28 / 81%) 4%, rgba(20, 255, 0, 0.3))"
   :-webkit-box-decoration-break "clone"
   :box-decoration-break "clone"})

(defstyled nowrap :span
  {:white-space "nowrap"})

(defstyled small-caps :span
  {:font-variant "all-small-caps"})

;;; "Assets"

(defstyled reclojure-symbol :img
  {:height "6.25rem"
   :width "6.25rem"
   :max-width "unset"
   :transform "rotate(-10deg)"
   :filter "drop-shadow(0px 0px 1px hsla(0,0%,0%,0.15))"})

(defstyled reclojure-title :h1
  {:margin-left "-0.05em"
   :display "grid"
   :grid-template-areas [["text"]]}
  [:.title {:grid-area "text"
            :z-index "3"}
   [:span:first-child {:color c/light-green}]
   [:span:last-child {:color c/light-blue}]]
  ["&::before" {:background "no-repeat linear-gradient(white, white) 15% 50%/45% 40%"
                :content "\"re:Clojure\""
                :color c/white
                :filter "drop-shadow(0px 0px 1px hsla(0, 0%, 0%, 0.15))"
                :grid-area "text"
                :-webkit-text-stroke (str "0.25em " c/white)
                :z-index "2"}]
  ["&::after" {:content "\"re:Clojure\""
               :grid-area "text"
               :text-shadow "0px 0px 1px black, -5px 1px 9px black"
               :z-index "1"}
   [:at-media {:min-width "60em"}
    {:text-shadow "3px 2px 25px black, -5px 1px 25px"}]]
  ([_]
   [:<> [:span.title [:span "re:"] [:span "Clojure"]]]))

;;; Globals

(defstyled page-wrapper :div
  {})

;;; Components

(defstyled header :header
  [:h1
   (:font-bold design-tokens)
   {:font-size "15vmin"}]
  [:p :a {:color c/darker-green}]
  [:at-media {:min-width "60em"}
   {;; :background-image "url(/images/liquid-cheese.svg)"
    :background-size "cover"
    :min-height "100vh"}])

(defstyled navigation :nav
  (:font-bold design-tokens)
  {:display "flex"
   :justify-content "space-between"
   :align-items "center"

   :margin "0 auto"
   :padding "1.5rem"
   :width "100%"
   :max-width "1100px"}
  [:at-media {:min-width "40em"}
   {:padding "2.5rem"}]
  [:ul {:display "flex"
        :flex-wrap "wrap"
        :flex-direction "column"
        :align-items "flex-end"}
   [:li
    (:font-bold design-tokens)
    {:font-size (:font-small design-tokens)
     :margin-bottom "2rem"}
    [:a {:color c/dark-blue}]
    [:&:last-child {:margin-bottom 0}]]
   ;; The following is only necessary because Safari doesn't support
   ;; flexbox gap yet
   [:at-media {:min-width "40em"}
    {:flex-direction "row"}
    [:li {:margin-right "2rem"
          :margin-bottom 0}
     [:&:last-child {:margin-right 0}]]]
   [:at-media {:min-width "80em"}
    [:li:first-child {:display "none"}]]])

(defstyled banner :div
  {:margin "0 auto"
   :padding "10vmin 2.5rem"
   :width "100%"
   :max-width "1100px"}
  [:.info
   {:font-family "inter, sans-serif"
    :font-size (:font-medium design-tokens)
    :margin-top "2rem"
    :margin-bottom "4rem"}
   [:p:last-child {:font-weight 700
                   :font-size (:font-large design-tokens)}]]
  [:.description
   (:font-regular design-tokens)
   {:display "grid"
    :grid-template-columns "1fr"}
   [:p {:font-size (:font-medium design-tokens)
        :line-height 1.6}
    [:&:first-child {:margin-bottom "1rem"}]]
   [:at-media {:min-width "40em"}
    {:grid-template-columns "40% 1fr"}
    [:p {:grid-column-start "2"}]]])

(defstyled cfp :section
  (:font-regular design-tokens)
  {:text-align "center"
   :margin "4rem 2rem"
   :color c/darker-green}
  [:p {:font-size "2rem"
       :font-weight 700
       :margin-top "1rem"
       :margin-bottom "1rem"
       :line-height 1.2}]
  [:a {:color c/light-blue}]
  [:.apply {:display "inline-block"
            :padding ".8rem 2rem"
            :background-image "linear-gradient(to bottom right, lime, lightgreen)"
            :border "none"
            :border-radius "2rem"
            :cursor "pointer"
            :font-weight 700
            :transition "all .3s"
            :box-shadow "0 1rem 4rem -1.5rem transparent"
            :margin "1rem 0 0"
            :font-size "1.5rem"
            :color c/dark-green}]
  [:small {:display "block"
           :margin "1.5rem"
           :font-size "1.5rem"}]
  [:at-media {:min-width "40em"}
   {:margin "10vmin 2rem 10vmin"}]
  [:at-media {:min-width "80em" :min-height "62rem"}
   {:position "absolute"
    :left "5vmin"
    :bottom "5vmin"
    :background-image "linear-gradient(to bottom right, #ebfdeb, #ebfbeb, white)"
    :padding "2rem"
    :border-radius "2rem"
    :box-shadow "2px 2px 0px 2px lightgreen"
    :margin 0}])

(defstyled keynote :section
  {:background-color "#6864e6"
   :display "grid"
   ;; :grid "\"preview\" minmax(56.25%,auto) \"content\" auto/minmax(0,100%)"
   :grid-template-columns "repeat(6, 1fr)"
   :grid-template-rows "10vh auto auto auto"
   :grid-template-areas [["."     "."     "."       "."       "."       "."]
                         ["line"  "line"  "line"    "line"    "line"    "."]
                         ["intro" "intro" "intro"   "intro"   "intro"   "."]
                         ["."     "core"  "core"    "core"    "core"    "."]
                         ["."     "."     "sussman" "sussman" "sussman" "."]]}
  [:.line {:background-color c/light-green
           :height "10px"
           :grid-area "line"}]
  [:.announcement
   (:font-bold design-tokens)
   {:color c/white
    :max-width "15ch"
    :font-size "2.5rem"
    :grid-area "intro"
    :justify-self "end"
    :padding-left "2rem"}]
  [:.core {:grid-area "core"
           :display "grid"
           :grid-template-columns "20fr 4fr 11fr 14fr 4fr"
           :grid-template-rows "3rem auto 3rem 3rem 2rem"
           :width "764px"
           :max-width "100vw"
           :justify-self "center"
           :margin-top "3rem"}
   [:.red {:background-color c/light-green
           :grid-area "1 / 1 / -3 / -3"}]
   [:.gerald {:grid-area "2 / 2 / -2 / -2"
              :z-index 1}]
   [:.black {:background-color "black"
             :grid-area "3 / -4 / -1 / -1"}]]
  [:.sussman {:grid-area "sussman"
              :margin-top "3rem"
              :font-size "3.5rem"
              :padding-left 0
              :padding-bottom "10vh"
              :justify-self "center"}]
  [:.wizard {:z-index 2
             :grid-area "3 / 1 / 6 / 3"
             :justify-self "center"
             :align-self "center"}]
  [:.sorceress {:z-index 2
                :grid-area "3 / -1 / 6 / -3"
                :justify-self "center"
                :align-self "center"}
   [:at-media {:max-width "60em"}
    {:display "none"}]])

(defstyled sponsors :section
  {:margin "10vh 0"}
  [:h2 {:text-align "center"
        :font-size "3.5rem"
        :font-weight 700
        :font-family "inter, sans-serif"
        :margin "5vh 0"}])

(defstyled logos :div
  {:display "grid"
   :padding "0 5vw"
   :grid-template-columns "1fr"
   :gap "3rem"
   :max-width "max-content"
   :margin "0 auto"
   :place-items "center"}
  [:at-media {:min-width "40rem"}
   {:grid-template-columns "1fr 1fr"}]
  [:img {:padding "1rem"
         :max-height "8rem"}]
  [:.juxt {}]
  [:.cognitect {:max-height "13rem"}]
  [:.healthunlocked {}]
  [:.freshcode {:max-height "13rem"}]
  [:.gaiwan {:max-height "7rem"}])

(defstyled speaker-card :li
  {:font-family "inter, sans-serif"}
  [:.speaker-info
   [:.name
    (:font-bold design-tokens)
    {:font-size (:font-large design-tokens)
     :line-height 1
     :margin "1.5rem 0 1.3rem"}]
   [:.description {:font-size (:font-small design-tokens)
                   :line-height 1.3}]]
  ([speaker]
   [:<>
    [:a.speaker {:href "#"}
     [:div.speaker-image
      [:img.speaker-image__img {:src "images/gerald-jay-sussman-300x300.jpg"
                                :width "300"
                                :height "300"}]]
     [:div.speaker-info
      [:p.name (:name speaker)]
      [:p.description (:brief speaker)]]]]))

(defstyled speakers :section
  {:display "grid"
   :margin "13vh auto 5vh"
   :max-width "62.25rem"}
  [:.pre-title {:font-size (:font-small design-tokens)
                :color c/gray
                :font-variant "all-small-caps"}]
  [:h2 {:font-size "3.5rem"
        :font-weight 700
        :font-family "inter, sans-serif"
        :margin "0 0 3rem"}]
  [:.speaker-list {:display "grid"
                   :grid-template-columns "repeat(auto-fill, minmax(300px, 1fr))"
                   :grid-gap "3rem"
                   :list-style "none"}]
  ([_ speakers-list]
   [:<>
    [:p.pre-title "Awesome"]
    [:h2 "Speakers"]
    [:ul.speaker-list
     (for [speaker speakers-list]
       (speaker-card speaker))]]))

;;; Main

(defn page [data]
  [:<>
   [header

    [navigation
     [:a {:href "#"}
      [reclojure-symbol {:alt "re:Clojure Symbol"
                         :src "images/re-logo-white-bg.png"
                         :width "324"
                         :height "327"}]]
     [:ul
      [:li [:a {:href "#cfp"} "CFP"]]
      [:li [:a {:href "#speakers"} "Speakers (" [small-caps "WIP"]] ")"]
      [:li [:a {:href "#sponsors"} "Sponsors"]]
      [:li [:a {:class disabled :href "#instructions"} "Instructions"]]
      [:li [:a {:class disabled :href "#"} "Tickets"]]]]

    [banner
     [reclojure-title]
     [:div.info
      [:p "Virtual Conference"]
      [:p "December 3-4, 2021"]]
     [:div.description
      [:p [highlight {:style {:text-shadow "0 0 .05em"}} ;FIXME Ornament bug
           "re:Clojure is a *free*, community-driven conference"]
       " that brings together knowledgeable speakers to present new and exciting
             topics on all things Clojure and ClojureScript."]
      [:p "It is our intention to keep the conferences lean, inclusive and
           rewarding to all attendees and to promote other Clojure conferences in
           Europe and worldwide."]]]]

   [cfp {:id "cfp"}
    [:p "Want to be " [nowrap "part of the show?"]]
    [:p "Call for papers " [nowrap "are now open! 🥳"]]
    [:a.apply {:href "https://docs.google.com/forms/d/1LSas3gB4rOmRAoQ_6QLcwiB3HgNeiBnyjhqppPRPpzE"
               :target "_blank"
               :rel "noopener"} "Apply"]
    [:small "Questions? Email us at " [:a {:href "mailto:cfp@reclojure.org"} "cfp@reclojure.org"]]]

   ;; Keynotes & Speakers
   [keynote {:id "speakers"}
    [:div.line]
    [:p.announcement "We are thrilled to announce the keynote speaker of this year"]
    [:img.wizard {:alt "A Wizard in awe shoots laser beams through his eyes while holding an orb with the words Eval and Apply."
                  :src "images/wizard.png"
                  :width "341"
                  :height "660"}]
    [:div.core
     [:div.red]
     [:img.gerald {:alt "A picture of Gerald Jay Sussman."
                   :src "images/gerald-jay-sussman-300x300.jpg"
                   :width "300"
                   :height "300"}]
     [:div.black]]
    [:p.announcement.sussman "Gerald Jay Sussman"]
    [:img.sorceress {:alt "A Sorceress who is wearing boss glasses points at a book she holds with the acronym JVM in its cover."
                     :src "images/sorceress.png"
                     :width "258"
                     :height "591"}]]

   [speakers [{}]]

   ;; Sponsors
   [sponsors {:id "sponsors"}
    [:h2 "Thanks to our lovely sponsors"]
    [logos
     [:a {:href "https://www.juxt.pro" :target "_blank" :rel "noopener"}
      [:img.juxt {:alt "The logo for JUXT."
                  :src "images/sponsors/juxt-mod.svg"
                  :width "375"
                  :height "128"}]]
     [:a {:href "https://cognitect.com" :target "_blank" :rel "noopener"}
      [:img.cognitect {:alt "Logo for Cognitect."
                       :src "images/sponsors/cognitect.svg"
                       :width "645"
                       :height "207"}]]
     [:a {:href "https://healthunlocked.com" :target "_blank" :rel "noopener"}
      [:img.healthunlocked {:alt "Logo for HealthUnlocked."
                            :src "images/sponsors/healthunlocked.svg"
                            :width "862"
                            :height "113"}]]
     [:a {:href "https://gaiwan.co" :target "_blank" :rel "noopener"}
      [:img.gaiwan {:alt "Logo for Gaiwan."
                    :src "images/sponsors/gaiwan.png"
                    :width "435"
                    :height "111"}]]
     [:a {:href "https://freshcodeit.com/" :target "_blank" :rel "noopener"}
      [:img.freshcode {:alt "Logo for Freshcode."
                    :src "images/sponsors/freshcode.png"}]]]]
   ;; Instructions
   ;; Footer
   ;; [:p "Please review our code of conduct, relax and enjoy the conference! If
   ;; you have any questions, please do email us at info@reclojure.org"]
   ]
  )
