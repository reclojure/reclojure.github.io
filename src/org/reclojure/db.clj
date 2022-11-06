(ns org.reclojure.db
  (:require [org.reclojure.sessionize :refer [speakers]]))

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
  {:friday
   [{:index 1
     :type :Talk
     :time-start "10:00"
     :time-end "10:25"
     :duration 25
     :title ""
     :speakers [""]
     :tags [:data-science]
     :abstract ""}]
   :saturday []})

(def friday "2022-12-02")
(def saturday "2022-12-03")
(def time-zone "+00:00")

(defn make-datetime [time-zone date]
  (fn [event]
    (letfn [(datetime [time]
              (str date "T" time time-zone))]
      (-> event
          (update :time-start datetime)
          (update :time-end datetime)))))

(def make-datetime-with-tz (partial make-datetime time-zone))

(def friday-2021
  (let [times->datetimes (make-datetime-with-tz friday)]
    (map times->datetimes (:friday schedule))))

(def saturday-2021
  (let [times->datetimes (make-datetime-with-tz saturday)]
    (map times->datetimes (:saturday schedule))))

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
