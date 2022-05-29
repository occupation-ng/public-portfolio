(defproject cryptography_exercises "0.1.0-SNAPSHOT"
  :description "An example Cryptography exercise for my portfolio"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/test.check "1.1.0"]]
  :main ^:skip-aot cryptography-exercises.core
  :target-path "target/%s"
  :plugins [[lein-cljfmt "0.8.0"]]
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
