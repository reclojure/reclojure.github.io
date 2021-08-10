(ns user)

(alter-var-root #'*print-namespace-maps* (constantly false))
;; (set! *print-namespace-maps* false)

(defmacro jit [sym]
  `(requiring-resolve '~sym))

(defn start-shadow-cljs
  ([]
   (start-shadow-cljs :main))
  ([build-id]
   (when (nil? @@(jit shadow.cljs.devtools.server.runtime/instance-ref))
     ((jit shadow.cljs.devtools.server/start!))
     ((jit shadow.cljs.devtools.api/watch) build-id)
     (loop []
       (when (nil? @@(jit shadow.cljs.devtools.server.runtime/instance-ref))
         (Thread/sleep 250)
         (recur))))))

(defn cljs-repl
  ([]
   (cljs-repl :main))
  ([build-id]
   (start-shadow-cljs build-id)
   ((jit shadow.cljs.devtools.api/nrepl-select) build-id)))

(defn browse []
  ((jit clojure.java.browse/browse-url)
   "http://localhost:7070"))

(defn config []
  @(jit integrant.repl.state/config))

(defn system []
  @(jit integrant.repl.state/system))

(defn go
  "Start the system"
  [& [opts]]
  ((jit org.reclojure.bootstrap/go) opts))

(defn resume
  "Like integrant.repl/resume, but only starts the keys that were previously
  started, instead of starting all keys."
  []
  (let [cfg ((jit org.reclojure.bootstrap/ig-config))]
    (alter-var-root (jit integrant.repl.state/config) (constantly cfg))
    (alter-var-root (jit integrant.repl.state/system)
                    (fn [sys]
                      (if sys
                        ((jit integrant.core/resume) cfg sys (keys sys))
                        ((jit integrant.core/init) cfg (keys sys)))))
    :resumed))

(defn reset
  "Reload changed namespaced and restart the app.

  Like integrant.repl/reset, but only starts the keys that were previously
  started, instead of starting all keys."
  []
  ((jit integrant.repl/suspend))
  ((jit clojure.tools.namespace.repl/set-refresh-dirs) "src")
  ((jit clojure.tools.namespace.repl/refresh) :after `resume))

(defn reset-all
  "Reload all namespaced and restart the app."
  []
  ((jit integrant.repl/suspend))
  ((jit clojure.tools.namespace.repl/set-refresh-dirs) "src")
  ((jit clojure.tools.namespace.repl/refresh-all) :after `resume))

(defn vimeo-conn
  "Get the vimeo connection from the started system."
  []
  (:org.reclojure.vimeo.api/conn (system)))

(def portal-instance (atom nil))

(defn portal
  "Open a Portal window and register a tap handler for it. The result can be
  treated like an atom."
  []
  ;; Portal is both an IPersistentMap and an IDeref, which confuses pprint.
  (prefer-method @(jit clojure.pprint/simple-dispatch) clojure.lang.IPersistentMap clojure.lang.IDeref)
  ;; Portal doesn't recognize records as maps, make them at least datafiable
  (extend-protocol clojure.core.protocols/Datafiable
    clojure.lang.IRecord
    (datafy [r] (into {} r)))
  (let [p ((jit portal.api/open) @portal-instance)]
    (reset! portal-instance p)
    (add-tap (jit portal.api/submit))
    p))
