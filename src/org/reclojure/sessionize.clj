(ns org.reclojure.sessionize
  (:require
   [clj-http.client :as http]
   [clojure.data.json :as json]
   [clojure.string :as str]
   [meander.epsilon :as t]))

(defn fetch-data! [api-url]
  (-> api-url
      http/get
      :body
      (json/read-str :key-fn keyword)))

(defn to-speaker-data [speaker]
  (t/match speaker
           {:id ?id
            :profilePicture ?pic
            :bio ?bio
            :fullName ?fullname
            :tagLine ?tagline
            :sessions ?sessions
            :links
            [(t/or
              {:linkType "Twitter" :as !twitter}
              {:linkType "Blog" :as !blog}) ...]}
           {:id ?id
            :name ?fullname
            :slug (some-> ?fullname (str/replace #" " "-") str/lower-case)
            :handle (some-> !twitter first :url (str/split #"/") last)
            :link (when !blog (-> !blog first :url))
            :sessions ?sessions
            :picture ?pic
            :brief ?tagline
            :description ?bio}))

(defn to-session-data [session]
  (t/match session
           {:description ?description
            :title ?title
            :startsAt ?starts-at
            :endsAt ?ends-at
            :speakers ?speakers}
           {:description ?description
            :type :Talk
            :title ?title
            :time-start ?starts-at
            :time-end ?ends-at
            :speakers ?speakers}))

(defn to-slot-data [index]
  (fn [slot]
    (t/match slot
             {:description ?description
              :speakers ?speakers
              :startsAt ?startsAt
              :endsAt ?endsAt
              :isServiceSession ?isServiceSession
              :title ?title
              :categories ?categories}
             {:index index
              :type (cond
                     (not ?isServiceSession) :Talk
                     (re-find #"(?i)keynote" ?title) :Keynote
                     (re-find #"(?i)interlude" ?title) :Interlude
                     (re-find #"(?i)opening" ?title) :Interlude
                     (re-find #"(?i)break" ?title) :Break
                     :else :Panel)
              :time-start ?startsAt
              :time-end ?endsAt
              :duration 25
              :title ?title
              :speakers ?speakers
              :tags ?categories
              :abstract ?description})))

(defn normalize-speakers [{:keys [speakers sessions]}]
  (let [sessions-by-id (group-by :id sessions)]
    (map
     (fn [{:keys [sessions] :as speaker}]
       (->> sessions
            (map str)
            (select-keys sessions-by-id)
            vals
            ;; group-by returns a vector of items, but session ids are unique
            ;; so the vector only has one session
            (map first)
            (assoc speaker :sessions)))
     speakers)))

(defn normalize-sessions [{:keys [speakers sessions]}]
  (let [speakers-by-id (group-by :id speakers)]
    (map
     (fn [{:keys [speakers] :as session}]
       (->> speakers
            (map str)
            (select-keys speakers-by-id)
            vals
            ;; group-by returns a vector of items, but speaker ids are unique
            ;; so the vector only has one session
            (map first)
            (map to-speaker-data)
            (assoc session :speakers)))
     sessions)))

(defn normalize-slot [speakers-details]
  (let [by-id (group-by :id speakers-details)]
    (fn [slot]
      (-> slot
          (get-in [:rooms 0 :session])
          (update :speakers #(map (comp first by-id :id) %))))))

(def endpoint-all
  (->> (fetch-data! "https://sessionize.com/api/v2/3uz6wwyt/view/All"
                    ;; test api
                    #_"https://sessionize.com/api/v2/p80x8jeu/view/All")
       delay))

(def endpoint-schedule
  (-> "https://sessionize.com/api/v2/3uz6wwyt/view/GridSmart"
      fetch-data!
      delay))

(def speakers
  (->> @endpoint-all
       normalize-speakers
       (map to-speaker-data)
       delay))

(def sessions
  (->> @endpoint-all
       normalize-sessions
       (map to-session-data)
       delay))

(def friday-schedule
  (->> @endpoint-schedule
       first
       :timeSlots
       (map (normalize-slot @speakers))
       (map #(get-in % [:rooms 0 :session]))
       (map (to-slot-data 1))
       delay))

(def saturday-schedule
  (->> @endpoint-schedule
       last
       :timeSlots
       (map (normalize-slot @speakers))
       (map (to-slot-data 2))
       delay))

(comment
  @endpoint-all
  @speakers
  @sessions
  :starts-at "2022-12-02T09:00:00Z"
  :ends-at "2022-12-02T09:45:00Z"

  ,)
