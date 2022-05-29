(ns rosalind-clojure.prob021-SPLC-0
  (:require [rosalind-clojure.gentools :as gt]
            [clojure.string :as cstr])
  (:gen-class))

;; https://rosalind.info/problems/splc/

(defn ^:private remove-introns-from-dna-string
  "Removes the passed introns and recombines the remaining DNA string
    dna-string : STR : STR of nucleobases representing a DNA string
    introns : VEC[MAP{} MAP{} ..] : VEC of MAPs representing FASTA format maps {:label STR :string STR} corresponding to introns
    RETURN : STR : STR of nucleobases representing a DNA string
  ex.
    ATGGTCTACATAGCTGACAAACAGCACGTAGCAATCGGTCGAATCTCGAGAGGCATATGGTCACATGATCGGTCGAGCGTGTTTCAAAGTTTGCGCCTAG ({:label Rosalind_12, :string ATCGGTCGAA} {:label Rosalind_15, :string ATCGGTCGAGCGTGT}) => ATGGTCTACATAGCTGACAAACAGCACGTAGCATCTCGAGAGGCATATGGTCACATGTTCAAAGTTTGCGCCTAG"
  [dna-string introns]
  (loop [i 0
         nu-dna-string dna-string]
    (if (< i (count introns))
      (recur (inc i)
             (cstr/replace nu-dna-string (:string (nth introns i)) ""))
      nu-dna-string)))

(defn ^:private proc-fasta-maps
  "Process the fasta-maps into a single DNA string with introns removed then converted to a Protein with M for Starts and Stop removed. 
    fasta-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs representing FASTA format maps {:label STR :string STR}
    RETURN : STR : STR representing a Protein
  ex.
    [{:label Rosalind_10, :string ATGGTCTACATAGCTGACAAACAGCACGTAGCAATCGGTCGAATCTCGAGAGGCATATGGTCACATGATCGGTCGAGCGTGTTTCAAAGTTTGCGCCTAG} {:label Rosalind_12, :string ATCGGTCGAA} {:label Rosalind_15, :string ATCGGTCGAGCGTGT}] => MVYIADKQHVASREAYGHMFKVCA
  "
  [fasta-maps]
  (let [dna-string (:string (first fasta-maps))
        introns (drop 1 fasta-maps)
        protein-string (-> (gt/get-protein-from-dna-string (remove-introns-from-dna-string dna-string introns))
                           (cstr/replace "Start" "M")
                           (cstr/replace "Stop" ""))]
    protein-string))

(defn ^:private output
  "Output in the expected format
    outs : STR : STR representing a Protein"
  [outs]
  (let [rosalind-sample-output "MVYIADKQHVASREAYGHMFKVCA"]
    (println "\nSample Output:")
    (println outs)
    (println "\nRosalind Sample Output:")
    (println rosalind-sample-output)))

(def sample-dataset "
>Rosalind_10
ATGGTCTACATAGCTGACAAACAGCACGTAGCAATCGGTCGAATCTCGAGAGGCATATGGTCACATGATCGGTCGAGCGTGTTTCAAAGTTTGCGCCTAG
>Rosalind_12
ATCGGTCGAA
>Rosalind_15
ATCGGTCGAGCGTGT")

(defn onit
  []
  (println "Sample Dataset:")
  (println sample-dataset)
  (-> sample-dataset (gt/collect-from-fasta) (proc-fasta-maps) (output)))
;; $ lein run 21 
