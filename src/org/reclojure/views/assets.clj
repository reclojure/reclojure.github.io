(ns org.reclojure.views.assets
  (:require [lambdaisland.ornament :refer [defstyled]]))

(defstyled reclojure-symbol :img
  {:height "5rem"
   :width "5rem"
   :max-width "unset"
   :transform "rotate(-10deg)"
   :filter "drop-shadow(0px 0px 1px hsla(0,0%,0%,0.15))"})

(defstyled placeholder-picture :svg
  [:path
   {:stroke "var(--accent-color)"
    :fill "var(--accent-color)"}]
  ([_ area]
   [:svg {:version "1.1" :viewBox "0 0 112.7 112.7" :xmlns "http://www.w3.org/2000/svg" :xmlns:osb "http://www.openswatchbook.org/uri/2009/osb" :alt "A placeholder image that represents a person, used while we don't have a speaker picture." :style {:grid-area area}}
    [:g {:transform "translate(-51.729 -117.41)" :style "mix-blend-mode:normal"}
     [:path {:d "m108.08 117.8a55.951 55.951 0 0 0-55.952 55.952 55.951 55.951 0 0 0 18.209 41.304 40.84 41.512 0 0 1 24.526-23.419 24.414 24.414 0 0 1-11.197-20.527 24.414 24.414 0 0 1 24.32-24.414 24.414 24.414 0 0 1 0.094 0 24.414 24.414 0 0 1 24.414 24.414 24.414 24.414 0 0 1-11.198 20.527 40.84 41.512 0 0 1 24.526 23.418 55.951 55.951 0 0 0 18.21-41.304 55.951 55.951 0 0 0-55.951-55.952zm55.951 55.951a55.951 55.951 0 0 1-55.951 55.951 55.951 55.951 0 0 1-55.951-55.951 55.951 55.951 0 0 1 55.951-55.951 55.951 55.951 0 0 1 55.951 55.951z" :fill "#5bdc00" :stroke "#5bdc00" :stroke-linecap "round" :stroke-linejoin "round" :stroke-width ".79375"}]]]))
