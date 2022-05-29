(ns rosalind-clojure.prob019-PRTM-0
  (:gen-class))

;; https://rosalind.info/problems/prtm/

(def mass-of-monoisotopic-water-molecule 18.01056) ;; units in Da, or Daltons, ie, 1/12 C12

(def monoisotopic-mass-table
  {:A   71.03711
   :C   103.00919
   :D   115.02694
   :E   129.04259
   :F   147.06841
   :G   57.02146
   :H   137.05891
   :I   113.08406
   :K   128.09496
   :L   113.08406
   :M   131.04049
   :N   114.04293
   :P   97.05276
   :Q   128.05858
   :R   156.10111
   :S   87.03203
   :T   101.04768
   :V   99.06841
   :W   186.07931
   :Y   163.06333})
;; en.wikipedia.org/wiki/Proteinogenic_amino_acid#Mass_spectrometry

(defn ^:privatea get-total-weight
  [protein-string]
  (reduce + (for [protein (seq protein-string)]
              ((keyword (str protein)) monoisotopic-mass-table))))

(defn ^:private output
  [outs]
  (println (format "Output:%.3f" outs)))

(defn onit []
  (-> "SKADYEK" (get-total-weight) (output)))

(comment "BIBLIO
  https://clojuredocs.org/clojure.core/println
  https://clojuredocs.org/clojure.core/reduce
  https://clojuredocs.org/clojure.core/keyword
  https://clojuredocs.org/clojure.core/format
  https://clojuredocs.org/clojure.core/seq")
;; $ lein run 19
