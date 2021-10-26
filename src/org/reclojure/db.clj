(ns org.reclojure.db)

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
    :description "An avid Clojure developer, Paula likes to work in the most technical parts of a system building the infrastructure that lets other developers do their jobs. She has been the technical lead on several commercial and open source projects, with a focus on data storage and processing, and was a lead editor for the SPARQL standard for accessing RDF databases. When not coding, she does triathlons, cooks, helps her children with homework, and mentors and supports young members of Women Who Code. Originally from Australia, she currently lives with her family in Virginia, in the USA."}])

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
        sicmutils {:name "Sicmutils" :href "https://github.com/sicmutils/sicmutils"}
        libpython-clj {:name "libpython-clj" :href "https://github.com/clj-python/libpython-clj"}
        techmldatatype {:name "tech.ml.datatype" :href ""} ;FIXME could only find tech.ml.dataset
        graalvm {:name "GraalVM" :href "https://www.graalvm.org/"}
        cpython {:name "CPython" :href "https://github.com/python/cpython"}
        lucene-grep {:name "Lucene-grep" :href "https://github.com/dainiusjocas/lucene-grep"}
        xtdb-core {:name "xtdb-core" :href "https://xtdb.com"}]
    [{:datetime ""
      :title "How to Talk with Data Scientists?"
      :presenter "Joao Santiago"
      :libraries []
      :confirmed true}
     {:datetime ""
      :title "Wrangling Datasets with Tablecloth"
      :libraries [tablecloth techmldataset]
      :presenter "Mey Beisaron"
      :confirmed true}
     {:datetime ""
      :title "Wrangling Arrays with dtype-next"
      :libraries [dtype-next]
      :presenter "David Sletten"
      :confirmed false}
     {:datetime ""
      :title "Wrangling Sequences with Injest"
      :libraries [injest]
      :presenter "John Newman"
      :confirmed true}
     {:datetime ""
      :title "Visualizing Data with Hanami"
      :libraries [hanami]
      :presenter "Kira McLean"
      :confirmed true}
     {:datetime ""
      :title "Visualizing Data with Hanami"
      :libraries [hanami]
      :presenter "Thomas Clark"
      :confirmed true}
     {:datetime ""
      :title "Visualizing Data with Viz.clj"
      :libraries [vizclj]
      :presenter "Ashima Panjwani"
      :confirmed true}
     {:datetime ""
      :title "Using Clojurescript to Extend the Logseq Knowledge Base"
      :libraries [logseq]
      :presenter "Tienson Qin"
      :confirmed true}
     {:datetime ""
      :title "Touring Oz: Notebooks, Visualizations, and Webapps, Oh My!"
      :libraries [oz]
      :presenter "Christopher Small"
      :confirmed true}
     {:datetime ""
      :title "Your Namespace as a Notebook"
      :libraries [notespace]
      :presenter "Daniel Slutsky"
      :confirmed true}
     {:datetime ""
      :title "Writing Web Apps with Fulcro"
      :libraries [fulcro]
      :presenter "Jakub Holy"
      :confirmed true}
     {:datetime ""
      :title "An Intro to Statistical Inference"
      :libraries []
      :presenter "Rohit Thadani"
      :confirmed false}
     {:datetime ""
      :title "Modeling with Probability"
      :libraries [fastmath kixistats fitdistr inferme]
      :presenter "Daniel Slutsky"
      :confirmed true}
     {:datetime ""
      :title "Machine Learning Through Pipelines"
      :libraries [sciclojml]
      :presenter "Daniel Slutsky"
      :confirmed true}
     {:datetime ""
      :title "Computing Derivatives and Automatic Differentiation"
      :libraries [sicmutils]
      :presenter "Tovieye Moses Ozi"
      :confirmed true}
     {:datetime ""
      :title "The Devil’s Interop: Invoking Clojure from Python Natively with GraalVM, and Other Such Matters as Related to Clojure Polyglot Blood Magick"
      :libraries [libpython-clj techmldatatype graalvm cpython]
      :presenter "James J. Tolton"
      :confirmed true}
     {:datetime ""
      :title "A Data Science Walkthrough"
      :libraries []
      :presenter "Ethan Miller"
      :confirmed true}
     {:datetime ""
      :title "A Data Science Walkthrough"
      :libraries []
      :presenter "Daniel Slutsky"
      :confirmed true}
     {:datetime ""
      :title "Full-text Search Query Log Analysis"
      :libraries [lucene-grep]
      :presenter "Dainius Jocas"
      :confirmed true}
     {:datetime ""
      :title "A Gentle Dive into XTDB"
      :libraries [xtdb-core]
      :presenter "Jeremy Taylor"
      :confirmed true}]))
