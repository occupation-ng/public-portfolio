(ns rosalind-clojure.prob018-PERM-0
  (:gen-class))

;; https://rosalind.info/problems/perm/

(defn ^:private additional-dimension
  [n elements]
  (mapcat into
          (for [element elements]
            (for [i (drop 1 (range (inc n)))]
              (conj element i)))))

(defn ^:private get-initial-elements
  [r]
  (into [] (for [i (drop 1 (range (inc r)))]
             [i])))

(defn ^:private get-permutations
  [r] ;; r: repeat
  (loop [cnt 0
         perms (get-initial-elements r)]
    (if (< cnt (dec r))  ;; (dec ) due initial elements already counting
      (recur
       (inc cnt)
       (additional-dimension r perms))
      (remove nil? (map #(when (= r (count (distinct %))) %) perms)))))

(defn ^:private output
  [perms]
  (println (count perms))
  (doall (map println perms)))

(defn onit []
  (-> 3 (get-permutations) (output)))

(comment "BIBLIO
  https://clojuredocs.org/clojure.core/inc
  https://clojuredocs.org/clojure.core/println
  https://clojuredocs.org/clojure.core/partition
  https://clojuredocs.org/clojure.core/map
  https://clojuredocs.org/clojure.core/mapcat
  https://clojuredocs.org/clojure.core/doall
  https://clojuredocs.org/clojure.core/subs")
;; $ lein run 18
