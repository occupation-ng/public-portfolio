(ns rosalind-clojure.prob020-REVP-0
  (:require [rosalind-clojure.gentools :as gt]
            [clojure.string :as cstr])
  (:gen-class))

;; https://rosalind.info/problems/revp/

(defn reverse-complement ;; STR s in; VEC[LITERAL_STR\,LITERAL_STR] out
  "Reverse complement of a DNA String
   String in, vec of string literals out
     s : STR : DNA String
     RETURN : VEC[STR_LITERAL,STR_LITERAL,..]
  ie. 'ATGC'=>[T A C G]"
  [s]
  (let [str-seq (seq s)]
    (loop [_s []
           ci 0]
      (if (< ci (count str-seq))
        (let [ch (nth str-seq ci)
              revp_ch (cond
                        (= ch \A)
                        \T
                        (= ch \T)
                        \A
                        (= ch \G)
                        \C
                        (= ch \C)
                        \G)]
          (recur (conj _s revp_ch)
                 (inc ci)))
        _s))))

(defn update-rev-pals
  "Updates reverse complement palindromes by adding one if found between the start and end values
    substring-length-start : INT : min substring length
    substring-length-end : INT : max substring length, check to break (loop )
    str-vec : VEC[STR_LITERAL STR_LITERAL ..] : vector of string literals representing the DNA string
    start : INT : start index to begin checking for reverse complement palindromes
    rev-palindromes : VEC[VEC[INT INT] VEC[INT INT]] : vector containing all known reverse complement palindromes as VEC[SUBSTRING_START_INDEX SUBSTRING_LENGTH]
  ie.
    4 13 [A G T T A C G T A C G C C C A G A T A T A C G T A] 3 [] => [[4 6]]"
  [substring-length-start substring-length-end str-vec start rev-palindromes]
  (loop [l substring-length-start
         from-start-rev-pals rev-palindromes]
    (if (< l substring-length-end)
      (let [as-str (cstr/join "" str-vec)
            end (if (<= (+ start l) (count str-vec))
                  (+ start l)
                  0)
            subs-str (if (not (= 0 end)) ;; (subs STRING START END) breaks if END is greater than length of STRING
                       (subs as-str start end) ;; (subs _ START END) START inclusive END exclusive
                       "")
            subs-rev (if (not (= "" subs-str)) ;; cascading failure
                       (cstr/join "" (reverse (reverse-complement subs-str)))
                       "")]
        (if (not (= "" subs-rev)) ;; cascading failure
          (recur (inc l)
                 (if (= subs-str subs-rev) ;; if (= ) than is palindrome
                   (conj from-start-rev-pals [(inc start) l])  ;; (inc start) for 1-index 
                   from-start-rev-pals))
          (recur (inc l)
                 from-start-rev-pals)))
      from-start-rev-pals)))

(defn reverse-palindromes
  "Find all reverse-complement palindromes in DNA string
    str-vec : VEC[STR_LITERAL STR_LITERAL ..] 
    RETURN : VEC[VEC[INT INT] VEC[INT INT] ..] : VEC of VECs of INTs, [[SUBSTRING_START_INDEX SUBSTRING_LENGTH]]
  ie. [T C A A T G C A T G C G G G T C T A T A T G C A T] => [[4 6] [5 4] [6 6] [7 4] [17 4] [18 4] [20 6] [21 4]]"
  [str-vec]
  (loop [start 0
         rev-palindromes []]
    (if (< start (count str-vec))
;; from 4 to 13, due:
;;         "Each of these structures separates from the restriction enzyme in order to bind to and cut one strand of the phage DNA molecule; 
;;           both substructures are pre-programmed with the same target string containing 4 to 12 nucleotides to search for within the phage DNA."
      (let [substring-length-start 4 ;; inclusive
            substring-length-end 13  ;; exclusive
            updated-rev-pals (update-rev-pals substring-length-start substring-length-end str-vec start rev-palindromes)]
        (recur (inc start)
               updated-rev-pals))
      rev-palindromes)))

(defn get-fasta-string
  [plaintext]
  (let [fasta-dada (gt/collect-from-fasta plaintext)
        first-fasta-str (:string (first fasta-dada))]
    first-fasta-str))

(defn ^:private output
  "Output in expected format
    outs : VEC[VEC[INT INT] VEC[INT INT] ..] : VEC of VECs of 2 INTS
  ex. 
    [[1 2] [3 4]] =>
    1 2
    3 4"
  [outs]
  (println "\nSample Output:")
  (apply print (for [ea outs] (str "\t" (first ea) " " (second ea) "\n"))))

(def sample-dataset "
>Rosalind_24
TCAATGCATGCGGGTCTATATGCAT")

(defn onit []
  (println "Sample Dataset:")
  (println sample-dataset)
  (-> sample-dataset (get-fasta-string) (reverse-complement) (reverse-palindromes) (output)))

(comment "BIBLIO
  https://clojuredocs.org/clojure.core/println
  https://clojuredocs.org/clojure.core/
  https://clojuredocs.org/clojure.core/apply
  https://clojuredocs.org/clojure.core/count
  https://clojuredocs.org/clojure.core/def
  https://clojuredocs.org/clojure.core/defn
  https://clojuredocs.org/clojure.core/first
  https://clojuredocs.org/clojure.core/for
  https://clojuredocs.org/clojure.core/inc
  https://clojuredocs.org/clojure.core/loop
  https://clojuredocs.org/clojure.core/nth
  https://clojuredocs.org/clojure.core/print
  https://clojuredocs.org/clojure.core/reverse
  https://clojuredocs.org/clojure.core/seq
  https://clojuredocs.org/clojure.core/second
  https://clojuredocs.org/clojure.core/str
  https://clojuredocs.org/clojure.core/subs
  https://clojuredocs.org/clojure.string/join")
;; lein run 20 
