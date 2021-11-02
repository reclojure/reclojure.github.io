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
      :presenter "Joao Santiago",
      :length "90min",
      :datetimes ["2021-11-13-14:00"]}
     {:title "Wrangling Datasets with Tablecloth"
      :description "",
      :libraries [tablecloth],
      :presenter "Mey Beisaron",
      :length "120min",
      :datetimes ["2021-11-07-16:00"]}
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
      :datetimes ["2021-11-06-15:00"
                  "2021-11-20-15:00"]}
     {:title       "Structure and Interpretation of Transducers",
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
      :datetimes ["2021-11-15-17:30"]}
     {:title     "Wrangling Sequences Like a Cowboy with Injest",
      :description
      "Note: This workshop covers material that is best understood by reviewing a prior workshop: “The Structure and Interpretation of Transducers” Summary: Injest provides thread macros (e.g. x>>, =>>) that lower the bar to higher performance by letting you compose transducers in the same way as you would with ->>. In this workshop we will introduce you to injest’s three main features: path threads, auto transducification and auto parallelization. Then, we’ll go over some real world examples of transforming (wrangling) data sequences. We’ll spend the remaining time of the workshop in an open session, answering questions and trying things out at the REPL. I might even wear a cowboy hat, in further jest 🤠",
      :libraries [injest],
      :presenter "John Newman",
      :length    " 120min ",
      :datetimes ["2021-11-22-17:30"]}
     {:title     "Visualizing Data with Hanami",
      :description
      "In this workshop we will explore how to visualize simple datasets using Hanami, a Clojure library for creating interactive visualizations built on top of Vega-Lite and Vega. There will be a brief explanation of how these tools work to start but we will spend most of our time exploring together, so it will be helpful to have a Clojure environment set up on your computer already.",
      :libraries [hanami],
      :presenter "Kira McLean",
      :length    "90min",
      :datetimes ["2021-11-21-16:00"]} 
     {:title     "Visualizing Data with Hanami",
      :description
      "In this workshop we will explore how to visualize simple datasets using Hanami, a Clojure library for creating interactive visualizations built on top of Vega-Lite and Vega. There will be a brief explanation of how these tools work to start but we will spend most of our time exploring together, so it will be helpful to have a Clojure environment set up on your computer already."
      :libraries [hanami],
      :presenter "Thomas Clark",
      :length    "90min"}
     {:title "Using Clojurescript to Extend the Logseq Knowledge Base"
      :description "",
      :libraries [logseq],
      :presenter "Tienson Qin",
      :length "",}
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
      :presenter "Jakub Holy",
      :length    "        ",
      :link "https://www.eventbrite.se/e/reclojure-introduction-to-fulcro-workshop-tickets-188718210247",
      :datetimes ["2021-12-01-15:00"]}
     {:title "An Intro to Statistical Inference"
      :description
      "Useful inferential statistics does not have to be just the domain of data scientists. This workshop follows examples in the book \"Statistics is Easy\" to demonstrate concepts of fairness, p-value, confidence intervals, power using resampling and bootstrapping. All concepts will be explained purely using functions from the core clojure library",
      :libraries [clojurecore],
      :presenter "Rohit Thadani",
      :length " 90min  ",
      :datetimes ["2021-11-16-19:00" "2021-11-21-03:00"]}
     {:title "Modeling with Probability"
      :description "We will explore a data modeling problem through Bayesian Inference. Our main tool will be the Inferme library by Tomasz Sulej. We will see how it is possible to model our data through a 'forward' probabilistic process, and infer the unknowns by running it 'backwards'.",
      :libraries [fastmath inferme],
      :presenter "Daniel Slutsky",
      :length "120min"
      :datetimes ["2021-11-12-14:00"],}
     {:title "Machine Learning Through Pipelines"
      :description "Scicloj.ml is a Clojure library by Carsten Behring that connects many aspects of machine learning workflows into one coherent stack. It is based on a certain notion of a pipeline, implemented in the libraries Metamorph and Metamorph.ml. In this session we will discuss some of the core ideas behind these libraries and look into solving a data modeling problem using Scicloj.ml.",
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
      :length " 60min  ",
      :datetimes [
      "2021-11-13-12:00"]}
     {:title "The Devil’s Interop: Invoking Clojure from Python Natively with GraalVM, and Other Such Matters as Related to Clojure Polyglot Blood Magick"
      :description
      "This is a workshop that demonstrates when, why, and how to compile Clojure code into a shared library that can be called natively by CPython (no runtime JVM required!), in the same way that Clojure code can be compiled into a Jar which can be used natively by Java.",
      :libraries [libpython-clj dtype-next graalvm cpython],
      :presenter "James J. Tolton",
      :length " 120min ",
      :datetimes ["2021-11-13-17:00"]}
     {:title "A Data Science Walkthrough"
      :description "In this session, we will get to know some of the main parts of the emerging Clojure data science stack. We will do that through the exploration of a real-world data modeling problem.",
      :libraries [tablecloth metamorphml fastmath vizclj notespace],
      :presenter "Daniel Slutsky",
      :length "120min"
      :datetimes ["2021-11-26-15:00"] ,}
     {:title "Full-text Search Query Log Analysis"
      :description "",
      :libraries [lucene-grep],
      :presenter "Dainius Jocas",
      :length "",
      :datetimes ["2021-11-24-18:00"]}
     {:title "A Gentle Dive into XTDB"
      :description "Configure your database, wield Datalog queries, and travel through time with the experts.

Bring-your-own-REPL if you wish, but otherwise feel free to sit back and watch.

Q&A and frequent breaks throughout.

Any questions? hello@xtdb.com",
      :libraries [xtdb-core],
      :presenter "Jeremy Taylor",
      :length "",
      :datetimes ["2021-12-02-16:00"]
      :link "https://www.eventbrite.com/e/xtdb-workshop-reclojure-tickets-191330985127"}
     {:title       "Linear Algebra with Neanderthal"
      :description "",
      :libraries [neanderthal],
      :presenter "David Pham",
      :length    "",}]))

