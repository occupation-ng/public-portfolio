(ns rosalind-clojure.prob024-LONG-0
  (:require [rosalind-clojure.gentools :as gt]
            [rosalind-clojure.utils :as utils]
            [clojure.string :as cstr])
  (:gen-class))

;; https://rosalind.info/problems/long/

(defn ^:private get-full-match
  "Return the full match from the first matching character at index i
    vec-super-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current superstring
    vec-fasta-string : VEC[STR STR STR ..] : VEC of STR literal charactersrepresenting the current FASTA string
    i : INT : index of current position in the super-string
    RETURN : VEC[VEC[INT INT STR] ..] : VEC of VECs of INT, of i, INT of di, STR literal matched character at that position
  ex.
    [A T T A G A C C T G] [C C T G C C G G A A] 3 => []
    [A C T A G A C C T G] [C C T G C C G G A A] 1 => [[1 0 C]]
    [A T T A G A C C T G C C G G A A] [A G A C C T G C C G] 3 => [[3 0 A] [3 1 G] [3 2 A] [3 3 C] [3 4 C] [3 5 T] [3 6 G] [3 7 C] [3 8 C] [3 9 G]]"
  [vec-super-string vec-fasta-string i]
  (loop [di 0
         full-match []]
    (if (< di (- (count vec-super-string) i))
      (let [eldi (nth vec-super-string (+ i di))
            eldj (when (< di (count vec-fasta-string))
                   (nth vec-fasta-string di))]
        (if (= eldi eldj)
          (recur (inc di)
                 (conj full-match [i di eldi]))
          (recur (count vec-super-string) ;; break
                 full-match)))
      full-match)))

(defn ^:private critical-match
  "The critical match is here defined as the match that is longest while also being either wholly encased or right most of superstring
    vec-super-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current superstring
    vec-fasta-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current FASTA string
    all-full-matches : VEC[VEC[INT INT STR] ..] : VEC of VECs of INT, of i, INT of di, STR literal matched character at that position
    RETURN : VEC[VEC[INT INT STR]..] : return the one full-match that satisfies the right most longest heuristic
  ex.
  ;; edge examples
    [A T T A G A C C T G] [C C T G C C G G A A] [[[6 0 C] [6 1 C] [6 2 T] [6 3 G]] [[7 0 C]]] => [[6 0 C] [6 1 C] [6 2 T] [6 3 G]]
    [A T T A G A C C T G C C G G A A] [G C C G G A A T A C] [[[4 0 G]] [[9 0 G] [9 1 C] [9 2 C] [9 3 G] [9 4 G] [9 5 A] [9 6 A]] [[12 0 G]] [[13 0 G]]] => [[9 0 G] [9 1 C] [9 2 C] [9 3 G] [9 4 G] [9 5 A] [9 6 A]]
  ;; encased example
    [A T T A G A C C T G C C G G A A] [A G A C C T G C C G] [[[0 0 A]] [[3 0 A] [3 1 G] [3 2 A] [3 3 C] [3 4 C] [3 5 T] [3 6 G] [3 7 C] [3 8 C] [3 9 G]] [[5 0 A]] [[14 0 A]] [[15 0 A]]]y => [[3 0 A] [3 1 G] [3 2 A] [3 3 C] [3 4 C] [3 5 T] [3 6 G] [3 7 C] [3 8 C] [3 9 G]]"
  [vec-super-string vec-fasta-string all-full-matches]
  (let [critical-matches (into [] (filter
                                   #(or
                                     (= (count vec-fasta-string) (count %))                                     ;; fasta-string is enclosed in super-string
                                     (= (count vec-super-string) (inc (+ (first (last %)) (second (last %)))))) ;; fasta-string overhangs right edge of superstring
                                   all-full-matches))]
    (last (sort-by #(-> % first first) ;; [[4 0 G] [4 1 A]] -> first first => 4
                   (filter #(= (count (first (utils/sort-2d-by-len-hilo critical-matches))) (count %))
                           critical-matches)))))

(defn ^:private get-critical-match
  "Get the critical match from all matches between super-string and fasta-string
    vec-super-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current superstring
    vec-fasta-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current FASTA string
    RETURN : VEC[VEC[INT INT STR] ..] : VEC of VECs of INT, of i, INT of di, STR literal matched character at that position
  ex.
    [A T T A G A C C T G] [C C T G C C G G A A] => [[6 0 C] [6 1 C] [6 2 T] [6 3 G]]
    [A T T A G A C C T G C C G G A A] [G C C G G A A T A C] => [[9 0 G] [9 1 C] [9 2 C] [9 3 G] [9 4 G] [9 5 A] [9 6 A]]"
  [vec-super-string vec-fasta-string]
  (let [all-full-matches (into [] (remove nil?
                                          (for [i (range (count vec-super-string))] ;; walk the superstring
                                            (when (= (nth vec-super-string i) (first vec-fasta-string))
                                              (get-full-match vec-super-string vec-fasta-string i)))))]
    (critical-match vec-super-string vec-fasta-string all-full-matches)))

(defn ^:private search-super-string
  "Search super-string for matching vecuence with fasta-map string
  If a match is found, modify super-string and remove other string from other-fasta-maps list
  If unable to find a match return super-string unchanged and move (first other-fasta-maps) to last position of other-fasta-maps to be searched again after the others
    vec-super-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current superstring
    other-fasta-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs representing FASTA format maps {:label STR :string STR}
    RETURN : VEC[VEC[STR STR ..] VEC[MAP{} ..]] : VEC of VECs, first VEC of STR literal characters represents the superstring, second VEC of MAPs represents any remainding unmatchable strings
  ex.
    [A T T A G A C C T G] ({:label Rosalind_57, :string CCTGCCGGAA} {:label Rosalind_58, :string AGACCTGCCG} {:label Rosalind_59, :string GCCGGAATAC}) => [[A T T A G A C C T G C C G G A A] [{:label Rosalind_58, :string AGACCTGCCG} {:label Rosalind_59, :string GCCGGAATAC}]]
    [A T T A G A C C T G C C G G A A] [{:label Rosalind_58, :string AGACCTGCCG} {:label Rosalind_59, :string GCCGGAATAC}] => [[A T T A G A C C T G C C G G A A] [{:label Rosalind_59, :string GCCGGAATAC}]]"
  [vec-super-string other-fasta-maps]
  (let [vec-fasta-string (vec (:string (first other-fasta-maps)))
        full-match (get-critical-match vec-super-string vec-fasta-string)]
    (if (< 0 (count full-match)) ;; drop match, else move map to last position of other-maps list to be tried again after checking the others 
      [(apply conj vec-super-string (drop (count full-match) vec-fasta-string)) (vec (drop 1 other-fasta-maps))] ;; (apply conj (vec "hazzah") (drop 3 (vec "HAZZAH"))) => [h a z z a h Z A H]
      [vec-super-string (apply conj (vec (drop 1 other-fasta-maps)) [(first other-fasta-maps)])]))) ;; (apply conj (vec (drop 1 [{:a 0} {:b 1} {:c 2}])) [(first [{:a 0} {:b 1} {:c 2}])]) => [{:b 1} {:c 2} {:a 0}]

(defn ^:private proc-fasta-maps
  "Process the fasta-maps into a single super-string, and any remaining unmatchable strings
    fasta-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs representing FASTA format maps {:label STR :string STR}
    RETURN : VEC[VEC[STR STR ..] VEC[MAP{} ..]] : VEC of VECs, first VEC of STR literal characters represents the superstring, second VEC of MAPs represents any remainding unmatchable strings
  ex.
    [{:label Rosalind_56, :string ATTAGACCTG} {:label Rosalind_57, :string CCTGCCGGAA} {:label Rosalind_58, :string AGACCTGCCG} {:label Rosalind_59, :string GCCGGAATAC}] => [[A T T A G A C C T G C C G G A A T A C] []]
    [{:label Rosalind_56, :string ATTAGACCTG} {:label Rosalind_57, :string CCTGCCGGAA} {:label Rosalind_58, :string AGACCTGCCG} {:label Rosalind_59, :string GCCGGAATAC} {:label Test Unmatchable String, :string XYX}] => [[A T T A G A C C T G C C G G A A T A C] [{:label Test Unmatchable String, :string XYX}]]"
  [fasta-maps]
  (loop [vec-super-string (vec (:string (first fasta-maps)))
         other-fasta-maps (drop 1 fasta-maps)
         tries 0]
    (if (and (< 0 (count other-fasta-maps))      ;; other-fasta-maps empties on matches, break loop when empty
             (< tries (* 2 (count fasta-maps)))) ;; allows a break if some listed string lacks a match, (* 2 (count )) provides for additional shuffling, higher int more shuffling
      (let [[nu-vec-super-string nu-other-fasta-maps] (search-super-string vec-super-string other-fasta-maps)]
        (recur nu-vec-super-string
               nu-other-fasta-maps
               (inc tries)))
      (do
        (when (> tries (* (count fasta-maps)))
          (println "\nTRIES EXIT," tries "tries, unmatched strings")) ;; notify loop was broken while unable to match some strings
        [vec-super-string other-fasta-maps]))))

(defn ^:private output
  "Output in the expected format
    outs : VEC[VEC[STR STR ..] VEC[{} {} ..]] : VEC of VEC of STRs and VEC of MAPs, VEC of STRs is superstring, VEC of MAPs are unmatched strings
  ex. 
  [['A', 'T', 'T', 'A', 'G', 'A', 'C', 'C', 'T', 'G', 'C', 'C', 'G', 'G', 'A', 'A', 'T', 'A', 'C'], []]
ATTAGACCTGCCGGAATAC

  "
  [outs]
  (println "\nSample Output:")
  (println (cstr/join "" (first outs)))
  ;(println "Rosalind's Sample Output:")
  ;(println "ATTAGACCTGCCGGAATAC")
  (when (< 0 (count (second outs)))
    (println "unmatched strings:" (second outs))))

(def sample-dataset "
>Rosalind_56
ATTAGACCTG
>Rosalind_57
CCTGCCGGAA
>Rosalind_58
AGACCTGCCG
>Rosalind_59
GCCGGAATAC")
;>Test Unmatchable String 
;XYX")

(comment "NOTES
   Sample Dataset:
    0  ATTAGACCTG
    1  CCTGCCGGAA
    2  AGACCTGCCG
    3  GCCGGAATAC
   Sample Output: ATTAGACCTGCCGGAATAC
    0             ATTAGACCTG
    1                   CCTGCCGGAA
    2                AGACCTGCCG
    3                      GCCGGAATAC
  
  Rosalind notes the perfect fit example is contrived, stating 'in reality, researchers will not know the strand of DNA from which a given read has been sequenced.'
         So this algo is designed to account for this:
            0) if a match fails to be found, the unmatched fasta map gets moved to the end of the line to be tried again after more matches grow the superstring
                 this needs more work
                   should avoid using a 1 length edge before a later string has a longer match
                     as is, an unmatchable string with a single right edge match would append an incorrect string, breaking the superstring
                   could check all and proceed with the next best
                   could collect tree of all possible super strings
            1) there is a max tries hardcoded value that will cause a break in case any one string fails to ever match")

(defn onit
  []
  (println "Sample Dataset:")
  (println sample-dataset)
  (-> sample-dataset (gt/collect-from-fasta) (proc-fasta-maps) (output)))

;; $ lein run 24 
