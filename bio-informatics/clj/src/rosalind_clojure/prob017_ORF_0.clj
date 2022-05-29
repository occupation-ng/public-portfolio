(ns rosalind-clojure.prob017-ORF-0
  (:require [rosalind-clojure.gentools :as gt]
            [clojure.string :as cstr])
  (:gen-class))

;; https://rosalind.info/problems/orf/

(comment "NOTES

# S: Start, s:Stop
#            1         2         3         4         5         6         7         8
#  0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567980123456
s='AGCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG'
#S     ATG                 ATG   ATG
#S     S0_                 S1_   S2_
#s        s0_                                                        s12
#s        TAG                                                        TAA
#r=reverse_complement(s)
#            1         2         3         4         5         6         7         8
#  0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567980123456
r='CTGAGATGCTACTCGGATCATTCAGGCTTATTCCAAAAGAGACTCTAATCCAAGTCGCGGGGTCATCCCCATGTAACCTGAGTTAGCTACATGGCT'
#S      ATG                                                              ATG
#S      S0_                                                              S1_
#s                                                                          s1_       s0_
#s                                                                          TTA       TTA

    pairs of Start and Stop codons across all(6) reference frames
        3 from the input string         # S0_,s0_:[4,7], S1_,s1_:[24,66], S2_,s2_:[30,66]
            sRF0 [[24, 66], [30, 66]]
            sRF1 [[4, 7]]
            sRF2 []
        3 from the reverse complement   # S0_,s0_:[5,83], S1_,s1_:[70,73]
            rRF0 []
            rRF1 [[70, 73]]
            rRF2 [[5, 83]]
")

(defn ^:private offset-pairs
  [pairs offset]
  (for [pair pairs]
    [(+ offset (first pair)) (+ offset (second pair))]))

(defn ^:private each-element-with-index-RO  ;; vec of elements in, vec of elements out, read only from other elements
  [elements fn-to-call supplemental-dada]
  (loop [li 0
         return-list []]
    (if (< li (count elements))
      (recur (inc li)
             (conj return-list
                   (fn-to-call
                    (nth elements li)
                    li
                    supplemental-dada)))
      return-list)))

(defn ^:private check-index
  "(* 3 i): codon index is the first character in a 3 character set
    ie. CAGTXXUXX 
      C:0 (0*3) 
      T:3 (1*3)
      U:6 (2*3) .."
  [el i dada]
  (let [protein-codons (first dada)
        protein (second dada)]
    (when (and (contains? protein-codons (keyword el)) (= protein ((keyword el) protein-codons))) (* 3 i))))

(defn ^:private get-all-protein-indices
  [nucleicacid-string _na protein]
;; (map cstr/join (partition 3 (seq "123456789"))) => ("123" "456" "789")
  (let [protein-codons (if (= _na "dna")
                         (gt/get-dna-map-codon-to-protein)
                         (gt/get-rna-map-codon-to-protein))
        possible-codons (map cstr/join (partition 3 (seq nucleicacid-string)))]
    (remove nil?
            (each-element-with-index-RO possible-codons check-index [protein-codons protein]))))

(defn ^:private get-open-reading-frame-pairs ;; reading-frame STR"" in, 
  [reading-frame]
  (let [starts (get-all-protein-indices reading-frame "dna" "Start")
        stops (get-all-protein-indices reading-frame "dna" "Stop")
        pairs (remove nil?
                      (loop [i 0
                             pairs []]
                        (if (< i (count starts))
                          (recur (inc i)
                                 (concat pairs (loop [j 0
                                                      pairs []]
                                                 (if (< j (count stops))
                                                   (let [start (nth starts i)
                                                         stop (nth stops j)]
                                                     (if (< (+ start 2) stop)
                                                       (recur
                                                        (count stops)
                                                        (conj pairs [start stop]))
                                                       (recur
                                                        (inc j)
                                                        pairs)))
                                                   pairs))))
                          pairs)))]
    pairs))

(comment "
    RF AGCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG
STARTS [24, 30, 75]
 STOPS [66, 72]
 PAIRS [[24, 66], [30, 66]]

    RF GCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG
STARTS [3]
 STOPS [6, 30, 48, 75, 84]
 PAIRS [[3, 6]]

    RF CCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG
STARTS []
 STOPS [9]
 PAIRS []

REVERSE COMPLEMENT
    RF CTGAGATGCTACTCGGATCATTCAGGCTTATTCCAAAAGAGACTCTAATCCAAGTCGCGGGGTCATCCCCATGTAACCTGAGTTAGCTACATGGCT
STARTS [90]
 STOPS [45, 78]
 PAIRS []

    RF TGAGATGCTACTCGGATCATTCAGGCTTATTCCAAAAGAGACTCTAATCCAAGTCGCGGGGTCATCCCCATGTAACCTGAGTTAGCTACATGGCT
STARTS [69]
 STOPS [0, 72]
 PAIRS [[69, 72]]

    RF GAGATGCTACTCGGATCATTCAGGCTTATTCCAAAAGAGACTCTAATCCAAGTCGCGGGGTCATCCCCATGTAACCTGAGTTAGCTACATGGCT
STARTS [3]
 STOPS [81]
 PAIRS [[3, 81]]
")

;(let [outs ()] (println outs)) (System/exit 0)  ;; DEV

(defn ^:private get-reading-frames
  [fasta-string]
  (let [reading-frame-A__ fasta-string         ;; intentionally verbose for clarity
        reading-frame-_B_ (subs fasta-string 1)
        reading-frame-__C (subs fasta-string 2)]
    (remove empty? (concat
                    (offset-pairs (get-open-reading-frame-pairs reading-frame-A__) 0)
                    (offset-pairs (get-open-reading-frame-pairs reading-frame-_B_) 1)
                    (offset-pairs (get-open-reading-frame-pairs reading-frame-__C) 2)))))

(defn ^:private get-protein-string
  [nucleotide-string]
  (cstr/join
   (for [codon (map cstr/join (partition 3 (seq nucleotide-string)))]
     (let [protein ((keyword codon) (gt/get-dna-map-codon-to-protein))]
       (if (= protein "Start")
         "M"
         protein)))))

(defn ^:private get-open-reading-frames-as-protein
  [fasta-string]
  (let [reading-frames (get-reading-frames fasta-string)]
    (for [pair reading-frames]
      (get-protein-string (subs fasta-string (first pair) (second pair))))))

(defn ^:private proc-fasta-maps
  [fasta-maps]
  (map #(distinct
         (concat
          (get-open-reading-frames-as-protein (:string %))
          (get-open-reading-frames-as-protein (gt/get-reverse-complement
                                               (:string %))))) fasta-maps))

(defn ^:private output
  [dada]
  (doall (map println (first dada))))

(def sample-dataset ">Rosalind_99
AGCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG")

(defn onit []
  (println sample-dataset "\n")
  (-> sample-dataset (gt/collect-from-fasta) (proc-fasta-maps) (output)))

(comment "BIBLIO
  https://clojuredocs.org/clojure.core/inc
  https://clojuredocs.org/clojure.core/println
  https://clojuredocs.org/clojure.core/partition
  https://clojuredocs.org/clojure.core/map
  https://clojuredocs.org/clojure.core/subs")
;; lein run 17
