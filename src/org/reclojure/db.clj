(ns org.reclojure.db
  (:require [org.reclojure.sessionize :as sessionize :refer [speakers]]))

(def friday "2022-12-02")
(def saturday "2022-12-03")
(def time-zone "+00:00")

(defn make-datetime [day time]
  (str day "T" time time-zone))

(def speakers-data speakers)

(def workshops
  (let [fastmath {:name "Fastmath" :href "https://github.com/generateme/fastmath"}]
    [{:title ""
      :description "",
      :libraries [fastmath],
      :presenter "",
      :length "",
      :datetimes ["2021-11-13-14:00"]
      :link ""}]))

(def schedule
  (let [fri (partial make-datetime friday)
        sat (partial make-datetime saturday)]
    {:friday
     [{:index 1
       :type :Panel
       :time-start (fri "10:00")
       :time-end (fri "10:25")
       :duration 25
       :title ""
       :speakers [""]
       :tags [:data-science]
       :abstract ""}]
     :saturday []}))

(def friday-schedule
  sessionize/friday-schedule)

(def saturday-schedule
  sessionize/saturday-schedule)

(defn get-slug [name]
  (:slug (first (filter #(= name (:name %)) @speakers-data))))

(comment
  ;; Sort talks by index
  (sort-by :index (filter #(= (:type %) :Talk) (:friday schedule)))

  ;; Sort all by index
  (sort-by :index (:friday schedule))

  ;; Get the keys in a talk map
  (sequence (comp (filter #(= (:type %) :Keynote))
                  (mapcat keys)
                  (distinct))
            (:friday schedule)))

;; Talk:
;; => (:tags
;;     :index
;;     :abstract
;;     :type
;;     :duration
;;     :title
;;     :time-end
;;     :speaker
;;     :time-start)

(def interviews
  {"Jeremy Taylor"     "https://pod.link/1471141263/episode/10a363f4e62eb8ca37120468d752c99b"})
