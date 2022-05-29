(ns apig-post-signin.core
  (:require
   [clojure.pprint :as pp] ;; dev
   [clojure.data.json :as cjson]
   [clojure.java.io :as io]
   [cheshire.core :as json]
   [cognitect.aws.client.api :as aws])
  (:gen-class
   :implements [com.amazonaws.services.lambda.runtime.RequestStreamHandler]))

;; https://github.com/cognitect-labs/aws-api

(def cog (aws/client {:api :cognito-idp :region "us-east-2"}))

(defn handle-event [event]
  (pp/pprint event)
  {:e event})

(defn parse-json
  [is]
  (json/parse-stream (io/reader is) keyword))

(defn ^:private cog-InitiateAuth
  "
  CLI: https://docs.aws.amazon.com/cli/latest/reference/cognito-idp/initiate-auth.html
  API: https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html
  "
  [dada]
  (aws/invoke cog {:op :InitiateAuth :request {:AuthFlow (:AuthFlow dada)
                                               :ClientId (:ClientId dada)
                                               :AuthParameters {:USERNAME (:USERNAME (:AuthParameters dada))
                                                                :PASSWORD (:PASSWORD (:AuthParameters dada))}}}))

(defn resp [dada]
  (let [response {:statusCode 200
                  :body (json/generate-string dada)}]
    response))

(defn onit
  [this in-stream out-stream context]
  (let [dada (parse-json in-stream)
        cogi (cog-InitiateAuth dada)
        outs {:ins dada
              :conts (contains? cogi :AuthenticationResult)
              :nils (nil? (:IdToken (:AuthenticationResult cogi)))}
        w (io/writer out-stream)]
    (cjson/write (resp outs) w)
    (.flush w)))

(defn -handleRequest
  [this is os context]
  (onit this is os context))
