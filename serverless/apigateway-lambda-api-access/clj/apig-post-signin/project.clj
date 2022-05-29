(defproject apig-post-signin "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [cheshire "5.10.0"]
                 [com.amazonaws/aws-lambda-java-core "1.2.1"]
                 [com.cognitect.aws/api         "0.8.469"]
                 [com.cognitect.aws/endpoints   "1.1.11.826"]
                 [com.cognitect.aws/cognito-idp "801.2.706.0"]
                 ]
  :main ^:skip-aot apig-post-signin.core
  :target-path "target/%s"
  :plugins [[lein-cljfmt "0.8.0"]]
  :profiles {:uberjar {:aot :all}}) 

