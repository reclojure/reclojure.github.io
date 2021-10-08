(ns org.reclojure.views.home
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.db :as db]
            [garden.selectors :as gsels]
            [org.reclojure.views.-colors :as c]
            [org.reclojure.views.-sizes :as s]))

(def design-tokens
  {:font-small "1.3rem"
   :font-medium "1.6rem"
   :font-large "3rem"
   :font-extra-large "10rem"})

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
  {:height "5rem"
   :width "5rem"
   :max-width "unset"
   :transform "rotate(-10deg)"
   :filter "drop-shadow(0px 0px 1px hsla(0,0%,0%,0.15))"})

(defstyled reclojure-title :h1
  {:margin "0 0 0 -0.05em"
   :display "grid"
   :grid-template-areas [["text"]]}
  [:.title {:grid-area "text"
            :z-index "3"}
   [:span:first-child {:color c/light-green}]
   [:span:last-child {:color c/light-blue}]]
  ;; ["&::before" {:background "no-repeat linear-gradient(white, white) 15% 50%/45% 40%"
  ;;               :content "\"re:Clojure\""
  ;;               :color c/white
  ;;               :filter "drop-shadow(0px 0px 1px hsla(0, 0%, 0%, 0.15))"
  ;;               :grid-area "text"
  ;;               :-webkit-text-stroke (str "0.25em " c/white)
  ;;               :z-index "2"}]
  ;; ["&::after" {:content "\"re:Clojure\""
  ;;              :grid-area "text"
  ;;              :text-shadow "0px 0px 1px black, -5px 1px 9px black"
  ;;              :z-index "1"}
  ;;  [:at-media {:min-width "60em"}
  ;;   {:text-shadow "3px 2px 25px black, -5px 1px 25px"}]]
  ([_]
   [:<> [:span.title [:span "re:"] [:span "Clojure"]]]))

;;; Globals

(defstyled page-wrapper :div
  {})

;;; Components

(defstyled header :header
  {:margin-bottom "10vh"}
  [:h1
   {:font-size "15vmin"
    :font-weight 700}]
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
    {:font-size (:font-small design-tokens)
     :font-weight 700
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
   :padding "5vmin 2.5rem"
   :width "100%"
   :max-width "69rem"}
  [:.info
   {:font-size (:font-medium design-tokens)
    :margin-top "2rem"
    :margin-bottom "4rem"}
   [:p {:margin 0}]
   [:p:last-child {:font-weight 700
                   :font-size (:font-large design-tokens)}]]
  [:.description
   {:display "grid"
    :grid-template-columns "1fr"}
   [:p {:font-size (:font-small design-tokens)
        :line-height 1.6}
    [:&:last-child {:margin-bottom 0}]]
   [:at-media {:min-width "40em"}
    {:grid-template-columns "40% 1fr"
     :grid-column-gap "2rem"}
    [:p {:grid-column-end "2"}]]])

(defstyled cfp :div
  {:text-align "center"
   :border ["1px" "solid" c/light-green]
   :box-shadow [["1rem" "1rem" c/light-green]]
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
   {:grid-column "span 2"}])

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
                         ["."     "."     "sussman" "sussman" "sussman" "."]]
   :overflow "hidden"}
  [:.line {:background-color c/light-green
           :height "0.7rem"
           :grid-area "line"}]
  [:.announcement
   {:color c/white
    :max-width "22.3rem"
    :font-size "2.5rem"
    :font-weight 700
    :grid-area "intro"
    :justify-self "end"
    :padding-left "2rem"}]
  [:.core {:grid-area "core"
           :display "grid"
           :grid-template-columns "20fr 4fr 11fr 14fr 4fr"
           :grid-template-rows "3rem 13rem 3rem 3rem 2rem"
           :width "47.75rem"
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
  [:at-media {:min-width "40em"}
   {:grid-template-columns "1fr 1fr"}]
  [:img {:padding "1rem"
         :max-height "8rem"}]
  [:.juxt {}]
  [:.cognitect {:max-height "13rem"}]
  [:.healthunlocked {}]
  [:.freshcode {:max-height "13rem"}]
  [:.gaiwan {:max-height "7rem"}])

(defstyled speaker-card :li
  {:background-color c/white
   :box-shadow [["1rem 1rem " c/light-blue]]
   :border ["1px" "solid" c/light-blue]}

  [:a {:color "initial"}]
  
  ["> :last-child" {:padding-bottom 0}]
  
  [:img {:width "100%"
         :object-fit "cover"
         :aspect-ratio "1/1"
         :max-height "max(10rem, 30vh)"}
   ["~ *" {:margin-left "1rem"
           :margin-right "1rem"}]]
  
  [:h3 {:font-size "2rem"
        :font-weight 700
        :line-height 1
        :margin-top "1.3rem"
        :margin-bottom "1.3rem"}]
  
  [:p {:font-size "1rem"
       :line-height 1.3
       :margin-bottom "2rem"}]
  ([speaker]
   [:<>
    [:a {:href (str "/2021/speaker/" (:slug speaker))}                     ;FIXME
     [:img {:src (str "images/speakers/" (:picture speaker))
            :alt (str "A picture of " (:name speaker) ".")
            :width "300"
            :height "300"}]
     [:h3 (:name speaker)]
     [:p (:brief speaker)]]]))

(defstyled speakers :section
  {:display "grid"
   :margin "13vh auto 20vh"
   :max-width "69rem"
   :padding-left "2rem"
   :padding-right "2rem"}
  [:.pre-title {:font-size (:font-small design-tokens)
                :color c/gray
                :font-variant "all-small-caps"
                :margin 0}]
  [:h2 {:font-size "3.5rem"
        :font-weight 700
        :font-family "inter, sans-serif"
        :margin "0 0 3rem"}]
  [:.speaker-list {:display "grid"
                   :grid-template-columns "repeat(auto-fill, minmax(16rem, 1fr))"
                   :grid-gap "3rem"
                   :list-style "none"
                   :padding 0}]
  ([_ speakers-list]
   [:<>
    [:p.pre-title "Confirmed"]
    [:h2 "Speakers"]
    [:ul.speaker-list
     (for [speaker speakers-list]
       (speaker-card speaker))
     [:div {:style {:border [["1px" "solid" c/light-blue]]
                    :box-shadow [["1rem" "1rem" 0 c/light-blue]]}}
      [:p {:style {:font-size "11rem"
                   :line-height "1.5"
                   :text-align "center"
                   :color c/light-blue
                   :margin 0
                   :transform "rotate(-11deg)"}} "?"]]
     [cfp {:id "cfp"}
      [:p "Want to be " [nowrap "part of the show?"]]
      [:p "CFP " [nowrap "ends October 10! ⏳"]]
      [:a.apply {:href "https://docs.google.com/forms/d/1LSas3gB4rOmRAoQ_6QLcwiB3HgNeiBnyjhqppPRPpzE"
                 :target "_blank"
                 :rel "noopener"} "Apply"]
      [:small "Questions? Email us at " [:a {:href "mailto:cfp@reclojure.org"} "cfp@reclojure.org"]]]]]))

(defstyled news :article
  {:background-color c/white
   :grid-area "1 / 2 / 3"
   :padding "2rem"
   :border ["1px" "solid" c/light-blue]
   :box-shadow [["1rem" "1rem" 0 c/light-blue]]}
  [:ol {:list-style-type "\"🔹 \""
        :padding-left "1rem"
        :display "flex"
        :flex-direction "column-reverse"
        :gap "1rem"}]
  [":where(p, small, h2)" {:margin 0}]
  [":is(p, #id)" {:line-height 1.4}]
  [:time {:font-size "1rem"
          :color c/gray
          :font-varient "all-small-caps"}]
  ([_]
   [:<>
    [:h2 "News"]
    [:ol {:reversed true}
     [:li
      [:p [:a {:href "#keynote"} "Keynote"] " announcement, " [:a {:href "#cfp"} "CFP"] " begins"]
      [:small [:time {:datetime "2021-09-10"} "Friday Sept. 10"]]]
     [:li
      [:p "First " [:a {:href "#speakers"} "speakers"] " announced! 🎉 " [:a {:href "#cfp"} "CFP"] " deadline is October 10!"]
      [:small [:time {:datetime "2021-10-06"} "Wed. Oct. 06"]]]]]))

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
      [:li [:a {:href "#keynote"} "Keynote"]]
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
           Europe and worldwide."]]
      [news]]]]

   

   ;; Keynotes & Speakers
   [keynote {:id "keynote"}
    [:div.line]
    [:p.announcement "We are thrilled to announce the keynote speaker of this year"]
    [:img.wizard {:alt "A Wizard in awe shoots laser beams through his eyes while holding an orb with the words Eval and Apply."
                  :src "images/wizard.png"
                  :width "341"
                  :height "660"}]
    [:div.core
     [:div.red]
     [:img.gerald {:alt "A picture of Gerald Jay Sussman."
                   :src "images/speakers/gerald-jay-sussman-300x300.jpg"
                   :width "300"
                   :height "300"}]
     [:div.black]]
    [:p.announcement.sussman "Gerald Jay Sussman"]
    [:img.sorceress {:alt "A Sorceress who is wearing boss glasses points at a book she holds with the acronym JVM in its cover."
                     :src "images/sorceress.png"
                     :width "258"
                     :height "591"}]]

   [speakers {:id "speakers"} db/speakers-data]

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
