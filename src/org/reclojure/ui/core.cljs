(ns org.reclojure.ui.core
  (:require [lambdaisland.glogi :as log]
            [lambdaisland.glogi.console :as glogi-console]))

;; Mobile menu implementation
(def menu-btn (.querySelector js/document "nav > button"))
(def nav-list (.querySelector js/document ".nav-list"))

(defn menu-toggle [_event]
  (if (= (.. nav-list (getAttribute "aria-expanded")) "true")
    (.. nav-list (setAttribute "aria-expanded" "false"))
    (.. nav-list (setAttribute "aria-expanded" "true"))))

(defn mount! []
  (.addEventListener menu-btn "click" menu-toggle)
  ;; If JavaScript is enabled, toggle off the menu.
  (.. nav-list (setAttribute "aria-expanded" "false"))
  (js/console.log "JS is loaded!"))

(defn ^:dev/after-load start []
  (mount!))

(defn init []
  (glogi-console/install!)
  (log/set-levels {:glogi/root :all})
  (start))
