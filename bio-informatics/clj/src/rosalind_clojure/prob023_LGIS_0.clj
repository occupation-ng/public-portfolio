(ns rosalind-clojure.prob023-LGIS-0
  (:require [clojure.string :as cstr])
  (:gen-class))

;; https://rosalind.info/problems/lgis/

(comment "NOTES
  Given: A positive integer n≤10000 followed by a permutation π of length n
  Return: A longest increasing subsequence of π, followed by a longest decreasing subsequence of π.
  Sample Input:
  5 1 4 2 3
  Sample Output:
  1 2 3
  5 4 2

  algo
    for each number in the sequence
    store both a copy of original every state
        and a copy of original every state appended with current number
        and a new list of only the new number

    inp=[5,1,4,2,3]
    ;; 5
    every==[[5]]
    ;; 1
    every==[[5] [5 1] [1]]
    ;; 4
    every==[[5] [5 1] [1] [5 4] [5 1 4] [1 4] [4]]
    ...

    once complete, pass through every
        check for ascending and descending
    sort the asc and dsc lists
        grab last element from each for output")

(defn ^:private get-every
  "Get every possible left to right substring of a vector of strings
    str-vec : VEC[STR STR ..] : VEC of STRs representing the values to build all left to right substrings of any length
    RETURN : VEC[VEC[INT INT ..] ..] : VEC of VECs of INTs, representing every left to right sequence of values from str-vec
  ex.
    [5 1 4] => [[5] [5 4] [5 1] [5 1 4] [1] [1 4] [4]]"
  [str-vec]
  (loop [i 0
         every []]
    (if (< i (count str-vec))
      (let [ch (nth str-vec i)
            nu-every (if (= [] every)
                       []
                       (into [] (apply concat
                                       (for [each every]
                                         (concat [each] [(conj each ch)])))))]
        (recur (inc i)
               (conj nu-every [ch])))
      every)))

(defn ^:private get-asc-dsc
  "Get all ascending and descending vectors in every
    every : VEC[VEC[INT INT ..] ..] : VEC of VECs of INTs, representing every left to right sequence of values from the input
    RETURN : VEC[VEC[VEC[INT INT ..] ..] VEC[VEC[INT INT..] ..]] : VEC of 2 VECs of VECs of INTs, first VEC is ascending vector values, second VEC is descending vector values
  ex.
    [[5] [5 4] [5 1] [5 1 4] [1] [1 4] [4]]  => [[[5] [1] [1 4] [4]] [[5] [5 4] [5 1] [1] [4]]]"
  [every]
  (loop [ei 0
         asc []
         dsc []]
    (if (< ei (count every))
      (let [each (nth every ei)
            [q-asc q-dsc] (loop [eli 0
                                 prev-asc -10000000 ;; ASSUME, arbitrarily small first value to check subsequent as ascending
                                 prev-dsc  10000000 ;; ASSUME, arbitrarily large first value to check subsequent as descending 
                                 q-asc true
                                 q-dsc true]
                            (if (< eli (count each))
                              (let [el (Integer/parseInt (nth each eli))]
                                (recur (inc eli)
                                       (if (> el prev-asc)
                                         el
                                         prev-asc)
                                       (if (< el prev-dsc)
                                         el
                                         prev-dsc)
                                       (if (and q-asc
                                                (> el prev-asc))
                                         true
                                         false)
                                       (if (and q-dsc
                                                (< el prev-dsc))
                                         true
                                         false)))
                              [q-asc q-dsc]))]
        (recur (inc ei)
               (if q-asc
                 (conj asc each)
                 asc)
               (if q-dsc
                 (conj dsc each)
                 dsc)))
      [asc dsc])))

(defn ^:private subvec-len-sort
  "Sort vector by subvector lengths
    vecs : VEC[VEC[INT INT ..] ..] : VEC of VECs of INTs
    RETURN : VEC[VEC[INT INT ..] VEC[INT ..] ..] : the same vectors but sorted by the length
  ex.
  [[5] [1] [1 3] [1 2] [1 2 3] [1 4] [4] [2] [2 3] [3]] => [[1 2 3] [1 3] [1 2] [1 4] [2 3] [5] [1] [4] [2] [3]]
  "
  [vecs]
  (into [] (sort-by
            (comp (frequencies (map count vecs)) count)
            vecs)))

(defn ^:private get-ascending-n-descending
  "Get ascending and descending left to right sequences as vectors sorted by length
    ins : VEC[STR0 STR1] : STR0 is string of INT representing length of STR1, STR1 is a string of INTs '5 1 4 2'
    RETURN : VEC[VEC[VEC[INT INT ..] ..] VEC[VEC[INT INT..] ..]] : VEC of 2 VECs of VECs of INTs, first VEC is ascending vector values, second VEC is descending vector values each sorted by subvec length
  ex.
    [3 '5 1 4'] => [[[1 4] [5] [1] [4]] [[5 4] [5 1] [5] [1] [4]]]"
  [ins]
  (let [;str-cnt (Integer/parseInt (first ins)) ;; part of sample-dataset input, but unnecessary
        str-vec (cstr/split (second ins) #" ")
        every (get-every str-vec)
        [asc dsc] (get-asc-dsc every)]
    [(subvec-len-sort asc) (subvec-len-sort dsc)]))

(defn ^:private proc-input
  "Process the input
    inp : sample-dataset : plaintext input
    RETURN : VEC[STR0 STR1] : STR0 is string of INT representing length of STR1, STR1 is a string of INTs '5 1 4 2'
  ex.
   '\n5\n5 1 4 2 3\n'=> ['5' '5 1 4 2 3']"
  [inp]
  (vec (let [lines (cstr/split inp #"\n")]
         (remove nil? (for [line lines]
                        (when (not= "" (cstr/trim line))
                          line))))))

(defn ^:private output
  "Output in the expected format
    outs : VEC[VEC[VEC[INT INT ..] ..] VEC[VEC[INT INT..] ..]] : VEC of 2 VECs of VECs of INTs, first VEC is ascending vector values, second VEC is descending vector values
  ex.
    [[[1 4] [5] [1] [4]] [[5 4] [5 1] [5] [1] [4]]] =>
      1 4
      5 4"
  [outs]
  (println "\nSample Output:")
  (let [asc (first outs)
        dsc (second outs)
        a-longest-ascending (cstr/join " " (first asc))
        a-longest-descending (cstr/join " " (first dsc))]
    (println a-longest-ascending)
    (println a-longest-descending)))

(def sample-dataset "
5
5 1 4 2 3")

(defn onit
  []
  (println "Sample Dataset:")
  (println sample-dataset)
  (-> sample-dataset (proc-input) (get-ascending-n-descending) (output)))

;; $ lein run 23 
