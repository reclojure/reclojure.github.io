(ns org.reclojure.views.home
  (:require [lambdaisland.ornament :refer [defstyled]]))

(defstyled green-block :div
  :bg-green-200 :w-32 :h-32
  [:div])

(defn page [data]
  [:div
   [green-block]
   [:h2 "hello world"]])
