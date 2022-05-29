(ns rosalind-clojure.utils
  (:require
   [clojure.java.io :as cjio])
  (:gen-class))

(defn sort-2d-by-len-lohi
  "Sort vector by subvector lengths
    vec2d : VEC[VEC[INT INT ..] ..] : VEC of VECs of INTs
    RETURN : VEC[VEC[INT INT ..] VEC[INT ..] ..] : the same vectors but sorted by the length
  ex.
  [[5] [1] [1 3] [1 2] [1 2 3] [1 4] [4] [2] [2 3] [3]] => [[1 2 3] [1 3] [1 2] [1 4] [2 3] [5] [1] [4] [2] [3]]
  "
  [vec2d]
  (reverse (into [] (sort-by
                     (comp (frequencies (map count vec2d)) count)
                     vec2d))))

(defn sort-2d-by-len-hilo
  "Sort vector by subvector lengths
    vec2d : VEC[VEC[INT INT ..] ..] : VEC of VECs of INTs
    RETURN : VEC[VEC[INT INT ..] VEC[INT ..] ..] : the same vectors but sorted by the length
  ex.
  [[5] [1] [1 3] [1 2] [1 2 3] [1 4] [4] [2] [2 3] [3]] => [[1 2 3] [1 3] [1 2] [1 4] [2 3] [5] [1] [4] [2] [3]]
  "
  [vec2d]
  (into [] (sort-by
            (comp (frequencies (map count vec2d)) count)
            vec2d)))

(defn additional-dimension
  [n elements]
  (mapcat into
          (for [element elements]
            (for [i (drop 1 (range (inc n)))]
              (conj element i)))))

(defn get-initial-elements
  [r]
  (into [] (for [i (drop 1 (range (inc r)))]
             [i])))

;; prob018_PERM_0.clj
(defn get-permutations
  [r] ;; r: repeat
  (loop [cnt 0
         perms (get-initial-elements r)]
    (if (< cnt (dec r))  ;; (dec ) due initial elements already counting
      (recur
       (inc cnt)
       (additional-dimension r perms))
      (remove nil? (map #(when (= r (count (distinct %))) %) perms)))))

;; prob022_LEXF_1.clj
(defn iter-product
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
             (for [i iters
                   j symbols]
               (conj i j)))
      iters)))

(defn byte-array>file
  [byte-array file-name]
  (with-open [w (cjio/output-stream file-name)]
    (.write w byte-array)))
