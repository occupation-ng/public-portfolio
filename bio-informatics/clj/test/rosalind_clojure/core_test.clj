(ns rosalind-clojure.core-test
  {:clj-kondo/config '{:lint-as {clojure.test.check.properties/for-all clojure.core/let
                                 clojure.test.check.clojure-test/defspec clj-kondo.lint-as/def-catch-all}}}
  (:require [clojure.test :as ctst]
            [clojure.test.check.clojure-test :as ct-check]
            [clojure.test.check.properties :as ct-prop]
            [clojure.test.check.generators :as ct-gen]
            [clojure.string :as cstr]
            [rosalind-clojure.prob024-LONG-0 :as prob024]
            [rosalind-clojure.prob041-REAR-0 :as prob041]))

#_(ctst/deftest TEMPLATE
    (ctst/testing "Prob  -  - ( )"
      (ctst/is (= ;; ANS | (#'prob0/_ )
                ))))

(ctst/deftest prob024-critical-match-unittest-0
  (ctst/testing "Prob 24 - LONG - (critical-match )"
    (ctst/is (=
              [[6 0 \C] [6 1 \C] [6 2 \T] [6 3 \G]]
              (#'prob024/critical-match [\A \T \T \A \G \A \C \C \T \G] [\C \C \T \G \C \C \G \G \A \A] [[[6 0 \C] [6 1 \C] [6 2 \T] [6 3 \G]] [[7 0 \C]]])))))

(ctst/deftest prob024-critical-match-unittest-1
  (ctst/testing "Prob 24 - LONG - (critical-match )"
    (ctst/is (=
              [[9 0 \G] [9 1 \C] [9 2 \C] [9 3 \G] [9 4 \G] [9 5 \A] [9 6 \A]]
              (#'prob024/critical-match [\A \T \T \A \G \A \C \C \T \G \C \C \G \G \A \A] [\G \C \C \G \G \A \A \T \A \C] [[[4 0 \G]] [[9 0 \G] [9 1 \C] [9 2 \C] [9 3 \G] [9 4 \G] [9 5 \A] [9 6 \A]] [[12 0 \G]] [[13 0 \G]]])))))

(ctst/deftest prob024-critical-match-unittest-2
  (ctst/testing "Prob 24 - LONG - (critical-match ) - encased example"
    (ctst/is (=
              [[3 0 \A] [3 1 \G] [3 2 \A] [3 3 \C] [3 4 \C] [3 5 \T] [3 6 \G] [3 7 \C] [3 8 \C] [3 9 \G]]
              (#'prob024/critical-match [\A \T \T \A \G \A \C \C \T \G \C \C \G \G \A \A] [\A \G \A \C \C \T \G \C \C \G] [[[0 0 \A]] [[3 0 \A] [3 1 \G] [3 2 \A] [3 3 \C] [3 4 \C] [3 5 \T] [3 6 \G] [3 7 \C] [3 8 \C] [3 9 \G]] [[5 0 \A]] [[14 0 \A]] [[15 0 \A]]])))))

;; check the sample dataset
(ctst/deftest prob041-proc-file-unittest-0
  (ctst/testing "Prob 41 - REAR - (proc-file ) - Rosalind exercise sample dataset."
    (ctst/is (= [3 9 4 5 7 0] (#'prob041/proc-file "test/rosalind_clojure/unit-tests/sample-dataset.txt")))))

;; property based fuzzy checker to identify examples where vector ordering matters when finding minimum breakpoints
(def gen-normal-vector-permutations
  (let [vector-length 10]
    (ct-gen/vector-distinct
     (ct-gen/choose 1 vector-length) ;; double inclusive
     {:max-tries (* 10 vector-length) ;; used to ensure distinct value from (ct-gen/choose )
      :num-elements vector-length})))

(ct-check/defspec gen-shuffled-pairs 47
  (ct-prop/for-all [generated-vec gen-normal-vector-permutations]
                   ((var prob041/process-pairs) [[generated-vec (shuffle generated-vec)]])))

;; check the breakpoint function against known inputs and solutions
(ctst/deftest breakpoints-test
  (ctst/testing "Testing the breakpoint function using unit-tests from file."
    (let [slrp (slurp "test/rosalind_clojure/unit-tests/breakpoints.tst")
          lines (cstr/split slrp #"\n")]
      (doseq [line lines]
        (let [spl (cstr/split line #"\|")
              permutation (map #(Integer/parseInt %) (cstr/split (cstr/trim (first spl)) #" "))
              breakpoints (map #(Integer/parseInt %) (cstr/split (cstr/trim (second spl)) #" "))
              check (#'prob041/get-breakpoints permutation)]
          (ctst/is (= breakpoints check)))))))

;; check the reversal function against known inputs and solutions
(ctst/deftest reversals-test
  (ctst/testing "Check the reversals of the breakpoint function using unit tests from file."  []
                (let [slrp (slurp "test/rosalind_clojure/unit-tests/reversals.tst")
                      lines (cstr/split slrp #"\n")]
                  (doseq [line lines]
                    (let [spl (cstr/split line #"\|")
                          permutation (map #(Integer/parseInt %) (cstr/split (cstr/trim (first spl)) #" "))
                          [i j] (map #(Integer/parseInt %) (cstr/split (cstr/trim (second spl)) #" "))
                          reversal (map #(Integer/parseInt %) (cstr/split (cstr/trim (nth spl 2)) #" ")) ;; third
                          check (#'prob041/reversal i j (vec permutation))]
                      (ctst/is (= reversal check)))))))

;; property based fuzzy checker to check mapping to and from identity 
(defn get-identity
  "Takes in a random permutation of a vector and returns the identity of the same length.
    _v : VEC[INT,INT,..] : vector of integers
    RETURN : VEC[1,INT,..,(count _v)] : sorted vector of integers 1 to (count _v)
  ex. 
    [0 -4 13 2 51] => [1 2 3 4 5]"
  [_v]
  (vec (for [i (range (count _v))] (inc i))))  ;; (inc i) because identity is 1-indexed

(defn map-from-identity
  "Takes a random permutation and an identity map and returns the permutation mapped from an identity map.
    identity-map : MAP{INT INT, INT INT} : mapping of a vector to its identity
    _v : VEC[INT,INT,..] : vector of integers
    RETURN : VEC[INT,INT,..] : vector of integers mapped from identity
  ex.
    {7 8, 1 5, 4 4, 6 7, 3 1, 2 10, 9 2, 5 9, 10 3, 8 6} [10 2 6 9 5 8 1 4 7 3] => [2 9 8 5 1 7 3 4 6 10]
    {7 6, 1 5, 4 8, 6 9, 3 7, 2 1, 9 2, 5 4, 10 10, 8 3} [7 2 10 8 5 3 9 6 4 1] => [3 9 10 4 1 8 6 7 5 2]
    {7 7, 1 1, 4 4, 6 6, 3 3, 2 2, 9 9, 5 5, 10 10, 8 8} [1 2 3 4 5 6 7 8 9 10] => [1 2 3 4 5 6 7 8 9 10]"
  [identity-map _v]
  (loop [mapped_v []
         i 0]
    (if (< i (count _v))  ;; identity is 1-indexed
      (recur (conj mapped_v
                   (some
                    (fn [[k v]] (when (= v (nth _v i)) k))
                    identity-map))
             (inc i))
      mapped_v)))

(ct-check/defspec gen-to-and-from-identity 17
  (ct-prop/for-all [generated-vec gen-normal-vector-permutations]
                   (let [identity-map (#'prob041/get-identity-map (get-identity generated-vec))
                         normalised-vector (#'prob041/map-to-identity identity-map generated-vec)]
                     (= generated-vec (map-from-identity identity-map normalised-vector)))))

;; private function call using (var ) or its shorthand (#'/NS.FN )
;;   (= ((var prob041/process-pairs) [[generated-vec (shuffle generated-vec)]]))))
;;   (= (#'prob041/process-pairs [[generated-vec (shuffle generated-vec)]]))))

(comment "BIBLIO
  ;; core
  https://clojuredocs.org/clojure.core/conj
  https://clojuredocs.org/clojure.core/count
  https://clojuredocs.org/clojure.core/doseq
  https://clojuredocs.org/clojure.core/first 
  https://clojuredocs.org/clojure.core/inc
  https://clojuredocs.org/clojure.core/map
  https://clojuredocs.org/clojure.core/nth
  https://clojuredocs.org/clojure.core/range
  https://clojuredocs.org/clojure.core/second
  https://clojuredocs.org/clojure.core/shuffle
  https://clojuredocs.org/clojure.core/slurp
  https://clojuredocs.org/clojure.core/some
  https://clojuredocs.org/clojure.core/var ;; The reader macro #'x expands to (var x)
  https://clojuredocs.org/clojure.core/vec")
