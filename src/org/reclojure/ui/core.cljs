(ns org.reclojure.ui.core
  (:require [lambdaisland.glogi :as log]
            [lambdaisland.glogi.console :as glogi-console]))

(defn mount! []
  (js/console.log "JS is loaded!"))

(defn ^:dev/after-load start []
  (mount!))

(defn init []
  (glogi-console/install!)
  (log/set-levels {:glogi/root :all})
  (start))
