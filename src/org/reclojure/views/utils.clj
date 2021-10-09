(ns org.reclojure.views.utils
  (:require [lambdaisland.ornament :refer [defstyled]]
            [org.reclojure.views.-colors :as c]))

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
