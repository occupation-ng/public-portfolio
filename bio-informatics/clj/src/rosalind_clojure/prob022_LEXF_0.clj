(ns rosalind-clojure.prob022-LEXF-0
  (:require [clojure.string :as cstr])
  (:gen-class))

;; https://rosalind.info/problems/lexf/

(defn ^:private iter-product
  "Get all distinct combinations of symbols of a specified length
    symbols : VEC[STR STR ..] : VEC of STRs symbols to iterate
    repeat-cnt : INT : length of final combination of symbols
    RETURN : VEC[VEC[STR STR ..] VEC[STR STR ..] ..] : VEC of VECs of STRs of distinct symbol combinations, number of STRs determined by repeat-cnt
  ex.
    [A C G T] 2 => [[A A] [A C] [A G] [A T] [C A] [C C] [C G] [C T] [G A] [G C] [G G] [G T] [T A] [T C] [T G] [T T]]"
  [symbols repeat-cnt]
  (loop [loop-cnt 0
         iters (into [] (for [s symbols] [s]))]
    (if (< loop-cnt (dec repeat-cnt)) ;; (dec ) to ignore initial dimension
      (recur (inc loop-cnt)
             (into [] (for [i iters
                            j symbols]
                        (conj i j))))
      iters)))

(defn ^:private get-iter-product
  "Middleware between input processing and calling (iter-product )
    ins : VEC[STR STR] : STR0 is a string of symbols 'A B C D', STR1 is string of INT of repeat count
    RETURN : VEC[VEC[STR STR ..] VEC[STR STR ..] ..] : VEC of VECs of STRs of distinct symbol combinations, number of STRs determined by repeat-cnt
  ex.
    ['A C' '2'] => [[A A] [A C] [C A] [C C]]"
  [ins]
  (let [symbols (cstr/split (first ins) #" ")
        repeat-cnt (Integer/parseInt (second ins))]
    (iter-product symbols repeat-cnt)))

(defn ^:private output
  "Output in the expected format
    outs : VEC[VEC[STR STR ..] ..] : VEC of VECs of STRs
  ex.
    [[A A] [A C] [A G]] =>
      A A
      A C
      A G"
  [outs]
  (println "\nSample Output:")
  (apply println (for [out outs] (str "\n" (cstr/join " " out)))))

(defn ^:private proc-input
  [inp]
  (let [lines (cstr/split inp #"\n")]
    (remove nil? (for [line lines]
                   (when (not= "" (cstr/trim line))
                     line)))))

(def sample-dataset "
A C G T
2")

(defn onit
  []
  (println "Sample Dataset:")
  (println sample-dataset)
  (-> sample-dataset (proc-input) (get-iter-product) (output)))

;; lein run 22 
