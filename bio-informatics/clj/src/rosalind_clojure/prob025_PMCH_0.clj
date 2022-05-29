(ns rosalind-clojure.prob025-PMCH-0
  (:require [rosalind-clojure.gentools :as gt])
  (:gen-class))

;; https://rosalind.info/problems/pmch/

(comment "NOTES

         _1 due the graph theory of 'matching'
         
         grid matching is a subset of the graph's edges where each node on the edge is only allowed to touch one other edge outside the matching
    
    graph               M edges in Matching, o Omitted      Fails as M Matching due to ^ node       Alternate Matching with different edges
         .____.____.               ._o__.__o_.                  ._o__._M__.                              ._o__.__M_.
         |         |              M|         |M                M|    ^    |o                            o|         |o
         |         |               |         |                  |         |                              |         |
    .____.____.    .          .__o_.__o_.    .             .__o_.__o_.    .                         ._M__._o__.    .      

  nature of bonds allows us to simplify this calculation:
    bonds are only between two nucleobases restricting the dimension to 2
    loops are prohibited by the bond requirement of a second nucleobase
      and by the definition of a 'matching' as 'a set of edges without common vertices'
    there are a perfect number of each bond nucleobase, meaning we can assume all nucleobases are bonded for each permutation
      also implying a 'perfect match' meaning all possible nucleobases are bonded
      meaning the search space is all permutations of each respective nucleobase pairs
    if an A then only bond with U, and C with G, meaning calculation of number of permutations of bonds are independant between AU bonds and CG bonds
    A0U7 is the same bond as U7A0 meaning we only have to look at half of all possible permutations
       only looking at bonds with an A or C on the left effectively halves this space
       allowing us to only calculate permutations of As and Cs then multiplying them together to find the number of all permuatations of the bonds

  permutations:
      'The number of permutations of n distinct objects is n factorial, usually written as n!, 
         which means the product of all positive integers less than or equal to n.'
  https://en.wikipedia.org/wiki/Permutation  ")

(defn factorial
  "Calculate the factorial function: n! == 3! == 3*2*1 == 6; used to calculate permutations
    n : INT : the number to calculate its factorial
    RETURN : INT : the factorial of the number passed
  ex.
    0 => 1
    1 => 1
    3 => 6"
  [n]
  (if (or (= 0 n)
          (= 1 n))
    1
    (* n (factorial (dec n)))))

(defn ^:private proc-fasta-map
  "Process the fasta-maps to determine the number of perfect matchings
    fasta-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs representing FASTA format maps {:label STR :string STR}
    RETURN : INT : number of matchings 
  ex.
    [{:label Rosalind_23, :string AGCUAGUCAU}] => 12"
  [fasta-map]
  (let [vec-string (vec (:string (first fasta-map)))
        freqs (frequencies vec-string)]
    (* (factorial (get freqs \A)) (factorial (get freqs \C)))))

(defn ^:private output
  "Output in the expected format
    outs : INT : number of perfect matchings for the bonding graph of the past RNA string"
  [outs]
  ;(println "Rosalind's Sample Output:")
  ;(println "12")
  (println "\nSample Output:")
  (println outs))

(def sample-dataset "
>Rosalind_23
AGCUAGUCAU")

(defn onit []
  (println "Sample Dataset:")
  (println sample-dataset)
  (-> sample-dataset (gt/collect-from-fasta) (proc-fasta-map) (output)))

;; $ lein run 25 
