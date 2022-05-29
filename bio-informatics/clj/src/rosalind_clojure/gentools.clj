(ns rosalind-clojure.gentools
  (:require [clojure.string :as cstr])
  (:gen-class))

(defn get-rna-map-codon-to-protein
  "https://rosalind.info/glossary/rna-codon-table/"
  []
  {:UUU
   "F"
   :CUU
   "L"
   :AUU
   "I"
   :GUU
   "V"
   :UUC
   "F"
   :CUC
   "L"
   :AUC
   "I"
   :GUC
   "V"
   :UUA
   "L"
   :CUA
   "L"
   :AUA
   "I"
   :GUA
   "V"
   :UUG
   "L"
   :CUG
   "L"
   :AUG
   "Start"
   :GUG
   "V"
   :UCU
   "S"
   :CCU
   "P"
   :ACU
   "U"
   :GCU
   "A"
   :UCC
   "S"
   :CCC
   "P"
   :ACC
   "T"
   :GCC
   "A"
   :UCA
   "S"
   :CCA
   "P"
   :ACA
   "U"
   :GCA
   "A"
   :UCG
   "S"
   :CCG
   "P"
   :ACG
   "U"
   :GCG
   "A"
   :UAU
   "Y"
   :CAU
   "H"
   :AAU
   "N"
   :GAU
   "D"
   :UAC
   "Y"
   :CAC
   "H"
   :AAC
   "N"
   :GAC
   "D"
   :UAA
   "Stop"
   :CAA
   "Q"
   :AAA
   "K"
   :GAA
   "E"
   :UAG
   "Stop"
   :CAG
   "Q"
   :AAG
   "K"
   :GAG
   "E"
   :UGU
   "C"
   :CGU
   "R"
   :AGU
   "S"
   :GGU
   "G"
   :UGC
   "C"
   :CGC
   "R"
   :AGC
   "S"
   :GGC
   "G"
   :UGA
   "Stop"
   :CGA
   "R"
   :AGA
   "R"
   :GGA
   "G"
   :UGG
   "W"
   :CGG
   "R"
   :AGG
   "R"
   :GGG
   "G"})

(defn get-rna-map-protein-to-codon
  "https://rosalind.info/glossary/rna-codon-table/"
  []
  {:F
   ["UUU" "UUC"]
   :L
   ["CUU" "CUC" "UUA" "CUA" "UUG" "CUG"]
   :I
   ["AUU" "AUC" "AUA"]
   :V
   ["GUU" "GUC" "GUA" "GUG"]
   :M
   ["AUG"]
   :S
   ["UCU" "UCC" "UCA" "UCG" "AGU" "AGC"]
   :P
   ["CCU" "CCC" "CCA" "CCG"]
   :T
   ["ACU" "ACC" "ACA" "ACG"]
   :A
   ["GCU" "GCC" "GCA" "GCG"]
   :Y
   ["UAU" "UAC"]
   :H
   ["CAU" "CAC"]
   :N
   ["AAU" "AAC"]
   :D
   ["GAU" "GAC"]
   :Stop
   ["UAA" "UAG" "UGA"]
   :Q
   ["CAA" "CAG"]
   :K
   ["AAA" "AAG"]
   :E
   ["GAA" "GAG"]
   :C
   ["UGU" "UGC"]
   :R
   ["CGU" "CGC" "CGA" "AGA" "CGG" "AGG"]
   :G
   ["GGU" "GGC" "GGA" "GGG"]
   :W
   ["UGG"]
   :Start
   ["AUG"]})

(defn get-dna-map-codon-to-protein
  "https://rosalind.info/glossary/dna-codon-table/"
  []
  {:TTT
   "F"
   :CTT
   "L"
   :ATT
   "I"
   :GTT
   "V"
   :TTC
   "F"
   :CTC
   "L"
   :ATC
   "I"
   :GTC
   "V"
   :TTA
   "L"
   :CTA
   "L"
   :ATA
   "I"
   :GTA
   "V"
   :TTG
   "L"
   :CTG
   "L"
   :ATG
   "Start"
   :GTG
   "V"
   :TCT
   "S"
   :CCT
   "P"
   :ACT
   "T"
   :GCT
   "A"
   :TCC
   "S"
   :CCC
   "P"
   :ACC
   "T"
   :GCC
   "A"
   :TCA
   "S"
   :CCA
   "P"
   :ACA
   "T"
   :GCA
   "A"
   :TCG
   "S"
   :CCG
   "P"
   :ACG
   "T"
   :GCG
   "A"
   :TAT
   "Y"
   :CAT
   "H"
   :AAT
   "N"
   :GAT
   "D"
   :TAC
   "Y"
   :CAC
   "H"
   :AAC
   "N"
   :GAC
   "D"
   :TAA
   "Stop"
   :CAA
   "Q"
   :AAA
   "K"
   :GAA
   "E"
   :TAG
   "Stop"
   :CAG
   "Q"
   :AAG
   "K"
   :GAG
   "E"
   :TGT
   "C"
   :CGT
   "R"
   :AGT
   "S"
   :GGT
   "G"
   :TGC
   "C"
   :CGC
   "R"
   :AGC
   "S"
   :GGC
   "G"
   :TGA
   "Stop"
   :CGA
   "R"
   :AGA
   "R"
   :GGA
   "G"
   :TGG
   "W"
   :CGG
   "R"
   :AGG
   "R"
   :GGG
   "G"})

(defn get-dna-map-protein-to-codon []
  {:F
   ["TTT" "TTC"]
   :L
   ["CTT" "CTC" "TTA" "CTA" "TTG" "CTG"]
   :I
   ["ATT" "ATC" "ATA"]
   :V
   ["GTT" "GTC" "GTA" "GTG"]
   :M
   ["ATG"]
   :S
   ["TCT" "TCC" "TCA" "TCG" "AGT" "AGC"]
   :P
   ["CCT" "CCC" "CCA" "CCG"]
   :T
   ["ACT" "ACC" "ACA" "ACG"]
   :A
   ["GCT" "GCC" "GCA" "GCG"]
   :Y
   ["TAT" "TAC"]
   :H
   ["CAT" "CAC"]
   :N
   ["AAT" "AAC"]
   :D
   ["GAT" "GAC"]
   :Stop
   ["TAA" "TAG" "TGA"]
   :Q
   ["CAA" "CAG"]
   :K
   ["AAA" "AAG"]
   :E
   ["GAA" "GAG"]
   :C
   ["TGT" "TGC"]
   :R
   ["CGT" "CGC" "CGA" "AGA" "CGG" "AGG"]
   :G
   ["GGT" "GGC" "GGA" "GGG"]
   :W
   ["TGG"]
   :Start
   ["ATG"]})

(defn get-reverse-complement
  [fasta-string]
  (cstr/join (for [ch (reverse (seq fasta-string))]
               (cond
                 (= ch \A) "T"
                 (= ch \T) "A"
                 (= ch \C) "G"
                 (= ch \G) "C"))))

(defn get-protein-from-dna-string
  "Transcripe a DNA string to a Protein string
  Leaves 'Start' and 'Stop' in place of respective codons, can do (-> protein-string (cstr/replace 'Start' 'M')  (cstr/replace 'Stop' ''))
    dna-string : STR : STR of nucleobases representing a DNA string of A,T,C and G
    RETURN : STR : STR of codons transcribed as a Protein
  ex.
  ATGGTCTACATAGCTGACAAACAGCACGTAGCATCTCGAGAGGCATATGGTCACATGTTCAAAGTTTGCGCCTAG => StartVYIADKQHVASREAYGHStartFKVCAStop"
  [dna-string]
  (let [dna-codon-to-protein-map (get-dna-map-codon-to-protein)
        codons (->> dna-string (partition-all 3) (map (partial apply str)))]
    (apply str
           (for [codon codons]
             ((keyword (cstr/upper-case codon)) dna-codon-to-protein-map)))))

(defn collect-from-fasta
  "Takes in FASTA style input and returns a collection of FASTA maps 
    plaintext: STR : plaintext FASTA style input '>STR \n STR'
    RETURN : dada : LIST[MAP{},MAP{},..] : LIST of fasta MAPs{:label STR :string STR}"
  [plaintext]
  (let [lines (cstr/split plaintext #"\n")
        template-fasta-map {:label "" :string ""}]
    (loop [li 0
           fasta-map template-fasta-map
           dada []]
      (if (< li (count lines))
        (let [line (cstr/trim (get lines li))]
          (if (not (= "" line))
            (cond
              (and (= \> (nth line 0)) (= "" (:label fasta-map))) ;; if first char is '>' and :label is empty
              (recur (inc li)
                     (assoc fasta-map :label (subs line 1))   ;; (subs 1 _) removes first character, ">"
                     dada)
              (and (= \> (nth line 0)) (not (= "" (:label fasta-map)))) ;; if first char is '>' and :label is already set
              (recur (inc li)
                     (assoc template-fasta-map :label (subs line 1))   ;; (subs 1 _) removes first character, ">"
                     (conj dada fasta-map))
              (and (not (= \> (nth line 0))) (not (= "" (:label fasta-map)))) ;; if first char is other than '>' and :label is already set
              (recur (inc li)
                     (assoc fasta-map :string (cstr/join [(:string fasta-map) line])) ;; empty lines innocuous
                     dada)
              :else
              (recur (inc li)
                     fasta-map
                     dada))
            (recur (inc li)
                   fasta-map
                   dada)))
        (conj dada fasta-map))))) ;; append the final FASTA entry

(comment "BIBLIO
  https://clojuredocs.org/clojure.core/assoc
  https://clojuredocs.org/clojure.core/not 
  https://clojuredocs.org/clojure.core/nth 
  https://clojuredocs.org/clojure.core/and 
  https://clojuredocs.org/clojure.core/count 
  https://clojuredocs.org/clojure.core/conj 
  https://clojuredocs.org/clojure.core/subs 
  https://clojuredocs.org/clojure.core/get
  https://clojuredocs.org/clojure.core/inc
  https://clojuredocs.org/clojure.core/println
  https://clojuredocs.org/clojure.core/loop
  https://clojuredocs.org/clojure.core/if
  https://clojuredocs.org/clojure.core/cond
  https://clojuredocs.org/clojure.core/<
  https://clojuredocs.org/clojure.core/=
  https://clojuredocs.org/clojure.core/subs")
;; lein run

