(ns org.reclojure.routes
  (:require [org.reclojure.views.home :as home]
            [org.reclojure.layout :as layout]
            [org.reclojure.db :as db]
            #_[org.reclojure.open-graph :as og]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [clojure.string :as str]))

(defn get-home [_]
  {:status 200
   ;; Make the body plain EDN, this is what you will get if you request JSON/EDN/etc.
   :body {:talks [] #_@db/talks}
   ;; View is a function from EDN to Hiccup (receives the body data)
   :view (fn [data]
           [layout/layout
            #_(og/social-tags {:image ""})
            [:<>
             [home/page data]]])})

(defn routes []
  [["/"
    {:name ::home
     :get {:handler get-home}}]])
