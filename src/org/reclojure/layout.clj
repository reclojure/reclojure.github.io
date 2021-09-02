(ns org.reclojure.layout
  (:require [clojure.java.io :as io]
            [clojure.data.json :as json]
            [lambdaisland.ornament :as ornament]))

(defn get-script-name
  "Read the manifest.edn file, and get the current main.HASHCODE.js filename
   (get-script-name :main) => main.HASHCODE.js "
  [module-id-k]
  (some->> (io/resource "public/ui/manifest.edn")
           slurp
           read-string
           (filter #(= module-id-k (:module-id %)))
           first
           :output-name))

(defn layout
  ([body]
   [layout nil body])
  ([head body]
   [:html {:lang "en"}
    [:head
     [:title "re:Clojure 2021"]
     [:meta {:charset "UTF-8"}]
     [:meta {:content "width=device-width, initial-scale=1" :name "viewport"}]
     [:meta {:name "description" :content "re:Clojure Clojure Conference, 2021 edition."}]
     [:link {:href "favicon.png" :rel "icon"}]
     [:meta {:name "theme-color" :content "#5bdc00"}]
     [:link {:rel "stylesheet" :href "/css/styles.css"}] ;FIXME
     (if (io/resource "public/css/compiled.css")
       [:link {:rel "stylesheet" :href "/css/compiled.css"}]
       [:style {:type "text/css" :id "ornament"} (ornament/defined-styles {:preflight? true})])
     head]
    [:body
     [:div#app
      body]
     [:script {:type "application/javascript" :src (str "/ui/" (get-script-name :main))}]]]))