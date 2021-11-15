(ns org.reclojure.db
  (:require [clojure.string :as str]))

(def speakers-data
  [{:name "Christophe Grand"
    :slug "christophe-grand"
    :handle "cgrand"
    :link "http://cgrand.net/"
    :picture "christophe_grand-400x400.jpg"
    :brief "Co-author of Programming Clojure (O’Reilly)."
    :description "Christophe is an independent software engineer and has been coding and teaching Clojure for 10 years. He co-authored Clojure Programming (O’Reilly)."}
   {:name "Dragan Djuric"
    :slug "dragan-djuric"
    :handle "draganrocks"
    :link "https://dragan.rocks/"
    :picture "dragan_djuric-400x400.jpg"
    :brief "Author of Uncomplicate libraries and Professor at the University of Belgrade."
    :description "Dragan Djuric is a professor at the Department of Software Engineering, FON, University of Belgrade, Serbia. He passionately uses Clojure as a primary language since 2009, and teaches Clojure-based courses at the university since 2010. He published his Clojure-based research in leading scientific journals, but does not skip contributing to the community through open-source Clojure projects (www.uncomplicate.org). His main interests are in the area of software engineering and intelligent systems, but programming in Clojure is the activity he enjoys the most. When he is not working in Emacs, he likes doing his daily dose of long-distance running, gym, and Cuban salsa dancing."}
   {:name "Kathi Fisler"
    :slug "kathi-fisler"
    :handle "kathifisler"
    :link "https://cs.brown.edu/~kfisler/"
    :picture "kathi_fisler-324x372.jpg"
    :brief "Research Professor at Brown. Co-director of Bootstrap."
    :description "Kathi Fisler is a Research Professor of Computer Science at Brown University and co-director of Bootstrap, an outreach program that integrates computing and data science into existing classes in middle- and high-schools."}
   {:name "Alexander Oloo"
    :slug "alexander-oloo"
    :handle "alekcz"
    :link "https://alexanderoloo.com/"
    :picture "alexander_oloo-300x300.png"
    :brief "Design Director at Absa Design."
    :description "Alexander is an engineer, designer, jack of all trades, great at Product, Clojure, coaching and debugging, currently a Design Director at the Absa Design Office. His primary focus is the design, analysis, and optimization of apps on the web."}
   {:name "Paula Gearon"
    :slug "paula-gearon"
    :handle "quoll"
    :link "https://github.com/quoll"
    :picture "paula-gearon.jpg"
    :brief "An avid Clojure developer, Paula has been the technical lead on several open source projects with a focus on data storage and processing."
    :description "An avid Clojure developer, Paula likes to work in the most technical parts of a system building the infrastructure that lets other developers do their jobs. She has been the technical lead on several commercial and open source projects, with a focus on data storage and processing, and was a lead editor for the SPARQL standard for accessing RDF databases. When not coding, she does triathlons, cooks, helps her children with homework, and mentors and supports young members of Women Who Code. Originally from Australia, she currently lives with her family in Virginia, in the USA."}
   {:name "Martin Kavalar"
    :slug "martin-kavalar"
    :picture "martin-kavalar.jpg"
    :handle ""
    :link ""
    :brief ""
    :description "Martin Kavalar and his small team have been building and running Sauspiel, an online community for the traditional German card game Schafkopf, for fifteen years. They are now leveraging that experience to build NextJournal, a computational notebook designed to facilitate collaboration, reproducibility, and reuse in the sciences."}
   {:name "David Vujic"
    :slug "david-vujic"
    :handle ""
    :link ""
    :picture "david-vujic.jpg"
    :brief ""
    :description "My name is David and I'm a software developer. Colleagues and friends may know me as an early adopter of agile ideas and test driven development. I am passionate about things like that, and share the things I learn regularly to the community and the people I work with. I have participated as speaker at conferences and meetups like PyCon Sweden, Func Prog Sweden, dotNetConf, jDays, DevSum and NDC Oslo."}
   {:name "Johanna Antonelli"
    :slug "johanna-antonelli"
    :handle ""
    :link ""
    :picture "johanna-antonelli.jpg"
    :brief ""
    :description "After earning a Masters degree in Physics, Johanna joined JUXT as a software developer. There, she was introduced to Clojure, both as a language and a community. Over the past few years, alongside client project work, she has been involved in training and mentoring, creating the XTDB \"Space adventure\" tutorial (https://github.com/xtdb/xtdb-tutorial). Johanna's passions include solving problems and exploring the English countryside with her husband and dog."}
   {:name "Artem Barmin"
    :slug "artem-barmin"
    :handle ""
    :link ""
    :picture "artem-barmin.jpg"
    :brief ""
    :description ""}
   {:name "Ella Hoeppner"
    :slug "ella-hoeppner"
    :handle ""
    :link ""
    :picture "ella-hoeppner.jpg"
    :brief ""
    :description "Ella Hoeppner is a software engineer and the creator of Vlojure, a visual programming interface for ClojureScript. Her interests include Artificial Intelligence and creating new ways for people to interact with computational systems."}
   {:name "Sami Kallinen"
    :slug "sami-kallinen"
    :handle ""
    :link ""
    :picture "sami-kallinen.jpg"
    :brief ""
    :description ""}
   {:name "Ethan Miller"
    :slug "ethan-miller"
    :handle ""
    :link ""
    :picture "ethan-miller.jpg"
    :brief ""
    :description "Ethan Miller is a full-stack software engineer with interest in functional programming and Clojure in particular. For the past few years, he has tried to help build and organize the SciCloj community and contribute to the Clojure data science ecosystem."}
   {:name "João Santiago"
    :slug "joão-santiago"
    :handle ""
    :link ""
    :picture "joao-santiago.png"
    :brief ""
    :description "João Santiago is a data scientist with an interest in simplifying how machine learning is integrated into production systems. He likes R and Clojure for their LISP roots and functional features, and wishes he could ride his bicycle more often."}
   {:name "Adam Helins"
    :slug "adam-helins"
    :handle ""
    :link ""
    :picture "adam-helins.png"
    :brief ""
    :description "A Clojure consultant and psychologist, Adam Helins has been addicted to pushing the boundaries of the language for years. Passionate by decentralized systems, he is one of the key maintainers behind `convex.world`, a next-gen decentralized network strongly inspired by Clojure."}
   {:name "Ben Sless"
    :slug "ben-sless"
    :handle ""
    :link ""
    :picture "ben-sless.jpg"
    :brief ""
    :description "Ben works with Clojure since 2018 at Appsflyer building large scale event driven backend systems. He developed an unhealthy interest in performance and profiling, developed clj-fast, and contributes performance related work, mainly to malli. He's also at risk of writing blog posts whenever someone says Clojure is slow."}
   {:name "Léo Noel"
    :slug "leo-noel"
    :handle ""
    :link ""
    :picture "leo-noel.jpg"
    :brief ""
    :description "Léo is an independent software researcher and consultant, focusing on functional programming techniques applied to IO-intensive applications and user interfaces. He created Missionary, a functional effect and streaming system for Clojure/Script. He is currently working at Hyperfiddle on a next-generation UI architecture."}
   {:name "Eric Normand"
    :slug "eric-normand"
    :handle ""
    :link ""
    :picture "eric-normand.jpg"
    :brief ""
    :description "Eric Normand is a long time functional programmer excited to see it entering the mainstream. He loves teaching and cooking. You can listen to his thoughts on his podcast (https://lispcast.com/podcast) and read his thoughts in The PurelyFunctional.tv Newsletter (https://purelyfunctional.tv/newsletter). If you visit him in New Orleans, you can meet his wife and daughters. He'll even make you some gumbo if you tell him you're coming."}
   {:name "Tovieye Ozi"
    :slug "tovieye-ozi"
    :handle ""
    :link ""
    :picture "tovieye-moses-ozi.jpg"
    :brief ""
    :description "Tovieye Moses Ozi is a full stack software developer based in Lagos, Nigeria. He has worked in Javascript, Python, PHP but his language of choice is Clojure. Tovieye is currently working with Clojure at HUDStats https://hudstats.com/. Interests: Clojure, 3D Math Visualization in Virtual Reality."}
   {:name "Markus Kloimwieder"
    :slug "markus-kloimwieder"
    :handle ""
    :link ""
    :picture "markus-kloimwieder.jpg"
    :brief ""
    :description "Prior to being a Clojure freelancer, Markus shared a desk with other traders (some of them fellow physicists) in an Austrian bank for 10 years. There he started to replace his Excel sheets with re-frame apps. Before that he was implementing trading systems in banks all over Europe whilst covering his lack of financial knowledge with a masters course in Oxford. At CERN in Geneva, he wrote his diploma thesis and got to know C++ but never really understood when to use which OO pattern."}])



;; (first
;;  (for [speaker ["John Doe"]]
;;    (if-let [[{:keys [name slug link picture] :as spooker}]
;;             (filter #(= (:name %) speaker) speakers-data)]
;;      (str name slug link picture)
;;      (str "damn"))))

(def workshops
  (let [fastmath {:name "Fastmath" :href "https://github.com/generateme/fastmath"}
        tablecloth {:name "Tablecloth" :href "https://github.com/scicloj/tablecloth"}
        techmldataset {:name "tech.ml.dataset" :href "https://github.com/techascent/tech.ml.dataset"}
        dtype-next {:name "dtype-next" :href "https://github.com/cnuernber/dtype-next"}
        injest {:name "Injest" :href "https://github.com/johnmn3/injest"}
        hanami {:name "Hanami" :href "https://github.com/jsa-aerial/hanami"}
        vizclj {:name "Viz.clj" :href "https://github.com/scicloj/viz.clj"}
        logseq {:name "Logseq" :href "https://logseq.com/"}
        oz {:name "Oz" :href "https://github.com/metasoarous/oz"}
        notespace {:name "Notespace" :href "https://github.com/scicloj/notespace"}
        fulcro {:name "Fulcro" :href "https://fulcro.fulcrologic.com/index.html"}
        kixistats {:name "kixi.stats" :href "https://github.com/MastodonC/kixi.stats"}
        fitdistr {:name "Fitdistr" :href "https://github.com/generateme/fitdistr"}
        inferme {:name "Inferme" :href "https://github.com/generateme/inferme"}
        sciclojml {:name "scicloj.ml" :href "https://github.com/scicloj/scicloj.ml"}
        metamorph {:name "metamorph" :href "https://github.com/scicloj/metamorph"}
        metamorphml {:name "metamorph.ml" :href "https://github.com/scicloj/metamorph.ml"}
        sicmutils {:name "Sicmutils" :href "https://github.com/sicmutils/sicmutils"}
        sicmutils {:name "Sicmutils" :href "https://github.com/sicmutils/sicmutils"}
        libpython-clj {:name "libpython-clj" :href "https://github.com/clj-python/libpython-clj"}
        graalvm {:name "GraalVM" :href "https://www.graalvm.org/"}
        cpython {:name "CPython" :href "https://github.com/python/cpython"}
        lucene-grep {:name "Lucene-grep" :href "https://github.com/dainiusjocas/lucene-grep"}
        xtdb-core {:name "xtdb-core" :href "https://xtdb.com"}
        clojurecore {:name "clojure.core" :href "https://clojure.github.io/clojure/clojure.core-api.html"}
        clerk {:name "Clerk" :href "https://github.com/nextjournal/clerk-demo"}
        neanderthal {:name "Neanderthal" :href "https://neanderthal.uncomplicate.org"}]
    [{:title "How to Talk with Data Scientists?"
      :description "Engineers and Data Scientists work towards the same business goals, but sometimes have different concerns to get there. In this workshop, we'll review situations showcasing what data scientists need to be successful, and by consequence how engineers can better cope with those requests. Bring your stories and your questions!",
      :libraries [],
      :presenter "João Santiago",
      :length "90min",
      :datetimes ["2021-11-13-14:00"]
      :link "https://www.meetup.com/London-Clojurians/events/282011179/"}
     {:title "Wrangling Datasets with Tablecloth"
      :description "",
      :libraries [tablecloth],
      :presenter "Mey Beisaron",
      :length "120min",
      :datetimes ["2021-11-07-16:00"]
      :link "https://www.meetup.com/London-Clojurians/events/281854686/"}
     {:title "Wrangling Arrays with dtype-next"
      :description
      "This workshop will introduce dtype-next, explain its position in the Clojure data science ecosystem, and introduce the key concepts and techniques necessary for working with its performant buffers/arrays.",
      :libraries [dtype-next],
      :presenter "Ethan Miller",
      :length "120min",
      :datetimes ["2021-11-04-09:00"]
      :link "https://www.meetup.com/London-Clojurians/events/281822613/"}
     {:title     "Wrangling Arrays with dtype-next"
      :description
      "This workshop will introduce dtype-next, explain its position in the Clojure data science ecosystem, and introduce the key concepts and techniques necessary for working with its performant buffers/arrays.",
      :libraries [dtype-next],
      :presenter "Ethan Miller",
      :length    "120min",
      :datetimes [  "2021-11-18-05:30"]}
     {:title     "Wrangling Arrays with dtype-next"
      :description
      "This workshop will introduce dtype-next, explain its position in the Clojure data science ecosystem, and introduce the key concepts and techniques necessary for working with its performant buffers/arrays.",
      :libraries [dtype-next],
      :presenter "Ethan Miller",
      :length    "120min",
      :datetimes [  "2021-11-25-0:00"]}
     {:title     "Wrangling Arrays with dtype-next"
      :description
      "This workshop will introduce dtype-next, explain its position in the Clojure data science ecosystem, and introduce the key concepts and techniques necessary for working with its performant buffers/arrays.",
      :libraries [dtype-next],
      :presenter "David Sletten",
      :length    "120min",
      :datetimes ["2021-11-06-15:00"]
      :link "https://www.meetup.com/London-Clojurians/events/281854619/"}
     {:title     "Wrangling Arrays with dtype-next"
      :description
      "This workshop will introduce dtype-next, explain its position in the Clojure data science ecosystem, and introduce the key concepts and techniques necessary for working with its performant buffers/arrays.",
      :libraries [dtype-next],
      :presenter "David Sletten",
      :length    "120min",
      :datetimes ["2021-11-20-15:00"]}
     {:title       "Structure and Interpretation of Clojure Transducers",
      :description "Transducers are a powerful abstraction added relatively recently to Clojure.
In spite of this and the noticeable performance benefits, they remain a
daunting subject for many Clojurians.

There is no reason such an important subject remain impenetrable.

We will approach them in this workshop from first principles and see how
they emerge naturally as a general property in many places.

By the end of the workshop, participants will have a better
understanding of transducers, their use cases, and will be comfortable
writing their own simple transducers when the need arises.",
      :libraries   [clojurecore],
      :presenter   "Ben Sless",
      :length      "120min",
      :datetimes ["2021-11-15-17:30"]
      :link "https://www.meetup.com/London-Clojurians/events/282077258/"}
     {:title     "Wrangling Sequences Like a Cowboy with Injest",
      :description
      "Note: This workshop covers material that is best understood by reviewing a prior workshop: “The Structure and Interpretation of Clojure Transducers” Summary: Injest provides thread macros (e.g. x>>, =>>) that lower the bar to higher performance by letting you compose transducers in the same way as you would with ->>. In this workshop we will introduce you to injest’s three main features: path threads, auto transducification and auto parallelization. Then, we’ll go over some real world examples of transforming (wrangling) data sequences. We’ll spend the remaining time of the workshop in an open session, answering questions and trying things out at the REPL. I might even wear a cowboy hat, in further jest 🤠",
      :libraries [injest],
      :presenter "John Newman",
      :length    " 120min ",
      :datetimes ["2021-11-22-17:00"]}
     {:title     "Visualizing Data with Hanami",
      :description
      "In this workshop we will explore how to visualize simple datasets using Hanami, a Clojure library for creating interactive visualizations built on top of Vega-Lite and Vega. There will be a brief explanation of how these tools work to start but we will spend most of our time exploring together, so it will be helpful to have a Clojure environment set up on your computer already.",
      :libraries [hanami],
      :presenter "Kira McLean",
      :length    "90min",
      :datetimes ["2021-11-21-16:00"]}
     {:title     "Touring Oz: Notebooks, Visualizations, and Webapps, Oh My!",
      :description
      "Oz is a Swiss Army Knife for data visualization, scientific documentation, and \"namespace as a notebook\" style analysis workflows. However, its versatility can make it easy to miss the full scope of its capabilities. In this workshop, we'll briefly go over all of its features, and then work through a series of illustrative examples based on participant interest.",
      :libraries [oz],
      :presenter "Christopher Small",
      :length    " 120min "
      :datetimes ["2021-11-29-17:00"],}
     {:title "Your Namespace as a Notebook"
      :description "Notespace is a tool that allows for creating visual documents without leaving the comfort of the familiar Clojure editor, REPL, and namespace. It has evolved through the usage at the Scicloj comminitie's group sessions and individual projects. We will practice basic use of Notespace, discuss its design choices and relationship to other projects, and chat about future challenges.",
      :libraries [notespace],
      :presenter "Daniel Slutsky",
      :length "90min",
      :datetimes ["2021-11-19-14:00" "2021-11-28-16:00"]}
     {:title "Writing Web Apps with Fulcro"
      :description "Fulcro is unique among Clojure web frameworks in providing a complete, integrated, full-stack solution for creating non-trivial web applications. It is based on a few simple ideas with far-reaching consequences, it is unusually malleable, and we love it for its focus on creating maintainable, developer-friendly code.
      In this workshop you will get a brief introduction to Fulcro and then get your hands dirty exploring the concepts in practice on an existing application in a series of guided exercises. We will use the excellent Fulcro Inspect tooling and mess up with the code.
      Please do the preparation described at https://github.com/holyjak/fulcro-intro-wshop#prerequisites before the workshop."
      :libraries [fulcro],
      :presenter "Jakub Holý",
      :length    "120 min",
      :link "https://www.eventbrite.se/e/reclojure-introduction-to-fulcro-workshop-tickets-188718210247",
      :datetimes ["2021-12-01-15:00"]}
     {:title "An Intro to Statistical Inference"
      :description
      "Useful inferential statistics does not have to be just the domain of data scientists. This workshop follows examples in the book \"Statistics is Easy\" to demonstrate concepts of fairness, p-value, confidence intervals, power using resampling and bootstrapping. All concepts will be explained purely using functions from the core clojure library",
      :libraries [clojurecore],
      :presenter "Rohit Thadani",
      :length " 90min  ",
      :datetimes ["2021-11-16-19:00" "2021-11-21-03:00"]
      :link "https://www.meetup.com/London-Clojurians/events/282077318/"}
     {:title "Modelling with Probability"
      :description "We will explore a data modelling problem through Bayesian Inference. Our main tool will be the Inferme library by Tomasz Sulej. We will see how it is possible to model our data through a 'forward' probabilistic process, and infer the unknowns by running it 'backwards'.",
      :libraries [fastmath inferme],
      :presenter "Daniel Slutsky",
      :length "120min"
      :datetimes ["2021-11-12-14:00"]
      :link "https://www.meetup.com/London-Clojurians/events/282011112/",}
     {:title "Machine Learning Through Pipelines"
      :description "Scicloj.ml is a Clojure library by Carsten Behring that connects many aspects of machine learning workflows into one coherent stack. It is based on a certain notion of a pipeline, implemented in the libraries Metamorph and Metamorph.ml. In this session we will discuss some of the core ideas behind these libraries and look into solving a data modelling problem using Scicloj.ml.",
      :libraries [sciclojml metamorphml metamorph],
      :presenter "Daniel Slutsky",
      :length "120min"
      :datetimes ["2021-11-27-14:00"],}
     {:title "Computing Derivatives and Automatic Differentiation"
      :description "Have you seen a Math or Physics Equation and wanted to work with them using your computer, but thought that you need some special language such as Matlab or Python?
This talk will show that it is possible to accomplish this in Clojure using the SICMUtils Library.
This talk will show how to do automatic differentiation in Clojure using the SICMUtils Library.
I will explain what a derivative is, show how you can transcribe equations to a Clojure using the SICM and provide some background on auto differentiation.
We will also demonstrate a nice workflow for these types of investigations using two other Clojure libraries: Clerk - a notebook that connects to your editor; Hanami - a charting tool built on Vega.",
      :libraries [sicmutils hanami clerk],
      :presenter "Tovieye Moses Ozi",
      :length " 90min  ",
      :datetimes ["2021-11-13-12:00"]
      :link "https://www.meetup.com/London-Clojurians/events/282011140/"}
     {:title "The Devil’s Interop: Invoking Clojure from Python Natively with GraalVM, and Other Such Matters as Related to Clojure Polyglot Blood Magick"
      :description
      "This is a workshop that demonstrates when, why, and how to compile Clojure code into a shared library that can be called natively by CPython (no runtime JVM required!), in the same way that Clojure code can be compiled into a Jar which can be used natively by Java.",
      :libraries [libpython-clj dtype-next graalvm cpython],
      :presenter "James J. Tolton",
      :length " 120min ",
      :datetimes ["2021-11-13-17:00"]
      :link "https://www.meetup.com/London-Clojurians/events/282038936/"}
     {:title "A Data Science Walkthrough"
      :description "In this session, we will get to know some of the main parts of the emerging Clojure data science stack. We will do that through the exploration of a real-world data modelling problem.",
      :libraries [tablecloth metamorphml fastmath vizclj notespace],
      :presenter "Daniel Slutsky",
      :length "120min"
      :datetimes ["2021-11-26-15:00"] ,}
     {:title "Full-text Search Query Log Analysis"
      :description "In this workshop we are going to dive into the search query log analysis similar to what search engineers are doing day to day. I'll use tools written mostly in Clojure that helps to do a semantic query analysis with the goal of getting query templates. The examples are going to be relevant for E-Commerce search applications.",
      :libraries [lucene-grep],
      :presenter "Dainius Jocas",
      :length "90min",
      :datetimes ["2021-11-24-18:00"]}
     {:title "A Gentle Dive into XTDB"
      :description "Configure your database, wield Datalog queries, and travel through time with the experts.

Bring-your-own-REPL if you wish, but otherwise feel free to sit back and watch.

Q&A and frequent breaks throughout.

Any questions? hello@xtdb.com",
      :libraries [xtdb-core],
      :presenter "Jeremy Taylor",
      :length "120min",
      :datetimes ["2021-12-02-16:00"]
      :link "https://www.eventbrite.com/e/xtdb-workshop-reclojure-tickets-191330985127"}
     {:title       "Linear Algebra with Neanderthal"
      :description "",
      :libraries [neanderthal],
      :presenter "David Pham",
      :length    "90min",
      :datetimes ["2021-11-30-15:00"]}]))

;; (require '[clojure.spec.alpha :as s])

;; (s/def ::index int?)
;; (s/def ::type keyword?)
;; (s/def ::time-start string?)
;; (s/def ::time-end string?)
;; (s/def ::duration int?)
;; (s/def ::title string?)
;; (s/def ::speakers (s/coll-of string? :kind vector?))
;; (s/def ::tags (s/coll-of keyword? :kind vector?))
;; (s/def ::abstract string?)

;; (s/def ::talk (s/keys :req [::index ::type ::time-start ::time-end ::duration ::title ::speakers ::tags ::abstract]))

;; (count (map #(s/conform ::talk %) (filter #(= (::type %) :Talk) (:friday schedule-2021))))

(def schedule-2021
  {:friday
   [{:index 1
     :type :Talk
     :time-start "10:00"
     :time-end "10:25"
     :duration 25
     :title "Clerk: Local-First Notebooks for Clojure"
     :speakers ["Martin Kavalar"]
     :tags [:data-science]
     :abstract "Like the idea of notebooks, but hate leaving your favorite editor? We present Clerk, a tool that enables a rich, local-first notebook experience using standard Clojure namespaces. We'll take a deep dive into Clerk's internals. Attendees will learn how Clerk leverages static analysis and caching to deliver fast feedback loops through incremental computation. Next, we'll look into how Clerks viewer system works and how users can adapt it to their problem at hand. Finally we'll look at how Clerk can work in tandem with various libraries in the Clojure ecosystem."}
    {:index 2
     :type :Talk
     :time-start "10:30"
     :time-end "10:55"
     :duration 25
     :title "Component Driven ClojureScript with Storybook"
     :speakers ["David Vujic"]
     :tags [:web]
     :abstract "There are many different aspects of developing an app. It can be difficult to handle all of them at the same time. With Component Driven Design, you develop UI components one at a time, in isolation. When ready, you combine components to create features. Storybook is a tool that helps you with this way of working. With Storybook, you can focus on styling, viewports and events when developing a single component. Without the need to run it within your app. In this talk, I will demo how you can add and use Storybook to your ClojureScript app."}
    {:index 3
     :type :Panel
     :time-start "11:00"
     :time-end "11:25"
     :duration 25}
    {:index 4
     :type :Break
     :time-start "11:30"
     :time-end "12:00"
     :duration 30}
    {:index 5
     :type :Talk
     :time-start "12:00"
     :time-end "12:25"
     :duration 25
     :title "Firetomic: Replacing Datomic with Datahike and Firebase"
     :speakers ["Alexander Oloo"]
     :tags [:web :invited]
     :abstract "Years ago, after being inspired by Clojure and Datomic, I rushed to rebuild all my stacks. As any good dev would. The complexity and cost of setting Datomic up were beyond my reach at the time. And so began the outrageous journey to build a Datomic on top of Firebase This talk is about the scars and lesson along the way. We’ll explore the core concepts, features and practical examples of replikativ’s konserve and datahike as well as Firebase. We’ll also explore how combining these three resulted in the store of our dreams. Firetomic. It’s gonna be a goodie. See you there!"}
    {:index 6
     :type :Talk
     :time-start "12:30"
     :time-end "12:55"
     :duration 25
     :title "Schema driven development with graphql"
     :speakers ["Johanna Antonelli"]
     :tags [:web]
     :abstract "Using GraphQL's Schema Definition Language along with our Clojure powered Site server, I will demo how simple it is to build a GraphQL service from scratch and without writing any backend code."}
    {:index 7
     :type :Panel
     :time-start "13:00"
     :time-end "13:25"
     :duration 25}
    {:index 8
     :type :Break
     :time-start "13:30"
     :time-end "14:00"
     :duration 30}
    {:index 9
     :type :Talk
     :time-start "14:00"
     :time-end "14:25"
     :duration 25
     :title "Clojure Tooling - a Huge Advantage or a Problem?"
     :speakers ["Artem Barmin"]
     :tags []
     :abstract "HI! I'm the co-founder of software development company Freshcode and Clojure enthusiast. 6 months ago our team started doing research to understand what is missing in the Clojure ecosystem. We've interviewed dozens of Clojure developers of different levels and asked them about common problems they have ever encountered while using Clojure. The major concern we've seen is that it is very hard for them to decide which library or toolset to choose for certain tasks. So, the tooling problem is not about producing new tools, it is more about curating a set of tools or making a good set for people. This is a huge challenge, especially for beginners. It slows down the process of learning and actively using the language. That is why my talk focuses on the core problems of the Clojure toolkit (mostly caused by the Lisp curse) and possible solutions. In this context, I'll also plan to present a “Clojure tooling platform”, developed by our team on a cost-free basis, as one of the solutions for this field. The mission of our platform is to become a “Google” for Clojure libraries and unite Clojure community members around ecosystem management. The main idea - focus on Observability (inspired by https://bit.dev with some extra dimensions), and automatization of making decisions of using libraries at the project level. Introduce an “observability standard” for the Clojure ecosystem. However, it was important to note that I have no intention of just promoting the platform. First of all, it will be talking about the Clojure tooling field overview, and I hope, you will find it worthwhile for re:Clojure. "}
    {:index 10
     :type :Talk
     :time-start "14:30"
     :time-end "14:55"
     :duration 25
     :title "Vlojure - A new way to write ClojureScript"
     :speakers ["Ella Hoeppner"]
     :tags [:web]
     :abstract "Vlojure is a new interface for programming ClojureScript which lets users view and edit code using a visual, drag-and-drop based interface, rather than a traditional, text-based interface. Vlojure is an open-source project and is in an early stage at the moment, but I hope to continue expanding Vlojure, and I'm especially interested in exploring the possibility of using it as a teaching tool for new programmers. You can try Vlojure right now in your browser at vlojure.io"}
    {:index 11
     :type :Panel
     :time-start "15:00"
     :time-end "15:25"
     :duration 25}
    {:index 12
     :type :Break
     :time-start "15:30"
     :time-end "16:00"
     :duration 30}
    {:index 13
     :type :Talk
     :time-start "16:00"
     :time-end "16:40"
     :duration 40
     :title "Clojure's Emerging Data Ecosystem: An Incomplete Tour at the REPL"
     :speakers ["Sami Kallinen" "Ethan Miller"]
     :tags []
     :abstract "Ethan and Sami will demonstrate the utility and accessibility of the growing \"stack\" of tools that make undertaking data research in Clojure increasingly pleasurable. We will look at a concrete use case and illustrate how to use some but not all of the available tools. Hence this will be an \"incomplete\" tour. Our aim is that the person who has watched this talk will know how to get started on their own analysis using these tools."}
    {:index 14
     :type :Talk
     :time-start "16:45"
     :time-end "17:10"
     :duration 25
     :title "Just-in-time features in machine learning models: why not Clojure?"
     :speakers ["João Santiago"]
     :tags [:data-science]
     :abstract "It is common for real-time Machine Learning models to use transformed data, instead of raw inputs from a user or some other system. Currently, this critical step is embedded in frameworks such as sci-kit learn or tidymodels, extra code in the APIs that wrap the models or totally rewritten in another language such as Scala and served via Spark. Such practices lead to duplication of code, decrease reusability and introduce new points of friction. In this talk I want to further explore this problem so common among data science teams, and present Bulgogi, my idea for a Clojure system to fix it. Because if it's data, why not Clojure?"}
    {:index 15
     :type :Panel
     :time-start "17:15"
     :time-end "17:40"
     :duration 25}
    {:index 16
     :type :Interlude
     :time-start "17:45"
     :time-end "18:00"
     :duration 15
     :title "Sponsors Pitches"
     :description ""}
    {:index 17
     :type :Talk
     :time-start "18:00"
     :time-end "18:25"
     :duration 25
     :title "More Clojure, Less Complication"
     :speakers ["Dragan Djuric"]
     :tags [:invited]
     :abstract "We love Clojure's elegance and its functional style. Yet, we envy the practicality of Python's AI frameworks, completeness of R's stats library, or JavaScript's endless charting options. Then we rush to gorge on a mishmash of multi-platform solutions. Duct-taping off-the-shelf frameworks with Clojure is very convenient. It is not a good way for the Clojure community to build the expertise in solving hard problems. There is value in building the infrastructure in Clojure. Even though it is not easy, the result is much simpler. Instead of debt, the interest should compound our earnings. In this talk, I present what's up with Deep Diamond and other Uncomplicate libraries. A lot of this \"scary\" vector/matrix/tensor stuff has lots in common with functional Clojure. We talk about some common pitfalls and road blocks that people encounter when starting. If there's time left, you'll hear about new (exciting AND fun!) libraries that I hope to add to Uncomplicate."}
    {:index 18
     :type :Talk
     :time-start "18:30"
     :time-end "18:55"
     :duration 25
     :title "Data-Centricity: Rethinking Introductory Computing to Support Data Science"
     :speakers ["Kathi Fisler"]
     :tags [:invited]
     :abstract "On a growing number of campuses, data science programs offer introductory courses that include a non-trivial amount of programming. The content of such courses overlaps that of traditional computer science introductory courses, but neither course subsumes the other. This talk argues that a common introductory course that covers both data science and data structures supports students and provides curricular flexibility, while also bringing social impacts of computing into the early curriculum. We'll discuss both the design and implementation of such a course, with particular focus on programming language features that support it."}
    {:index 19
     :type :Panel
     :time-start "19:00"
     :time-end "19:25"
     :duration 25}
    {:index 20
     :type :Keynote
     :time-start "19:30"
     :time-end "21:00"
     :duration 90
     :speaker "Stephen Wolfram"}]
   :saturday
   [{:index 1
     :type :Talk
     :time-start "10:00"
     :time-end "10:25"
     :duration 25
     :title "How I got tricked into writing a Clojure port"
     :speakers ["Christophe Grand"]
     :tags []
     :abstract "My business partner (Baptiste Dupuch) identified Dart+Flutter as an interesting platform for mobile dev. For months (maybe it was just weeks or days but definitely felt like months) he was delusional about the idea of compiling Clojure to Dart and nagged me to join forces and start this project until, one day, he decided to take on this endeavor alone. Now I had to stop him. It was a trap!"}
    {:index 2
     :type :Talk
     :time-start "10:30"
     :time-end "10:55"
     :duration 25
     :title "Decentralize the world via the Clojure philosophy"
     :speakers ["Adam Helins"]
     :tags []
     :abstract "Decentralized technologies have gained attention while remaining mysterious. The word \"blockchain\" can hold vastly different meanings to different people and it is unclear for most developers how it can be leveraged. Convex is a new kind of public database, replicated world-wide on a permissionless network. No one owns it, yet it is secure and tamperproof. Some might call it a blockchain, yet it feels like something different. Indeed, the Convex network has been closely modeled on core ideas from the Clojure philosophy. With pragmatic examples, we will finally understand what such a decentralized network really is and how the data-centric model of computation promoted by Clojure brings unforeseen innovation for building the \"Internet of Value\"."}
    {:index 3
     :type :Panel
     :time-start "11:00"
     :time-end "11:25"
     :duration 25}
    {:index 4
     :type :Break
     :time-start "11:30"
     :time-end "12:00"
     :duration 30}
    {:index 5
     :type :Talk
     :time-start "12:00"
     :time-end "12:25"
     :duration 25
     :title "Dressed Up Performance (In Clojure)"
     :speakers ["Ben Sless"]
     :tags []
     :abstract "Clojure is dynamically typed and lets its users work at a high level of abstraction. The price of this great power is often in performance, and Clojure is often criticized for its performance in relation to other languages, from Java to Common Lisp. In this talk I'll present how by using two of Clojure's fundamental building blocks, macros and higher order functions, Clojure code can be sped up significantly without sacrificing common idioms. I will go over profiling techniques, findings, and demonstrate how such gains can apply to real world applications. \"Premature optimization is the root of all evil. *Yet we should not pass up our opportunities in that critical 3%.*\" This talk is for those 3% of cases, the curious, and a spiritual successor to Tommi Reiman's Naked Performance talk"}
    {:index 6
     :type :Talk
     :time-start "12:30"
     :time-end "12:55"
     :duration 25
     :title "Functional Effect and Streaming Systems in Clojure"
     :speakers ["Léo Noel"]
     :tags []
     :abstract "Functional reactive systems have historically struggled to find real-world applications. However, advances in pure functional programming have revealed new applications and styles including not just discrete event streams, but also continuous-time signal processing, thus partially reinventing FRP. Missionary is a mature library that brings a functional approach to streaming, designed for clojure/script from the ground up and leveraging the full power of lisp metaprogramming in an expressive dialect, freed from the monad abstraction. In this talk, we're going to explore the benefits of this paradigm, what clojure can provide in this area and how it fits in the existing landscape. We'll cover various use cases through this lens, from basic RPC to backpressured streaming and complex reactive systems."}
    {:index 7
     :type :Panel
     :time-start "13:00"
     :time-end "13:25"
     :duration 25}
    {:index 8
     :type :Break
     :time-start "13:30"
     :time-end "13:55"
     :duration 25}
    {:index 9
     :type :Talk
     :time-start "14:00"
     :time-end "14:25"
     :duration 25
     :title "Not your mother's Datalog"
     :speakers ["Paula Gearon"]
     :tags [:invited]
     :abstract "There have been a number of Clojure graph databases introduced since Datomic was first released in 2012. They each share a \"Datalog based query language\" which has been the first time many people have heard of Datalog. However, as the developer of a Clojure graph database (Asami) I get very frustrated when I hear that these databases are queried with \"Datalog\". Because their query language is not Datalog. Although it is. Sort of.  Datalog is a logic programming language for databases that was developed in academia in the 1980s. But if the academics who invented this system were to approach a Clojure graph database they would not recognize much at all. This talk will explore how graph databases align with Datalog, and how the graph query languages both meet and fall short of the expectations of Datalog. It will also demonstrate how Datalog also maps to other systems, such as relational databases with SQL."}
    {:index 10
     :type :Talk
     :time-start "14:30"
     :time-end "14:55"
     :duration 25
     :title "The Art of Domain Modeling"
     :speakers ["Eric Normand"]
     :tags []
     :abstract "After you've mastered immutable data and higher-order functions, what's next in functional programming? Domain modeling is the next-level skill that few functional programmers learn. But a good domain model can mean the difference between a painful codebase and a joyful one. And it's not just programmer morale that hangs in the balance. A better model can help the business deliver more value. In this talk, you will explore the art of domain modeling. You will learn to see past software design rules of thumb. Instead, you will discover an analytical framework for building and improving software models of a domain. That framework will help you in functional programming or in whatever paradigm or language you are using."}
    {:index 11
     :type :Panel
     :time-start "15:00"
     :time-end "15:25"
     :duration 25}
    {:index 12
     :type :Break
     :time-start "15:30"
     :time-end "15:55"
     :duration 25}
    {:index 13
     :type :Talk
     :time-start "16:00"
     :time-end "16:25"
     :duration 25
     :handle ""
     :link ""
     :brief ""
     :slug "ashima-panjwani"
     :picture "ashima-panjwani.jpg"
     :title "Viz.clj - A Clojure data visualization library for beginners"
     :speakers ["Ashima Panjwani"]
     :tags [:data-science]
     :abstract "Our goal for creating Viz was to have a beginner-friendly library for visualizing data. Thus, our focus was mainly on building something which would be easy to use, have a consistent syntax, have excellent error handling capability to help the users debug their code, and have extensive documentation. We explored multiple data visualization libraries in various languages (eg. Altair, Vega-Lite API, ggvis, etc.), and the lessons learned from each of those were incorporated into Viz. My talk mainly revolves around the need for creating Viz, the various design decisions which were taken while building it, and the numerous problems we faced at each point during the journey."}
    {:index 14
     :type :Talk
     :time-start "16:30"
     :time-end "16:55"
     :duration 25
     :title "Scaling deliberation with data science (and Clojure)"
     :speakers ["Christopher Small"]
     :picture "christopher-small.jpg"
     :slug "christopher-small"
     :handle ""
     :link ""
     :brief ""
     :tags [:data-science]
     :abstract "This talk is a story about how we've used Clojure to build Polis, a data science system for scalable deliberation, and how it can help us shape healthier democracies. One part quixotic fever dream, one part experience report, we'll look at both what Clojure has to offer data science, and what data science has to offer the world of  civic engagement. Please join us and learn how you can help resolve conflict and elevate the public's voice in governance."}
    {:index 15
     :type :Panel
     :time-start "17:00"
     :time-end "17:25"
     :duration 25}
    {:index 16
     :type :Interlude
     :time-start "17:30"
     :time-end "17:55"
     :duration 25
     #_:authors                         ;FIXME as new data in the spreadsheet indicates the Interlude may have optional authors.
     :title "The Spanish-speaking Clojure Community: from a Telegram group to World Domination"
     :description "The Spanish-speaking Clojure Community: why we exist, who we are, what have we done so far, and (some) plans for the future. But, most importantly: why can't we agree on an official name :)"}
    {:index 17
     :type :Talk
     :time-start "18:00"
     :time-end "18:25"
     :duration 25
     :title "Automatic Differentiation in Clojure with SICMUtils"
     :speakers ["Tovieye Ozi"]
     :tags [:data-science]
     :abstract "Have you seen a Math or Physics Equation and wanted to work with them using your computer, but thought that you need some special language such as Matlab or Python? This talk will show that it is possible to accomplish this in Clojure using the SICMUtils Library. This talk will show how to do automatic differentiation in Clojure using the SICMUtils Library. I will explain what a derivative is, show how you can transcribe equations to a Clojure using the SICM and provide some background on auto differentiation. We will also demonstrate a nice workflow for these types of investigations using two other Clojure libraries:* Clerk - a notebook that connects to your editor * Hanami - a charting tool built on Vega"}
    {:index 18
     :type :Talk
     :time-start "18:30"
     :time-end "18:55"
     :duration 25
     :title "Functional Physics: Code Along with Visual Blocks"
     :speakers ["Markus Kloimwieder"]
     :tags [:data-science]
     :abstract "The task of formulating a mathematical problem as a computer-executable program and debugging that program is a powerful exercise in the process of learning theoretical physics. Numerous physics books, such as “The Structure and Interpretation of Classical Mechanics” (SICM) by Sussman and Wisdom [1], use code snippets along with traditional mathematical formulae. Some lecturers show coded physics examples on slides or in Jupyter notebooks. However, it is hard for many physics students to grasp code in real time, let alone code along in such lectures, because they initially lack the required coding skills and often need to install lots of unfamiliar software. This video [2] shows a Clojure based environment where physics examples from the SICM book are presented as graphical puzzles. No software other than a web-browser is needed to code along and play with the puzzles [3]. Coding is performed by the lecturer by moving and connecting visual blocks without the need to type anything on the keyboard, the intention being that viewers follow in real-time. Given that the puzzles are readily prepared by a programmer, the proposed environment enables any domain-identified person to use interactive coding in a physics lecture. [1] https://mitpress.mit.edu/books/structure-and-interpretation-classical-mechanics-second-edition [2] http://www.kloimwieder.com/videos/MAVA_compress_210210_150928.mp4 [3] https://kloimhardt.github.io/cljtiles.html"}
    {:index 19
     :type :Panel
     :time-start "19:00"
     :time-end "19:25"
     :duration 25}
    {:index 20
     :type :Keynote
     :time-start "19:30"
     :time-end "21:00"
     :duration 90
     :speaker "Gerald Jay Sussman"}
    ]})

(def friday "2021-12-03")
(def saturday "2021-12-04")
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
    (map times->datetimes (:friday schedule-2021))))

(def saturday-2021
  (let [times->datetimes (make-datetime-with-tz saturday)]
    (map times->datetimes (:saturday schedule-2021))))

(comment
  ;; Sort talks by index
  (sort-by :index (filter #(= (:type %) :Talk) (:friday schedule-2021)))

  ;; Sort all by index
  (sort-by :index (:friday schedule-2021))

  ;; Get the keys in a talk map
  (sequence (comp (filter #(= (:type %) :Keynote))
                  (mapcat keys)
                  (distinct))
            (:friday schedule-2021)))

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
