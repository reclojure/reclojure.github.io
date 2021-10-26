(ns org.reclojure.views.components.workshops
  (:require [lambdaisland.ornament :as o]
            [org.reclojure.db :as db]
            [garden.selectors :as gs]
            [org.reclojure.views.utils :as utils]
            [org.reclojure.views.-colors :as c]))

(o/defstyled table :table
  {:border-collapse "collapse"})

(o/defstyled head :thead
  {:filter "grayscale(50%) opacity(50%)"
   :margin-bottom "2rem"
   :display "block"}
  [:at-media {:min-width "60rem"}
   {:display "revert"
    :filter "revert"}])

(o/defstyled body :tbody
  {}
  [:a {:color "black"
       :text-decoration "underline 0.1em"}]
  [:at-media {:min-width "60rem"}
   [:> [(gs/nth-child "4n+1")
        {:background-color c/lighter-blue
         :color c/copy-blue}
        [:a {:color c/copy-blue}]]]
   [:> [(gs/nth-child "4n+3")
        {:background-color c/lighter-green
         :color c/darker-green}
        [:a {:color c/darker-green}]]]])

(o/defstyled row :tr
  {:display "flex"
   :flex-direction "column"
   :text-align "left"
   :margin-bottom "2rem"

   :box-shadow [["1rem" "1rem" 0 c/light-blue]]
   :border ["1px" "solid" c/light-blue]}
  [:> [(gs/nth-child "2n+1") {:background-color c/lighter-blue}]]
  [:&:last-child {:margin-bottom "initial"}]
  [:at-media {:min-width "60rem"}
   {:display "revert"
    :box-shadow "revert"
    :border "revert"}
   [:> [(gs/nth-child "2n+1") {:background-color "revert"}]]])

(def cell {:flex-basis "2rem"
           :line-height 1.4
           :padding-inline "1.5rem"
           :padding-block ".5rem"
           :vertical-align "baseline"})

(o/defstyled th :th
  cell
  {:color c/gray
   :font-weight 400
   :font-style "italic"}
  [:at-media {:min-width "60rem"}
   {:line-height 2
    :font-style "revert"
    :font-variant "all-small-caps"}])

(o/defstyled td :td
  cell
  [:time {:font-style "italic"}])

(o/defstyled workshop-title :h3
  {:font-weight 400
   :margin 0
   :padding-block "0.5rem"
   :font-size "1rem"})

(o/defstyled workshops :section
  ;; Section boilerplate to be abstracted
  {:margin ["13vh" "auto" "20vh"]
   :width "min(82%, 76.75rem)"}
  [:.pre-title {:font-size "1.3rem"
                :color c/gray
                :font-variant "all-small-caps"
                :margin 0}]
  [:h2 {:font-size "3.5rem"
        :font-weight 700
        :font-family "inter, sans-serif"
        :margin "0 0 3rem"}]
  ([_]
   [:<>
    [:p.pre-title "Confirmed"]
    [:h2 "Workshops"]
    [table
     [head
      [row
       [th "Date"]
       [th "Title"]
       [th "Presenter"]
       [th "Libraries"]]]
     [body
      (for [{:keys [#_datetime title libraries presenter]}
            (filter :confirmed db/workshops)]
        [row
         [td {:class "datetime"} [:time {:datetime ""}
                                  [utils/nowrap "To be defined"]]]
         [td {:class "title"} [workshop-title title]]
         [td {:class "presenter"} [utils/nowrap presenter]]
         [td {:class "libs"}
          (let [lib-link (fn [{:keys [href name]}]
                           (utils/external-link {:href href} name))
                linked-libraries (map lib-link libraries)]
            (-> ", "
                repeat
                (interleave linked-libraries)
                rest))]])]]]))
