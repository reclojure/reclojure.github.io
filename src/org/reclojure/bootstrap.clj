(ns org.reclojure.bootstrap
  (:require [aero.core :as aero]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [lambdaisland.glogc :as log]
            [integrant.core :as ig]
            [integrant.repl :as ig-repl]))

(defmethod aero/reader 'ig/ref
  [_ _tag value]
  (ig/ref value))

(defmethod aero/reader 'ig/refset
  [_ _tag value]
  (ig/refset value))

(defmethod aero/reader 'local-path
  [_ _tag value]
  (.getAbsolutePath (io/file value)))

(defn ig-config
  ([]
   (ig-config :default))
  ([profile]
   (aero/read-config (io/resource "config.edn") {:profile profile})))

(defn set-prep!
  ([]
   (set-prep! :default))
  ([profile]
   (ig-repl/set-prep! #(doto (ig-config profile) ig/load-namespaces))))

(defn- add-shutdown-hook [f]
  (.addShutdownHook (java.lang.Runtime/getRuntime) (Thread. f)))

(defn go
  "Start the integrant system
  By default starts everything, pass a key or collection of keys to only start
  those keys."
  [{:keys [profile key]
    :or {profile :default}}]
  (log/info :system/starting {:profile profile :key key})
  (set-prep! profile)
  (add-shutdown-hook
   (fn []
     (ig-repl/halt)
     (log/info :shutdown/finished {})))
  (cond
    (coll? key)
    (ig-repl/go key)
    (keyword? key)
    (ig-repl/go [key])
    (nil? key)
    (ig-repl/go)))

#_(defmethod ig/init-key :secrets [_ _])
