(ns org.reclojure.freeze
  (:require [org.reclojure.http :as http]
            [lambdaisland.reitit-jaatya.freeze :as freeze]))

(defn build [& args]
  (freeze/iced (http/build-handler)))

(comment
  ;; this will create a `_site` folder in `reclojure`
  ;; to browse it locally run
  ;; cd _site && python3 -m http.server
  (build))
