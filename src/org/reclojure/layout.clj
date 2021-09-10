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
     [:meta {:charset "UTF-8"}]
     [:meta {:content "width=device-width, initial-scale=1" :name "viewport"}]

     ;; Primary Meta Tags
     [:title "re:Clojure 2021"]
     [:meta {:name "title" :content "re:Clojure 2021"}]
     [:meta {:name "description"
             :content "re:Clojure is a community-driven effort to bring together knowledgeable speakers to present new and exciting topics on all things Clojure and ClojureScript."}]

     ;; Open Graph / Facebook
     [:meta {:property "og:type" :content "website"}]
     [:meta {:property "og:url" :content "https://reclojure.org/"}]
     [:meta {:property "og:title" :content "re:Clojure 2021"}]
     [:meta {:property "og:description"
             :content "re:Clojure is a community-driven effort to bring together knowledgeable speakers to present new and exciting topics on all things Clojure and ClojureScript."}]
     [:meta {:property "og:image" :content "https://www.reclojure.org/images/banner.png"}]

     ;; Twitter
     [:meta {:property "twitter:card" :content "summary_large_image"}]
     [:meta {:property "twitter:url" :content "https://reclojure.org/"}]
     [:meta {:property "twitter:title" :content "re:Clojure 2021"}]
     [:meta {:property "twitter:description"
             :content "re:Clojure is a community-driven effort to bring together knowledgeable speakers to present new and exciting topics on all things Clojure and ClojureScript."}]
     [:meta {:property "twitter:image" :content "https://www.reclojure.org/images/banner.png"}]

     ;; Some browsers may use this value to customize the interface (e.g. Vivaldi)
     [:meta {:name "theme-color" :content "#5bdc00"}]

     [:link {:href "favicon.png" :rel "icon"}]
     [:link {:rel "stylesheet" :href "/css/styles.css"}] ;FIXME
     (if (io/resource "public/css/compiled.css")
       [:link {:rel "stylesheet" :href "/css/compiled.css"}]
       [:style {:type "text/css" :id "ornament"} (ornament/defined-styles {:preflight? true})])
     head]
    [:body
     [:div#app
      body]
     [:script {:type "application/javascript" :src (str "/ui/" (get-script-name :main))}]]]))
