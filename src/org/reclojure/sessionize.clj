(ns org.reclojure.sessionize
  (:require
   [clj-http.client :as http]
   [clojure.data.json :as json]
   [clojure.string :as str]
   [meander.epsilon :as transform]))

(defn speakers! []
  (let [{:keys [speakers sessions]}
         (-> "https://sessionize.com/api/v2/3uz6wwyt/view/All"
             http/get
             :body
             (json/read-str :key-fn keyword))
         sessions-by-id (group-by :id sessions)]
     (map
      (fn [{:keys [sessions] :as speaker}]
        (->> sessions
             (map str)
             (select-keys sessions-by-id)
             vals
             (assoc speaker :sessions)))
      speakers)))

(defn to-speaker-data [speaker]
  (transform/match
   speaker
   {:profilePicture ?pic
    :bio ?bio
    :fullName ?fullname
    :tagLine ?tagline
    :links
    [(transform/or
      {:linkType "Twitter" :as !twitter}
      {:linkType "Blog" :as !blog}) ...]}
   {:name ?fullname
    :slug (some-> ?fullname (str/replace #" " "-") str/lower-case)
    :handle (some-> !twitter first :url (str/split #"/") last)
    :link (when !blog (-> !blog first :url))
    :picture ?pic
    :brief ?tagline
    :description ?bio}))

(def speakers
  (->> (speakers!)
       (map to-speaker-data)
       delay))
