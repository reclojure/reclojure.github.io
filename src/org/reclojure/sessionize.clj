(ns org.reclojure.sessionize
  (:require
   [clj-http.client :as http]
   [clojure.data.json :as json]
   [clojure.string :as str]
   [meander.epsilon :as transform]))

(defn fetch-data! [api-url]
  (-> api-url
      http/get
      :body
      (json/read-str :key-fn keyword)))

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
  ;; we don't really havr the type of session info here
  ;; is it a Talk, a Panel, or a Keynote?
  sessions)

(defn to-speaker-data [speaker]
  (transform/match
    speaker
    {:profilePicture ?pic
     :bio ?bio
     :fullName ?fullname
     :tagLine ?tagline
     :sessions ?sessions
     :links
     [(transform/or
       {:linkType "Twitter" :as !twitter}
       {:linkType "Blog" :as !blog}) ...]}
    {:name ?fullname
     :slug (some-> ?fullname (str/replace #" " "-") str/lower-case)
     :handle (some-> !twitter first :url (str/split #"/") last)
     :link (when !blog (-> !blog first :url))
     :sessions ?sessions
     :picture ?pic
     :brief ?tagline
     :description ?bio}))

(defn to-session-data [session]
  (transform/match
    session
    {:description ?description
     :startsAt ?starts-at
     :endsAt ?ends-at
     :speakers ?speakers}
    {:description ?description
     :starts-at ?starts-at
     :ends-at ?ends-at
     :speakers ?speakers}))

(def raw-api-data
  (->> (fetch-data! "https://sessionize.com/api/v2/3uz6wwyt/view/All"
                    ;; test api
                    #_"https://sessionize.com/api/v2/p80x8jeu/view/All")
       delay))

(def speakers
  (->> @raw-api-data
       normalize-speakers
       (map to-speaker-data)
       delay))

(def sessions
  (->> @raw-api-data
       normalize-sessions
       (map to-session-data)
       delay))

(comment
  @raw-api-data
  @speakers
  @sessions
  :starts-at "2022-12-02T09:00:00Z"
  :ends-at "2022-12-02T09:45:00Z"

  ,)
