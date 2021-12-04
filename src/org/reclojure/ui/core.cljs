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

;; Add a local time version of the schedule times
(defn add-local-time! []
  (let [schedule-times (->> (.querySelectorAll js/document "time")
                            (filter #(re-find #"UTC" (.-innerText %))))]
    (doseq [el schedule-times
            :let [new-el     (.cloneNode el)
                  date       (new js/Date (.getAttribute el "datetime"))
                  local-time (.. date
                                 (toLocaleTimeString
                                  #js [] #js {:hour   "2-digit"
                                              :minute "2-digit"
                                              :hour12 false
                                              :timeZoneName "short"}))]]
      (set! (.-innerText new-el) (str " (" local-time ")"))
      (.insertAdjacentElement el "afterend" new-el))))

(defn mount! []
  (.addEventListener menu-btn "click" menu-toggle)
  (add-local-time!)
  ;; If JavaScript is enabled, toggle off the menu.
  (.. nav-list (setAttribute "aria-expanded" "false"))
  (js/console.log "JS is loaded!"))

(defn ^:dev/after-load start []
  (mount!))

(defn init []
  (glogi-console/install!)
  (log/set-levels {:glogi/root :all})
  (start))
