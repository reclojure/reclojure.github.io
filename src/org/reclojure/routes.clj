(ns org.reclojure.routes
  (:require [org.reclojure.views.home :as home]
            [org.reclojure.views.speaker :as speaker]
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

(defn get-speaker [{{:keys [slug]} :path-params :as req}]
  (let [speaker (first (filter #(= (:slug %) slug) @db/speakers-data))]
    {:status 200
     :body {}
     :view (fn [data]
             [layout/layout
              [:<>
               [speaker/page speaker]]])}))

(defn routes []
  [["/"
    {:name ::home
     :get {:handler get-home}}]
   ["/2022/speaker/:slug"
    {:name ::speaker
     :get {:handler get-speaker}
     :freeze-data-fn (fn [] (mapv (fn [{:keys [slug]}]
                                    {:slug slug}) @db/speakers-data))}]])
