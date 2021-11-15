(ns org.reclojure.views.home
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.db :as db]
            [org.reclojure.views.partials :as partials]
            [org.reclojure.views.utils :as utils]
            [org.reclojure.views.-colors :as c]
            [org.reclojure.views.assets :as assets]
            [org.reclojure.views.components.keynote-speakers :as keynotes]
            [org.reclojure.views.components.workshops :as workshops]
            [org.reclojure.views.components.schedule :as schedule]
            [clojure.string :as str]))

(def design-tokens
  {:font-small "1.3rem"
   :font-medium "1.6rem"
   :font-large "3rem"
   :font-extra-large "10rem"})

;;; "Assets"

(defstyled reclojure-title :h1
  {:margin "0 0 0 -0.05em"
   :display "grid"
   :grid-template-areas [["text"]]
   :font-size "15vmin"
   :font-weight 700}
  [:.title {:grid-area "text"
            :z-index "3"}
   [:span:first-child {:color c/light-green}]
   [:span:last-child {:color c/light-blue}]]
  ([_]
   [:<> [:span.title [:span "re:"] [:span "Clojure"]]]))

;;; Globals

(defstyled page-wrapper :div
  {})

;;; Components

(defstyled banner :section
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
   {:display "flex"
    :flex-wrap "wrap"
    :row-gap "2rem"}
   [:div [:p {:min-width "40vw"}]]
   [":first-child" {:flex 4}]
   [:article {:flex 5
              :overflow-y "scroll"
              :max-height "20rem"
              :min-width "min(80vmin, 28rem)"}]
   [:p {:font-size (:font-small design-tokens)
        :line-height 1.6}
    [:&:last-child {:margin-bottom 0}]]
   [:at-media {:min-width "40em"}
    {:grid-template-columns "40% 1fr"
     :column-gap "2rem"}
    [:p {:grid-column-end "2"}]]])

#_(defstyled cfp :div
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
  {})

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
  [:at-media {:min-width "60em"}
   {:grid-template-columns "1fr 1fr"}]
  [:img {:padding "1rem"
         :max-height "8rem"}]
  [:.juxt {:max-height "7rem"}]
  [:.cognitect {:max-height "13rem"}]
  [:.healthunlocked {}]
  [:.freshcode {:max-height "13rem"}]
  [:.gaiwan {:max-height "7rem"}]
  [:.hyde {:max-height "11rem"}])

(defstyled speaker-card :li
  {:background-color c/white
   :box-shadow [["1rem 1rem " c/light-blue]]
   :border ["1px" "solid" c/light-blue]}

  [:a {:color "initial"}]

  [:figure {:margin 0}]

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
    [:a {:href (str "/2021/speaker/" (:slug speaker))}
     [:figure
      [:img {:src (str "images/speakers/" (:picture speaker))
             :alt (str "A picture of " (:name speaker) ".")
             :width "300"
             :height "300"}]
      [:figcaption [:h3 (:name speaker)]]]
     ;; TODO most of the speakers don't have a short brief, so while
     ;; we don't have this data, it's best to make the cards look the
     ;; same.
     #_[:p (:brief speaker)]]]))

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
     (for [{:keys [picture] :as speaker} speakers-list]
       (when-not (str/blank? picture)
         (speaker-card speaker)))
     [:div {:style {:border [["1px" "solid" c/light-blue]]
                    :box-shadow [["1rem" "1rem" 0 c/light-blue]]}}
      [:p {:style {:font-size "11rem"
                   :line-height "1.5"
                   :text-align "center"
                   :color c/light-blue
                   :margin 0
                   :transform "rotate(-11deg)"}} "?"]]
     #_[cfp {:id "cfp"}
      [:p "Want to be " [utils/nowrap "part of the show?"]]
      [:p "CFP " [utils/nowrap "ends October 10! ⏳"]]
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
      [:p [:a {:href "#keynote"} "Keynote"] " announcement, CFP begins"]
      [:small [:time {:datetime "2021-09-10"} "Friday Sept. 10"]]]
     [:li
      [:p "First " [:a {:href "#speakers"} "speakers"] " announced! 🎉. The CFP is now closed."]
      [:small [:time {:datetime "2021-10-06"} "Thu Oct. 14"]]]
     [:li
      [:p "New " [:a {:href "#workshops"} "workshops"] " section available."]
      [:small [:time {:datetime "2021-10-06"} "Thu Oct. 14"]]]
    [:li
      [:p "New " [:a {:href "#speakers"} "speaker"] ": " [:a {:href "2021/speaker/paula-gearon"} "Paula Gearon"] "!"]
      [:small [:time {:datetime "2021-10-06"} "Thu Oct. 14"]]]
    [:li
      [:p "New keynote! Please welcome " [:a {:href "#wolfram"} "Stephen Wolfram"] "!"]
      [:small [:time {:datetime "2021-10-06"} "Sun Oct. 23"]]] ]]))

;;; Main

(defn page [data]
  [:<>
   [partials/header

    [partials/navigation]]

   [:main
    [banner
     [reclojure-title]
     [:div.info
      [:p "Virtual Conference"]
      [:p "December 3-4, 2021"]]
     [:div.description
      [:div
       [:p "re:Clojure is a "
        [utils/highlight {:style {:text-shadow "0 0 .05em"}} "free"]
        ", "
        [utils/highlight {:style {:text-shadow "0 0 .05em"}} "community-driven"]
        " conference that brings together knowledgeable speakers to
         present new and exciting topics on all things Clojure and
         ClojureScript."]
       [:p "It is our intention to keep the conferences lean, inclusive and
           rewarding to all attendees and to promote other Clojure conferences in
           Europe and worldwide."]]
      [news]]]



    ;; Keynotes & Speakers
    [keynotes/keynotes {:id "keynote"}]

    [speakers {:id "speakers"} db/speakers-data]

    [schedule/schedule {:id "schedule"}]

    [workshops/workshops {:id "workshops"}]

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
       [:svg {:style {:width "100%"} :width "390.236" :height "75.266" :viewBox "0 0 103.25 19.914" :xmlns "http://www.w3.org/2000/svg"}
        [:g {:transform "translate(62.858 -64.577)" :style "shape-inside:url(#rect841);white-space:pre" :aria-label "Gaiwan"}
         [:path {:d "M-45.001 79.284c0-2.26.102-4.09.178-4.699-.381.025-.94.102-2.007.102a17.64 17.64 0 0 1-1.727-.077c.152.61.356 2.21.356 3.988v2.515c0 .457-.026.66-.077.711-.558.33-1.828.483-2.768.483-2.286 0-4.75-.89-6.452-3.125-.965-1.117-1.752-2.997-1.752-5.359 0-2.26.838-4.14 2.057-5.309 1.27-1.193 2.972-1.828 5.13-1.828 3.735 0 6.046 1.447 6.808 2.311 0-1.245.229-2.896.356-3.454-.712-.102-3.277-.966-6.427-.966-1.803 0-4.699.102-7.315 1.83-2.083 1.295-4.216 3.784-4.216 7.975 0 2.768.94 4.953 2.26 6.502 1.982 2.362 5.182 3.607 9.043 3.607 2.286 0 5.054-.483 6.578-1.067C-45 83.12-45 82.51-45 81.164zM-31.894 79.614c.076 0 .102.025.102.076a98.848 98.848 0 0 1 1.88 4.445 43.117 43.117 0 0 1 2.31-.076c.28 0 .915.025 1.575.05-.685-.914-1.88-3.504-2.997-5.79a1144.287 1144.287 0 0 0-4.699-9.754c-.406-.889-.559-1.067-.686-1.067-.177 0-.304.254-.71 1.067l-4.344 9.931c-1.22 2.591-2.108 4.496-2.718 5.64.28-.026.99-.077 1.829-.077.711 0 1.041.025 1.371.05.254-.99.94-2.87 1.55-4.419 0-.05.05-.076.101-.076zm-4.75-1.93c-.076 0-.076-.026-.05-.102l1.98-5.004 2.16 5.004c0 .076 0 .102-.077.102zM-23.081 77.861c0 2.743-.076 5.41-.203 6.274.305-.026 1.32-.076 2.032-.076.66 0 1.27.025 1.524.05-.178-.66-.254-3.708-.254-6.248v-3.81c0-3.048.127-5.436.203-6.274-.229.051-.99.102-2.108.102-.483 0-1.194 0-1.448-.051.178.711.254 3.15.254 6.223zM-16.883 67.828c.635 1.016 1.499 2.921 2.21 4.826l3.886 10.795c.229.635.381.965.533.965s.33-.33.839-1.244c1.193-2.49 3.327-7.341 4.52-9.805l4.217 10.033c.356.686.534 1.016.66 1.016.178 0 .356-.228.737-1.194 1.626-4.064 3.455-8.966 4.09-10.465.94-2.463 1.752-4.089 2.159-4.978a16.83 16.83 0 0 1-3.15.05c-.178 1.17-.635 2.515-1.27 4.446a265.573 265.573 0 0 1-2.184 6.121l-4.14-9.728c-.28-.584-.407-.864-.56-.864s-.279.178-.558.762l-4.496 9.932c-.635-1.702-1.905-5.664-2.184-6.604-.61-1.829-1.016-3.2-1.194-4.115-.356.05-1.245.102-2.235.102-.89 0-1.6-.026-1.88-.051zM16.416 79.614c.076 0 .102.025.102.076a98.848 98.848 0 0 1 1.88 4.445 43.117 43.117 0 0 1 2.31-.076c.28 0 .915.025 1.575.05-.685-.914-1.88-3.504-2.997-5.79a1144.287 1144.287 0 0 0-4.699-9.754c-.406-.889-.559-1.067-.686-1.067-.177 0-.304.254-.71 1.067l-4.344 9.931c-1.22 2.591-2.108 4.496-2.718 5.64.28-.026.99-.077 1.829-.077.711 0 1.041.025 1.371.05.254-.99.94-2.87 1.55-4.419 0-.05.05-.076.101-.076zm-4.75-1.93c-.076 0-.076-.026-.05-.102l1.98-5.004 2.16 5.004c0 .076 0 .102-.077.102zM28.151 84.11c-.254-1.702-.356-6.553-.381-10.795 2.337 2.134 7.239 7.264 9.627 9.296 1.727 1.524 2.184 1.88 2.387 1.88.178 0 .229-.127.229-1.143 0-.635-.026-2.362-.026-3.53.026-4.75.204-10.694.407-12.04-.203.05-1.092.101-1.778.101-.407 0-1.067-.025-1.296-.076.254 2.87.33 8.661.33 10.744-2.768-2.058-8.712-8.179-11.277-10.49-.458-.432-.686-.559-.788-.559-.152 0-.203.076-.203 1.194 0 3.759-.152 13.437-.356 15.443a31.246 31.246 0 0 1 1.677-.076c.482 0 .99 0 1.448.05z"}]]]]
      [:a {:href "https://freshcodeit.com/" :target "_blank" :rel "noopener"}
       [:img.freshcode {:alt "Logo for Freshcode."
                        :src "images/sponsors/freshcode.png"}]]
      [:a {:href "https://www.hyde-housing.co.uk/" :target "_blank" :rel "noopener"}
       [:img.hyde {:alt "Logo for Hyde"
                   :src "images/sponsors/hyde-logo-mod.png"}]]]]
    ;; Instructions
    ;; Footer
    ;; [:p "Please review our code of conduct, relax and enjoy the conference! If
    ;; you have any questions, please do email us at info@reclojure.org"]


    ]])
