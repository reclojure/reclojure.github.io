(ns org.reclojure.http
  (:require [lambdaisland.webstuff.http :as http]
            [lambdaisland.glogc :as log]
            [org.reclojure.routes :as routes]
            [integrant.core :as ig]))

(defn build-handler []
  (http/ring-handler {:routes (routes/routes)}))

(defmethod ig/init-key ::server [_ {:keys [port rebuild-on-request?] :as config}]
  (http/start-jetty! {:port port
                      :rebuild-on-request? rebuild-on-request?
                      :build-handler build-handler}))

(defmethod ig/halt-key! ::server [_ jetty]
  (http/stop-jetty! jetty))
