(ns rosalind-clojure.core
  (:require
   [rosalind-clojure.prob017-ORF-0 :as prob017]
   [rosalind-clojure.prob018-PERM-0 :as prob018]
   [rosalind-clojure.prob019-PRTM-0 :as prob019]
   [rosalind-clojure.prob020-REVP-0 :as prob020]
   [rosalind-clojure.prob021-SPLC-0 :as prob021]
   [rosalind-clojure.prob022-LEXF-0 :as prob022]
   [rosalind-clojure.prob023-LGIS-0 :as prob023]
   [rosalind-clojure.prob024-LONG-0 :as prob024]
   [rosalind-clojure.prob025-PMCH-0 :as prob025]
   [rosalind-clojure.prob025-PMCH-0-LIB :as prob025-lib]
   [rosalind-clojure.prob041-REAR-0 :as prob041])
  (:gen-class))

(defn onit [prob]
  (cond
    (= "17" prob)
    (prob017/onit)
    (= "18" prob)
    (prob018/onit)
    (= "19" prob)
    (prob019/onit)
    (= "20" prob)
    (prob020/onit)
    (= "21" prob)
    (prob021/onit)
    (= "22" prob)
    (prob022/onit)
    (= "23" prob)
    (prob023/onit)
    (= "24" prob)
    (prob024/onit)
    (= "25" prob)
    (prob025/onit)
    (= "25_LIB" prob)
    (prob025-lib/onit)
    (= "41" prob)
    (prob041/onit)
    :else
    (println "  err : pass the problem number as an argument, ie. $ lein run 17")))

(defn -main [& args]
  (onit (first args)))
