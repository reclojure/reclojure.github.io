(ns org.reclojure.views.assets
  (:require [lambdaisland.ornament :refer [defstyled]]))

(defstyled reclojure-symbol :img
  {:height "5rem"
   :width "5rem"
   :max-width "unset"
   :transform "rotate(-10deg)"
   :filter "drop-shadow(0px 0px 1px hsla(0,0%,0%,0.15))"})
