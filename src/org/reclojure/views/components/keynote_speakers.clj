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
      [name {:class "sussman"} "Gerald Jay Sussman"]
      [wizard
       {:alt "The wizard featured in the cover of the book Structure and
              Interpretation of Computer Programs is depicted here shooting
              laser beams through his eyes while holding an orb with the
              words Eval and Apply."
        :src "images/wizard.png"
        :width "341"
        :height "660"}]
      [picture
       {:alt "A picture of a smiling Gerald Jay Sussman, who is wearing
              glasses and a blue plaid shirt."
        :src "images/speakers/gerald-jay-sussman-300x300.jpg"
        :width "300"
        :height "300"}]
      (let [sussman [utils/external-link
                     {:href "https://www.csail.mit.edu/person/gerald-sussman"}
                     "Gerald Jay Sussman"]
            MIT [:<>
                 [utils/external-link {:href "https://web.mit.edu/"}
                  "Massachusetts Institute of Technology"] " ("
                 [:abbr {:title "Massachusetts Institute of Technology"}
                  "MIT"] ")"]
            SICP [utils/external-link
                  {:href (str "https://mitpress.mit.edu/sites/default/files/"
                              "sicp/index.html")}
                  "Structure and Interpretation of Computer Programs"]
            scheme [utils/external-link
                    {:href "http://groups.csail.mit.edu/mac/projects/scheme/"}
                    "Scheme"]]
        [description
         sussman " is cocreator of the programming
         language " scheme ", coauthor of the book " SICP ", and the
         Panasonic Professor of Electrical Engineering at the " MIT "."])
      [sussman-interview]]

     ;; Wolfram
     [wolfram {:id "wolfram"}
      [name "Stephen Wolfram"]
      [wolfram-symbols {:alt "Symbol for Wolfram's Mathematica."
                        :src "images/mathematica.png"}]
      [picture {:alt "A picture of Stephen Wolfram (wearing glasses and a blue
                      shirt) smiles."
                :src "images/speakers/stephen-wolfram.png"}]
      (let [wolfram [utils/external-link
                     {:href "https://www.stephenwolfram.com/"}
                     "Stephen Wolfram"]
            mathematica [utils/external-link
                         {:href "https://www.wolfram.com/mathematica/"}
                         "Mathematica"]
            wolfram-alpha [utils/external-link
                           {:href "http://www.wolframalpha.com/"}
                           "Wolfram|Alpha"]
            wolfram-language [utils/external-link
                              {:href "http://www.wolfram.com/language/"}
                              "Wolfram Language"]
            a-new-kind-of-science [utils/external-link
                                   {:href "https://www.wolframscience.com/"}
                                   "A New Kind of Science"]
            CEO [:abbr {:title "Chief Executive Officer"} "CEO"]
            wolfram-research [utils/external-link
                              {:href "http://www.wolfram.com/"}
                              "Wolfram Research"]]
        [description
         wolfram " is the creator of " mathematica ", " wolfram-alpha
         " and the " wolfram-language "; the author of " a-new-kind-of-science
         "; and the founder and " CEO " of " wolfram-research "."])]]]))
