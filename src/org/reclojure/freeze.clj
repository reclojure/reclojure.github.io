(ns org.reclojure.freeze
  (:require [org.reclojure.http :as http]
            [lambdaisland.ornament :as o]
            [lambdaisland.reitit-jaatya.freeze :as freeze]))

(def css-file "resources/public/css/compiled.css")

(defn build [& args]
  (spit css-file (o/defined-styles {:preflight? false}))
  (freeze/iced (http/build-handler)))

(comment
  ;; this will create a `docs` folder in `reclojure`
  ;; to browse it locally run
  ;; cd docs && python3 -m http.server
  (build))
