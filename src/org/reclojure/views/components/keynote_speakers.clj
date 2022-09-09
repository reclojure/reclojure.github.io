(ns org.reclojure.views.components.keynote-speakers
  (:require [lambdaisland.ornament :as o]
            [org.reclojure.views.utils :as utils]
            [org.reclojure.views.-colors :as c]
            [garden.selectors :as gs]
            [org.reclojure.views.assets :as assets]))

(o/defstyled speakers :ul
  {:list-style "none"
   :padding-left 0
   :margin 0})

(o/defstyled sussman :li
  {"--highlight" c/light-blue
   :display "grid"
   :grid-template-columns "1fr"
   :grid-template-rows "auto max-content min-content auto"
   :flex-wrap "wrap"
   :justify-items "center"}
  [:h3 {:border-bottom [[".5rem" "solid" "var(--highlight)"]]}]
  [:img
   ["&:nth-of-type(2)" {:box-shadow [["1rem" "1rem" 0 "var(--highlight)"]]}]]
  [:at-media {:min-width "60em"}
   {:grid-template-columns "repeat(2, 1fr)"}])

(o/defstyled wolfram :li
  {"--highlight" c/light-green
   :display "grid"
   :grid-template-columns "1fr"
   :grid-template-rows "auto max-content min-content auto"
   :flex-wrap "wrap"
   :justify-items "center"
   :margin-top "5rem"}
  [:h3 {:border-bottom [[".5rem" "solid" "var(--highlight)"]]}]
  [:img
   ["&:nth-of-type(2)" {:box-shadow [["-1rem" "1rem" 0 "var(--highlight)"]]}]]

  [:at-media {:min-width "60em"}
   {:grid-template-columns "repeat(2, 1fr)"}])

(o/defstyled name :h3
  {:font-size "clamp(1.6rem, 4.5vw, 3rem)"
   :width "min(max-content, 80%)"
   :padding-bottom "2rem"
   :grid-column "span 2"
   :justify-self "start"
   :white-space "nowrap"})

(o/defstyled wizard :img
  {:grid-area "2 / 1 / -1"
   :max-height "36rem"
   :width "auto"
   :display "none"}
  [:at-media {:min-width "60em"}
   {:display "revert"}])

(o/defstyled wolfram-symbols :img
  {:grid-area "2 / 2 / -1"
   :max-height "36rem"
   :width "auto"
   :display "none"}
  [:at-media {:min-width "60em"}
   {:display "revert"}])

(o/defstyled picture :img
  {:margin "1rem"})

(o/defstyled description :p
  {:max-width "34rem"
   :font-size "1.25rem"
   :margin-top "2rem"
   :grid-row "3"
   :line-height 1.8}
  [:a {:color "black"
       :text-decoration [["underline" "0.2em" "var(--highlight)"]]
       :text-decoration-skip-ink "none"
       :font-weight 600}]
  [:at-media {:min-width "60em"}
   {:grid-row "revert"}])

(o/defstyled sussman-interview :p
  {:grid-column 1
   :justify-self "start"}
  [:a {:text-decoration "underline .2em var(--highlight)"
       :font-size "1.25rem"
       :font-weight 700
       :color c/dark-blue
       :display "inline-flex"}]
  [:svg {:height "1em"
         :width "2em"
         :padding-inline-end ".5em"}]
  [:at-media {:min-width "60em"}
   {:grid-column 2}]
  ([_]
   [:<>
    [utils/external-link
     {:href "https://pod.link/1471141263/episode/e29bac1bc31b7bd61e693d7daca1e3f6"}
     assets/fa-microphone-lines "NEW: JUXT Cast interview with Gerald Sussman!"]]))

(o/defstyled keynotes :section
  {:margin ["13vh" "auto" "20vh"]
   :max-width "min(80%, 69rem)"}
  [:.pre-title {:font-size "1.3rem"
                :color c/gray
                :font-variant "all-small-caps"
                :margin 0}]
  [:h2 {:font-size "3.5rem"
        :font-weight 700
        :font-family "inter, sans-serif"
        :margin "0 0 3rem"}
   [:span {:color c/gray}]]
  ([_]
   [:div
    [:p.pre-title "Confirmed"]
    [:h2 "Keynote " [:span "Speakers"]]
    [speakers

     ;; Sussman
     [sussman
      [name {:class "sussman"} "Alex Miller"]
      [wizard
       {:alt ""
        :src "images/alex-tools.png"
        :width "341"
        :height "660"}]
      [picture {:alt "A picture of a Alex Miller smiling with some blurry trees
                      in the background."
                :src "images/speakers/alex-miller.jpg"
                :width "300"
                :height "300"}]
      (let [alex-miller [utils/external-link
                         {:href "https://insideclojure.org/"}
                         "Alex Miller"]
            nubank [utils/external-link
                    {:href "https://nubank.com.br/en/"}
                    "Nubank"]
            clojure-cli-tools [utils/external-link
                               {:href "https://clojure.org/guides/deps_and_cli"}
                               "Clojure CLI tools"]
            spec [utils/external-link
                  {:href "https://clojure.org/guides/spec"}
                  "spec"]
            many-other-libraries [utils/external-link
                                  {:href "https://github.com/puredanger"}
                                  "many other libraries"]
            clojure-applied [utils/external-link
                             {:href "https://pragprog.com/titles/vmclojeco/clojure-applied/"}
                             "Clojure Applied"]
            programming-clojure [utils/external-link
                                 {:href "https://pragprog.com/titles/shcloj3/programming-clojure-third-edition/"}
                                 "Programming Clojure"]
            clojure-west [utils/external-link {:href ""} "Clojure/west"]
            strange-loop [utils/external-link {:href ""} "Strange Loop"]]
        [description
         alex-miller " has been part of the Clojure core
         team since 2013 and is now part of " nubank ", where he
         continues working on Clojure features, the "
         clojure-cli-tools ", " spec ", and "
         many-other-libraries ". Alex co-authored the books "
         clojure-applied " and " programming-clojure " and created the
         conferences " clojure-west " and " strange-loop "."])]

     ;; Wolfram
     [wolfram {:id "wolfram"}
      [name "James Gosling"]
      [wolfram-symbols {:alt "A drawing of Duke (the mascot of the Java
                              programming language) raising one hand."
                        :src "images/duke.png"}]
      [picture {:alt "A picture of James Gosling (wearing glasses and with a
                      white beard) smiling in a sunny day."
                :src "images/speakers/james-gosling.jpg"}]
      (let [james-gosling [utils/external-link
                           {:href "https://en.wikipedia.org/wiki/James_Gosling"}
                           "James Gosling"]
            sun-microsystems [utils/external-link
                              {:href "https://en.wikipedia.org/wiki/Sun_Microsystems_Laboratories"}
                              "Sun Microsystems"]
            java [utils/external-link
                  {:href "http://java.sun.com/"}
                  "Java language"]
            emacs [utils/external-link {:href "https://en.wikipedia.org/wiki/Emacs"} "Emacs"]]
        [description
         james-gosling " is Distinguished Engineer at Amazon Web Services. When
        working at " sun-microsystems " he designed and implemented the first
        version of the " java ". He is also the author of the first " emacs "
        to run on Unix, parts of which still live in the present version."])]]]))
