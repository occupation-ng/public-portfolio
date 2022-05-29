(ns rosalind-clojure.prob025-PMCH-0-LIB
  (:require [rosalind-clojure.gentools :as gt]
            [rosalind-clojure.utils :as utils])
  ;; LIB : Loom : Clojure Graphing Library used with GraphViz installed in a Unix environment : https://github.com/aysylu/loom
  (:require
   [loom.graph :as gloom]
   [loom.attr :as gloom-attr]
   [loom.io :as gloom-io])
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
  https://en.wikipedia.org/wiki/Permutation")

(defn ^:private get-vertices-maps
  "Convert a vector of string literals corresponding to an RNA strand to a vector of maps corresponding to graph vertices
    vec-string : VEC[STR STR ..] : VEC of STR literals : ordered list of RNA nucleobases 
    RETRUN : VEC[MAP{} MAP{} ..] : VEC of MAPs with identifying information representing nodes on a graph
  ex.
    [A G C U A G U C A U] =>  [{:label A0, :value A} {:label G1, :value G} {:label C2, :value C} {:label U3, :value U} {:label A4, :value A} {:label G5, :value G} {:label U6, :value U} {:label C7, :value C} {:label A8, :value A} {:label U9, :value U}]"
  [vec-string]
  (into [] (apply concat
                  (for [i (range (count vec-string))
                        :let [element (nth vec-string i)]]
                    [{:label (str (nth vec-string i) i) :value element}]))))

(defn ^:private get-edges-maps
  "Get all iterations of combinations of vertices maps, repeat==2 due to 2 nodes per edge
    vertices-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs, maps representing vertices
  ex.
  "
  [vertices-maps]
  (utils/iter-product vertices-maps 2))

(defn ^:private get-circle-edges-maps
  "Circle edges are here defined as the edges between each consecutive nucleobase vertex from an RNA string forming a broken ring
    vertices-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs, maps representing vertices
  ex.
  "
  [vertices-maps]
  (loop [i 0
         circle-edges-maps []]
    (if (< i (dec (count vertices-maps)))
      (recur (inc i)
             (conj circle-edges-maps [(nth vertices-maps i) (nth vertices-maps (inc i))]))
      circle-edges-maps)))

(defn ^:private get-edges-and-splines
  "
    match-char0 : STR : STR literal of character to match
    match-char1 : STR : STR literal of character to match
    vertices-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs, maps representing vertices
  ex.
  "
  [match-char0 match-char1 vertices-maps]
  (let [edges-maps (->> (get-edges-maps vertices-maps)
                        (filter #(not= (first %) (second %)))) ;; disallow loops
        specific-edges-maps (->> edges-maps
                                 (filter #(and (= match-char0 (:value (first %))) (= match-char1 (:value (second %))))))]  ;; disallow AU bond dupes allowing only AU bonds with A on left
    (loop [i 0
           loop-edges []
           loop-splines []]
      (if (< i (count specific-edges-maps))
        (let [edge-map (nth specific-edges-maps i)
              lt-ind (Integer/parseInt (subs (:label (first edge-map)) 1))
              rt-ind (Integer/parseInt (subs (:label (second edge-map)) 1))
              spline-node (if (and
                               (= 0 lt-ind)
                               (= (dec (count vertices-maps)) rt-ind)) ;; (dec ) for 0-index
                            (str (dec (count vertices-maps)) (count vertices-maps)) ;; (dec ) for 0-index
                            (str (min rt-ind lt-ind) (max lt-ind rt-ind)))
              lt-point (str "POINT_" (if (= lt-ind (min lt-ind rt-ind))
                                       (:label (first edge-map))
                                       (:label (second edge-map))))
              rt-point (str "POINT_" (if (= lt-ind (max lt-ind rt-ind))
                                       (:label (first edge-map))
                                       (:label (second edge-map))))
              diff (Math/abs (- rt-ind lt-ind))
              [nu-edges nu-splines] (if (or
                                         (= 1 diff) ;; adjacent vertices
                                         (= (dec (count vertices-maps)) diff)) ;; the ends
                                      [loop-edges (conj loop-splines
                                                        [lt-point
                                                         spline-node]
                                                        [spline-node
                                                         rt-point])]
                                      [(conj loop-edges [(str "POINT_" (:label (first edge-map))) (str "POINT_" (:label (second edge-map)))]) loop-splines])]
          (recur (inc i)
                 nu-edges
                 nu-splines))
        [loop-edges loop-splines]))))

(defn ^:private get-matching-edges
  "
  ex."
  [MATCHING-edges edges]
  (into []
        (remove nil?
                (for [matching MATCHING-edges
                      edge edges]
                  (when (= edge
                           [(str "POINT_" (:label (first matching))) (str "POINT_" (:label (second matching)))])
                    edge)))))

(defn ^:private get-matching-splines
  "
  ex."
  [MATCHING-edges splines]
  (into []
        (apply concat
               (remove nil?
                       (for [i (range (count MATCHING-edges))
                             j (range (count splines))
                             :let [matching (nth MATCHING-edges i)
                                   spline (nth splines j)]]
                         (when (= (str "POINT_" (:label (first matching))) (first spline))
                           (when (= (str "POINT_" (:label (second matching))) (second (nth splines (inc j))))
                             [spline (nth splines (inc j))])))))))

(defn ^:private get-matchings
  "
    vertices-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs, maps representing vertices
  ex."
  [vertices-maps matching]
  (let [A-vertices (filter #(= \A (:value %)) vertices-maps)
        U-vertices (filter #(= \U (:value %)) vertices-maps)
        C-vertices (filter #(= \C (:value %)) vertices-maps)
        G-vertices (filter #(= \G (:value %)) vertices-maps)
        AU-matchings (apply concat
                            (for [Ai (range (count A-vertices))]
                              (let [matching [(nth A-vertices Ai)
                                              (nth U-vertices
                                                   (dec (nth (first matching) Ai)))]] ;; (dec ) due to matching permutations being 1-index but *-vertices being 0-indexed arrays
                                [matching (reverse matching)]))) ;; (reverse ) to identify edges regardless of vertex order
        CG-matchings (apply concat
                            (for [Ci (range (count C-vertices))]
                              (let [matching [(nth C-vertices Ci)
                                              (nth G-vertices
                                                   (dec (nth (second matching) Ci)))]] ;; (dec ) due to matching permutations being 1-index but *-vertices being 0-indexed arrays
                                [matching (reverse matching)])))] ;; (reverse ) to identify edges regardless of vertex order
    (into [] (concat AU-matchings CG-matchings))))

(defn ^:private ng-gloom-add-attr-to-nodes-by-index
  "Wrapper around Loom's loom-att/add-attr-to-nodes to allow adding attributes to nodes dynamically
    gloom-graph : Loom graph Object
    k : STR|KEYNAME : key of attribute
    vec-attrs : VEC[STR|INT|KEYNAME ..] : VEC of values of attribute, index of values match index of associated node in vec-nodes
    vec-nodes : VEC[STR STR STR ..] : VEC of STRs as labels of nodes in the graph Object
    RETURN : Loom graph Object
  ex."
  [gloom-graph k vec-attrs vec-nodes]
  (loop [i 0
         updated-graph gloom-graph]
    (if (< i (count vec-nodes))
      (recur (inc i)
             (gloom-attr/add-attr-to-nodes updated-graph k (nth vec-attrs i) [(nth vec-nodes i)]))
      updated-graph)))

(defn ^:private ng-gloom-add-attr-to-nodes
  "Wrapper around Loom's (loom-attr/add-attr-to-nodes ) to allow adding the same attribute to many nodes dynamically
    gloom-graph : Loom graph Object
    k : STR|KEYNAME : key of attribute
    v : STR|INT|KEYNAME : value of attribute
    vec-nodes : VEC[STR STR STR ..] : VEC of STRs as labels of nodes in the graph Object
    RETURN : Loom graph Object
  ex."
  [gloom-graph k v vec-nodes]
  (loop [i 0
         updated-graph gloom-graph]
    (if (< i (count vec-nodes))
      (recur (inc i)
             (gloom-attr/add-attr-to-nodes updated-graph k v [(nth vec-nodes i)]))
      updated-graph)))

(defn ^:private compose-matching-bonding-graph
  "Compose a Loom graph object for a perfect matching of bonding graph of an RNA string passed as vertices-maps
    vertices-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs, maps representing vertices
    matching : :
    RETURN : Loom graph Object
    ex.
  "
  [vertices-maps matching]
  (let [circle-point-nodes (into [] (for [i (range (count vertices-maps))
                                          :let [vertex-map (nth vertices-maps i)]]
                                      (str "POINT_" (:label vertex-map))))
        circle-label-nodes (into [] (for [i (range (count vertices-maps))
                                          :let [vertex-map (nth vertices-maps i)]]
                                      (:label vertex-map)))
        circle-label-poses (into [] (for [i (range (count vertices-maps))
                                          :let [radius 3.3
                                                x (* (Math/cos (* (/ (* Math/PI 2) (count vertices-maps)) i)) radius)
                                                y (* (Math/sin (* (/ (* Math/PI 2) (count vertices-maps)) i)) radius)]]
                                      (str  x "," y "!")))
        invis-nodes (into []
                          (for [i (range (count vertices-maps))]
                            (str i (inc i))))
        circle-point-poses (into [] (for [i (range (count vertices-maps))
                                          :let [radius 3
                                                x (* (Math/cos (* (/ (* Math/PI 2) (count vertices-maps)) i)) radius)
                                                y (* (Math/sin (* (/ (* Math/PI 2) (count vertices-maps)) i)) radius)]]
                                      (str  x "," y "!")))
        invis-poses (into [] (for [i (range (count invis-nodes))
                                   :let [radius 2.5
                                         x (* (Math/cos (+ (/ (* Math/PI 2) (* 2 (count vertices-maps))) (* (/ (* Math/PI 2) (count vertices-maps)) i))) radius)
                                         y (* (Math/sin (+ (/ (* Math/PI 2) (* 2 (count vertices-maps))) (* (/ (* Math/PI 2) (count vertices-maps)) i))) radius)]]
                               (str  x "," y "!")))
        circle-edges-maps (get-circle-edges-maps vertices-maps)
        circle-edges (into [] (for [edge-map circle-edges-maps]
                                [(str "POINT_" (:label (first edge-map))) (str "POINT_" (:label (second edge-map)))]))
        [AU-edges AU-splines] (get-edges-and-splines \A \U vertices-maps)
        [CG-edges CG-splines] (get-edges-and-splines \C \G vertices-maps)
        MATCHING-edges (get-matchings vertices-maps matching)
        AU-matching-edges (get-matching-edges MATCHING-edges AU-edges)
        CG-matching-edges (get-matching-edges MATCHING-edges CG-edges)
        AU-matching-splines (get-matching-splines MATCHING-edges AU-splines)
        CG-matching-splines (get-matching-splines MATCHING-edges CG-splines)]
    (as-> (gloom/graph) g
      (apply gloom/add-nodes g circle-point-nodes)
      (ng-gloom-add-attr-to-nodes-by-index g :pos circle-point-poses circle-point-nodes)
      (gloom-attr/add-attr-to-nodes g :shape :point circle-point-nodes)
        ;;
      (apply gloom/add-nodes g circle-label-nodes)
      (ng-gloom-add-attr-to-nodes-by-index g :pos circle-label-poses circle-label-nodes)
      (gloom-attr/add-attr-to-nodes g :shape :none circle-label-nodes)
        ;;
      (apply gloom/add-nodes g invis-nodes)
      (ng-gloom-add-attr-to-nodes-by-index g :pos invis-poses invis-nodes)
      (ng-gloom-add-attr-to-nodes g :shape :point invis-nodes)
      (ng-gloom-add-attr-to-nodes g :style :invis invis-nodes)
        ;;
      (apply gloom/add-edges g AU-edges)
      (gloom-attr/add-attr-to-edges g :style :dashed AU-edges) ;; AU bonds of bonding graph
      (apply gloom/add-edges g AU-splines)
      (gloom-attr/add-attr-to-edges g :style :dashed AU-splines) ;; CG bonds of bonding graph
      (apply gloom/add-edges g CG-edges)
      (gloom-attr/add-attr-to-edges g :style :dashed CG-edges) ;; CG bonds of bonding graph
      (apply gloom/add-edges g CG-splines)
      (gloom-attr/add-attr-to-edges g :style :dashed CG-splines) ;; CG bonds of bonding graph
        ;; color and stylise the matching
      (gloom-attr/add-attr-to-edges g :color :red AU-matching-edges)
      (gloom-attr/add-attr-to-edges g :style :line AU-matching-edges)
      (gloom-attr/add-attr-to-edges g :color :red CG-matching-edges)
      (gloom-attr/add-attr-to-edges g :style :line CG-matching-edges)
      (gloom-attr/add-attr-to-edges g :color :red AU-matching-splines)
      (gloom-attr/add-attr-to-edges g :style :line AU-matching-splines)
      (gloom-attr/add-attr-to-edges g :color :red CG-matching-splines)
      (gloom-attr/add-attr-to-edges g :style :line CG-matching-splines)
      (apply gloom/add-edges g circle-edges))))

(defn compose-AUCG-matchings
  "Compose a matching for AU and CG bonds for a bonding graph with equal number of nucleobases for each bond type: A and Us, and C and Gs
    vertices-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs, maps representing vertices
 RETURN : VEC[VEC[VEC[INT INT ..] VEC[INT INT ..]] ..] : VEC of VECs of VECs of INTs ie, [[1 2 3] [1 2]], (first ) AU bonds, (second ) CG bonds 
 ex.
  [A G C A U] => [[[1 2] [1]] [[2 1] [1]]]
  [A G C U A G U C A U] => [[[1 2 3] [1 2]] [[1 2 3] [2 1]] [[1 3 2] [1 2]] [[1 3 2] [2 1]] [[2 1 3] [1 2]] [[2 1 3] [2 1]] [[2 3 1] [1 2]] [[2 3 1] [2 1]] [[3 1 2] [1 2]] [[3 1 2] [2 1]] [[3 2 1] [1 2]] [[3 2 1] [2 1]]]"
  [vec-string]
  (let [freqs (frequencies vec-string)
        numb-A-vertices (get freqs \A)
        numb-C-vertices (get freqs \C)
        AU-ind-perms (utils/get-permutations numb-A-vertices)
        CG-ind-perms (utils/get-permutations numb-C-vertices)]
    (into [] (for [i (range (count AU-ind-perms))
                   j (range (count CG-ind-perms))]
               (conj [] (nth AU-ind-perms i) (nth CG-ind-perms j))))))

(defn ^:private proc-fasta-map
  "Process the fasta-maps into a single super-string, and any remaining unmatchable strings
    fasta-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs representing FASTA format maps {:label STR :string STR}
    RETURN : rendered graphs in PNG format"
  [fasta-map]
  (let [vec-string (vec (:string (first fasta-map)))
        vertices-maps (get-vertices-maps vec-string)
        ;; avoid calculating matchings for a massive number of matchings, if all AU bonds with 16 vertices, then 8 bonds, making (factorial 8)=>40320 maximum matchings
        matchings (if (> 17 (count vec-string)) ;; 17 as arbitrary HARDCODED limit on length of RNA string
                    (compose-AUCG-matchings vec-string)
                    [])
        max-matchings-pngs-to-generate (if (> 13 (count matchings)) ;; 13 as arbitrary HARDCODED limit on number of rendered bounding graphs
                                         (count matchings)
                                         13)]
    (doall
     (for [i (range (count (subvec matchings 0 max-matchings-pngs-to-generate)))]
       (as-> (compose-matching-bonding-graph vertices-maps (nth matchings i)) g
         (utils/byte-array>file (gloom-io/render-to-bytes g :alg :neato) (str "tmp_matching_" i ".png")))))
    (count matchings)))

(def sample-dataset "
>Rosalind_23
AGCUAGUCAU")

(defn onit []
  (println "Sample Dataset:")
  (println sample-dataset)
  (-> sample-dataset (gt/collect-from-fasta) (proc-fasta-map)))

;; $ lein run 25_LIB 
