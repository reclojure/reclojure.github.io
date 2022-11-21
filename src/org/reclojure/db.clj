(ns org.reclojure.db
  (:require [org.reclojure.sessionize :as sessionize :refer [speakers]]))

(def friday "2022-12-02")
(def saturday "2022-12-03")
(def time-zone "+00:00")

(defn make-datetime [day time]
  (str day "T" time time-zone))

(def speakers-data speakers)

(def workshops
  [
   {:title "Combining HoneySQL with XTDB Core2"
    :description "Core2 is the latest R&D initiative from the XTDB team. The objective is to take the key principles embodied in XTDB 1.x — immutability, schemaless records, and temporal querying — to a mainstream SQL audience. This workshop will explore Core2 concepts through the lens of HoneySQL with bitemporal extensions.",
    :prerequisites [{:name ""}],
    :presenter "Jeremy Taylor",
    :length "2 hours",
    :datetimes ["2022-11-30-14:30"]
    :link "https://www.eventbrite.com/e/xtdb-workshop-reclojure-2022-tickets-445947861057"}

   {:title "Introduction to Data-Oriented Programming in Clojure"
    :description "Get into the Functional Programming and Data-Oriented Programming mindset. Learn best practices. Build a project following FP and DOP principles. Leverage the REPL for an efficient development workflow.",
    :prerequisites [{:name "VSCode + Calva"}],
    :presenter "Yehonathan Sharvit",
    :length "2 hours",
    :datetimes ["2022-11-30-17:30"]
    :link "https://www.meetup.com/london-clojurians/events/289766846/"}
   ])

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
