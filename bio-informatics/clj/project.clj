(defproject rosalind_clojure "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [aysylu/loom "1.0.2"] ;; for prob025_PMCH_0_LIB.clj
                 [org.clojure/test.check "1.1.0"]]
  :main ^:skip-aot rosalind-clojure.core
  :target-path "target/%s"
  :plugins [[lein-cljfmt "0.8.0"]]
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
