(ns rosalind-clojure.prob041-REAR-0
  (:require [clojure.string :as cstr])
  (:gen-class))

;; https://rosalind.info/problems/REAR/

(comment "NOTES
  _v : vector
 _Nv : Normalised vector")

(defn ^:private get-identity-map
  "Create a map mapping the vector to its identity; returned map has integer keys.
    _v : VEC[INT,INT,..] : vector of integers
    RETURN : MAP{INT INT, INT INT} : mapping of a vector to its identity
  ex.
    [3 10 8 2 5 4 7 1 6 9] => {7 7, 1 8, 4 6, 6 9, 3 1, 2 4, 9 10, 5 5, 10 2, 8 3}
    [5 2 3 1 7 4 10 8 6 9] => {7 5, 1 4, 4 6, 6 9, 3 3, 2 2, 9 10, 5 1, 10 7, 8 8}"
  [_v]
  (loop [identity-map {}
         i 0]
    (if (< i (count _v))  ;; identity is 1-indexed
      (recur (assoc identity-map (nth _v i) (inc i))  ;; (inc i) because identity is 1-indexed
             (inc i))
      identity-map)))

(defn ^:private map-to-identity
  "Takes a random permutation and an identity map and returns the permutation mapped to the identity.
    identity-map : MAP{INT INT, INT INT} : mapping of a vector to its identity
    _v : VEC[INT,INT,..] : vector of integers
    RETURN : VEC[INT,INT,..] : vector of integers mapped to identity
  ex.
    {7 5, 1 4, 4 6, 6 9, 3 3, 2 2, 9 10, 5 1, 10 7, 8 8} [3 10 8 2 5 4 7 1 6 9] => [3 7 8 2 1 6 5 4 9 10]
    {7 3, 1 6, 4 5, 6 2, 3 7, 2 9, 9 4, 5 10, 10 8, 8 1} [8 2 7 6 9 1 5 3 10 4] => [1 9 3 2 4 6 10 7 8 5]"
  [identity-map _v]
  (loop [normalised-vector []
         i 0]
    (if (< i (count _v))  ;; identity is 1-indexed
      (recur (conj normalised-vector (get identity-map (nth _v i)))
             (inc i))
      normalised-vector)))

(defn ^:private normalise-to-identity
  "Normalise the second vector against the identity-map of the first vector.
    _v0 : VEC[INT,INT,..] : vector of integers
    _v1 : VEC[INT,INT,..] : vector of integers
    RETURN : VEC[INT,INT,..] : normalised vector containing integer values 1 to (count VEC[..])
  ex.
    [3 10 8 2 5 4 7 1 6 9] [5 2 3 1 7 4 10 8 6 9] => [5 4 1 8 7 6 2 3 9 10]"
  [_v0 _v1]
  (let [identity-map (get-identity-map _v0)
        normalised-vector (map-to-identity identity-map _v1)]
    normalised-vector))

(defn ^:private get-breakpoints
  "Returns breakpoints, indices of transition from either ascending or descending consecutive values, for a Normalised vector.
    _Nv : VEC[INT,INT,..] : normalised vector containing integer values 1 to (count VEC[..])
    RETURN : VEC[INT,INT,..] : vector of breakpoint indices, returns empty VEC[] when _Nv is sorted, ie. _Nv is the identity
  ex.
    [1 2 3 6 5 4 8 7 9 10] => [3 6 8]
    [1 2 3 4 6 5 7 8 9 10] => [4 6]
    [1 2 3 4 5 6 7 8 9 10] => []
    [2 4 1 6 3 8 5 10 7 9] => [0 1 2 3 4 5 6 7 8 9 10]"
  [_Nv]
  (let [_padded_Nv (vec (concat [0] _Nv [(inc (count _Nv))]))] ;; pad to include boundary breakpoints, [1 2 3] => [0 1 2 3 4]
    (loop [breakpoints []
           i 0]
      (if (< i (dec (count _padded_Nv))) ;; (dec ) due breakpoint padding
        (if (< 1 (Math/abs
                  (- (nth _padded_Nv i)
                     (nth _padded_Nv (inc i)))))
          (recur (conj breakpoints i)  ;; (inc i) because identity is 1-indexed
                 (inc i))
          (recur breakpoints
                 (inc i)))
        breakpoints))))

(comment  "(get-critical-segments ) : 
constructing segments from breakpoints ensures you avoid cutting an existing sequence
  we can ignore pairs of breakpoints:
    that are the same number
      a==b, b-a==0 !>1
      why? n=[1,2,3,4] (reversal 2 2 n)
        == n[:i]+rev(n[i:j])+n[:j]
        ==[1,2]+rev([])+[3,4]
        ==[1,2]+[]+[3,4]
        ==[1,2,3,4]         permutation unchanged
    within a distance of 1
      b-a==1 !>1
      why? n=[1,2,3,4] (reversal 2 3 n)
        ==n[:i]+rev(n[i:j])+n[:j]
        ==[1,2]+rev([3])+[4]
        ==[1,2]+[3]+[4]
        ==[1,2,3,4]         permutation unchanged
    where a is greater than b
      a>b, b-a<0  !>1
      why? n=[1,2,3,4] (reversal 3 1 n)
        ==n[:i]+rev(n[i:j])+n[:j]
        ==[1,2,3]+rev([])+[2,3,4] 
        ==[1,2,3,2,3,4]     permutation length extended")

(defn ^:private get-critical-segments
  "Filters trivial, breakpoint segments whose boundary indices are consecutive, breakpoint segments, ie. [4 5].
    breakpoints : VEC[INT,INT,..] : vector of breakpoint indices
    RETURN : VEC[VEC[INT,INT],VEC[INT,INT],..] : vector of vectors of two integers
  ex.
    [0 2 4 5 8 10] => [[0 2] [0 4] [0 5] [0 8] [0 10] [2 4] [2 5] [2 8] [2 10] [4 8] [4 10] [5 8] [5 10] [8 10]]
    [1 4 5 9] => [[1 4] [1 5] [1 9] [4 9] [5 9]]
    [1 5 9] => [[1 5] [1 9] [5 9]]
    [5 6 9] => [[5 9] [6 9]]
    [7 9] => [[7 9]]"
  [breakpoints]
  (into [] (filter second  ;; second will return second value so [1 2]=>2 but nil=>nil, so only filter for values that satisfy (second )
                   (for [a breakpoints
                         b breakpoints]
                     (when (< 1 (- b a))
                       [a b])))))

(defn ^:private reversal
  "Flips the values between the indices.
    i : INT : start index, inclusive
    j : INT : end index, exclusive
    _Nv : VEC[INT,INT,..] : normalised vector containing integer values 1 to (count VEC[..])
    RETURN : VEC[INT,INT,..] : vector of reordered INTs
  ex.
    7 9 [7 2 1 4 6 9 3 5 8 10] => [7 2 1 4 6 9 3 8 5 10]
    0 2 [7 2 10 8 9 3 5 6 4 1] => [2 7 10 8 9 3 5 6 4 1]"
  [i j _Nv]
  (vec (concat
        (subvec _Nv 0 i)
        (reverse (subvec _Nv i j))
        (subvec _Nv j (count _Nv)))))

(defn ^:private process-critical-segment
  "Apply a reversal and check if the permutation has less breakpoints; choose the minimum.
    i : INT : start index, inclusive
    j : INT : end index, exclusive
    _Nv : VEC[INT,INT,..] : normalised vector containing integer values 1 to (count VEC[..])
    branch-min : INT : minimum breakpoints for each permutation in this branch 
    new-branch : VEC[VEC[INT,INT,..],..] : vector of vectors of integers representing permutation branches
    RETURN : VEC[INT,VEC[VEC[INT,..],..] : vector with first index as branch min and second index as the new branch
  ex.
    2 10 [3 4 7 2 1 5 9 6 10 8] 7 [[1 3 4 7 2 5 6 9 10 8]] => [7 [[1 3 4 7 2 5 6 9 10 8]]]
    5 10 [3 4 7 2 1 5 9 6 10 8] 7 [[1 3 4 7 2 5 6 9 10 8]] => [7 [[1 3 4 7 2 5 6 9 10 8]]]
    6 9 [3 4 7 2 1 5 9 6 10 8] 7 [[1 3 4 7 2 5 6 9 10 8] [3 4 7 2 1 5 6 9 10 8]] => [7 [[1 3 4 7 2 5 6 9 10 8] [3 4 7 2 1 5 6 9 10 8]]]"
  [i j _Nv branch-min new-branch]
  (let [permutation-_Nv (reversal i j _Nv)
        permutation-breakpoints (get-breakpoints permutation-_Nv)
        numb-perm-breakpoints (count permutation-breakpoints)]
    (cond
      (= 0 numb-perm-breakpoints) ;; seach complete, perm == identity
      [0 []]
      (< numb-perm-breakpoints branch-min) ;; new min creates new breakpoint branch with this perm
      [numb-perm-breakpoints [permutation-_Nv]]
      (= numb-perm-breakpoints branch-min) ;; matching mins are added to branch
      [branch-min (vec (distinct (conj new-branch permutation-_Nv)))]
      :else ;; ignore
      [branch-min new-branch])))

(defn ^:private process-criticals
  "Process all critical segments for the permutation with the least breakpoints.
    _Nv : VEC[INT,INT,..] : normalised vector containing integer values 1 to (count VEC[..])
    new-branch : VEC[VEC[INT,INT,..],..] : vector of vectors of integers representing permutation branches
    min-breakpoints : INT : minimum breakpoints for each permutation in this branch 
    RETURN : VEC[INT,VEC[VEC[INT,..],..] : vector with first index as branch min and second index as the new branch
  ex.
    [7 6 5 4 3 2 1 9 8 10] [] 3 => [2 [[1 2 3 4 5 6 7 9 8 10] [7 6 5 4 3 2 1 8 9 10]]]
    [7 6 5 4 1 2 3 8 9 10] [[1 2 3 4 5 6 7 9 8 10] [7 6 5 4 3 2 1 8 9 10]] 2 => [2 [[1 2 3 4 5 6 7 9 8 10] [7 6 5 4 3 2 1 8 9 10] [3 2 1 4 5 6 7 8 9 10]]]"
  [_Nv new-branch min-breakpoints]
  (let [breakpoints (get-breakpoints _Nv)
        critical-segments (get-critical-segments breakpoints)]
    (loop [crit-min min-breakpoints
           crit-branch new-branch
           pair-index 0]
      (if (< pair-index (count critical-segments))
        (let [pair (nth critical-segments pair-index)
              [i j] [(first pair) (second pair)]
              [seg-min seg-branch] (process-critical-segment i j _Nv crit-min crit-branch)]
          (if (= 0 seg-min)
            [seg-min seg-branch]
            (recur seg-min
                   seg-branch
                   (inc pair-index))))
        [crit-min (vec crit-branch)])))) ;; return after loop completes

(defn ^:private process-branch
  "Processes a branch, returning a new subsequent branch with the least amount of breakpoints.
    branch :VEC[VEC[INT,INT,..],..] : vector of vectors of integers representing permutation branches
    min-breakpoints : INT : minimum breakpoints for each permutation in this branch 
    RETURN : VEC[INT,VEC[VEC[INT,..],..] : vector with first index as branch min and second index as the new branch
  ex.
    [[1 2 9 8 6 7 4 3 5 10] [1 4 3 2 9 8 6 7 5 10] [1 4 3 5 6 7 2 9 8 10]] 5 => [3 [[1 4 3 2 9 8 7 6 5 10]]]
    [[1 4 3 2 9 8 7 6 5 10]] 3 => [2 [[1 2 3 4 9 8 7 6 5 10] [1 4 3 2 5 6 7 8 9 10]]]
    [[1 2 3 4 9 8 7 6 5 10] [1 4 3 2 5 6 7 8 9 10]] 2 => [0 []]"
  [branch min-breakpoints]
  (vec (loop [branch-min min-breakpoints
              new-branch []
              ei 0]
         (if (< ei (count branch))
           (let [permutation-_Nv (nth (vec branch) ei)
                 [perm-branch-min perm-branch] (process-criticals
                                                permutation-_Nv
                                                new-branch
                                                branch-min)]
             (if (= 0 perm-branch-min) ;; search complete, perm==identity 
               (recur perm-branch-min
                      perm-branch
                      (count branch))  ;; (count branch) breaks loop conditional (< ei (count branch))
               (recur perm-branch-min
                      perm-branch
                      (inc ei))))
           [branch-min new-branch]))))

(defn ^:private critical-segment-search
  "Finds the reversal distance of a Normalised vector using a critical segment search.
    _Nv : VEC[INT,INT,..] : normalised vector containing integer values 1 to (count VEC[..])
    RETURN : INT : reversal distance between the normalised vector and identity 
  ex.
    [2 4 1 6 3 8 5 10 7 9] => 9
    [5 4 1 8 7 6 2 3 9 10] => 4"
  [_Nv]
  (let [_Nv-breakpoints (get-breakpoints _Nv)]
    (loop [min-breakpoints (count _Nv-breakpoints)
           reversal-distance 0
           branch [_Nv]]
      (if (= 0 min-breakpoints) ;; is identity
        reversal-distance ;; break loop 
        (let [[branch-min new-branch] (process-branch branch min-breakpoints)]
          (recur
           branch-min
           (inc reversal-distance)
           new-branch))))))

(defn ^:private get-reversal-distance
  "Finds the reversal distance of a Normalised vector using an arbitrary algorithm.
    _Nv : VEC[INT,INT,..] : normalised vector containing integer values 1 to (count VEC[..])
    RETURN : INT : reversal distance between the normalised vector and identity 
  ex.
    [3 7 8 2 1 6 5 4 9 10] => 4
    [1 9 3 2 4 6 10 7 8 5] => 5"
  [_Nv]
  ;; (SOME-OTHER-REVERSAL-DISTANCE-ALGO _Nv)
  (critical-segment-search _Nv))

(defn process-pair
  "Find reversal distance between a pair of vectors.
    _v0 : VEC[INT,INT,..] : vector of integers
    _v1 : VEC[INT,INT,..] : vector of integers
    RETURN : INT : reversal distance between the normalised vector and identity  
  ex.
    [2 9 8 5 1 7 3 4 6 10] [3 9 10 4 1 8 6 7 5 2] => 7
    [1 2 3 4 5 6 7 8 9 10] [1 2 3 4 5 6 7 8 9 10] => 0"
  [_v0 _v1]
  (let [_Nv (normalise-to-identity _v0 _v1)
        reversal-distance (get-reversal-distance _Nv)]
    reversal-distance))

(defn ^:private process-pairs
  "Process all pairs, including their swapped order, returning each pair's reversal distance in a vector.
    pairs :  VEC[VEC[VEC[INT,INT,..],VEC[INT,INT,..]],..] : vector of vector of vector pairs
    RETURN : VEC[INT,INT,..] : vector of integers representing the respective pair's reversal distance
  ex.
    [[[1 2 3 6 5 4 7 9 10 8] [1 2 3 4 5 6 7 8 9 10]] [[1 2 3 4 5 6 7 8 9 10] [3 1 5 2 7 4 9 6 10 8]]] => [3 9] 
    [[[1 2 3 4 5 6 7 8 9 10] [1 2 3 4 5 6 7 8 9 10]]] => [0]"
  [pairs]
  (loop
   [all-reverse-distances []
    pair-index 0]
    (if (< pair-index (count pairs))
      (let [pair (nth pairs pair-index)
            _v0 (first pair)
            _v1 (second pair)
            reversal-distance_v01 (process-pair _v0 _v1)
            reversal-distance_v10 (process-pair _v1 _v0)]
        ;; swapping the order of the vectors ensures the minimum reversal distance is found
        ;;   using clojure.test.check to find examples of critical vector ordering:
        ;;    (core-test/gen-shuffled-pairs) =>
        ;;     [1 8 2 3 6 7 9 4 5 10] [2 5 10 1 4 6 3 8 7 9] v01: 7 v10: 6 
        ;;     [5 1 7 9 10 4 2 3 6 8] [10 6 9 7 4 1 8 3 5 2] v01: 7 v10: 6
        ;;     [3 4 6 9 5 10 7 1 8 2] [10 4 5 2 1 7 6 8 3 9] v01: 6 v10: 7
        ;;     [4 9 8 1 3 7 5 6 2 10] [8 1 10 5 3 7 2 4 9 6] v01: 5 v10: 6
        ;;     [8 7 1 10 2 9 5 4 6 3] [6 9 1 4 5 10 3 8 2 7] v01: 6 v10: 7
        ;;     [5 10 9 1 8 2 7 6 3 4] [9 6 7 5 8 1 2 10 3 4] v01: 4 v10: 5
        ;(when (not (= reversal-distance_v01 reversal-distance_v10))
        ;  (println _v0 _v1 "v01:" reversal-distance_v01 "v10:" reversal-distance_v10))
        (recur
         (conj all-reverse-distances (min reversal-distance_v01 reversal-distance_v10))
         (inc pair-index)))
      all-reverse-distances)))

(defn ^:private file>pairs
  "Read in from file.
    filepath : STR : /PATH/TO/DATA.FILE
    RETURN : VEC[VEC[VEC[INT,INT,..],VEC[INT,INT,..]],..] : vector of vector of vector pairs
  ex.
    FILE_CONTENTS'1 2 3\n3 2 1\n\n2 3 1\n3 1 2' => [[[1 2 3] [3 2 1]] [[2 3 1] [3 1 2]]]"
  [filepath]
  (let [plaintext (slurp filepath)
        lines (cstr/split plaintext #"\n")]
    (loop [pairs []
           pair []
           li 0]
      (if (< li (count lines))
        (let [line (cstr/trim (nth lines li))]
          (if (= "" line)
            (if (not (= [] pair))
              (recur
               (conj pairs pair)
               []
               (inc li))
              (recur
               pairs
               []
               (inc li)))
            (let [_v (vec (map #(Integer/parseInt %) (cstr/split line #" ")))]
              (recur
               pairs
               (conj pair _v)
               (inc li)))))
        (conj pairs pair)))))

(comment "Psuedocode algorithm function summary:
(onit )
  [pairs file>pairs] 
  (process-pairs pairs)
    [pair (nth pairs _)
     _v0 (first pair)
     _v1 (second pair)
    (process-pair _v0 _v1)
       [_Nv (normalise-to-identity _v0 _v1)
          (map-to-identity _v1)
       reversal-distance (get-reversal-distance _Nv)]
          critical-segment-search
            [breakpoints (get-breakpoints )]
            (process-branch )
              (process-criticals critical-segments)
                [critical-segments (get-critical-segments breakpoints)
                 critical segment (nth critical-segments _)]
                   (process-critical-segment critical-segment)
                    [perm-breakpoints (get-breakpoints (reversal ))]
                    (< (count perm-breakpoints) breakpoints)")

(defn ^:private proc-file [filepath] (-> filepath (file>pairs) (process-pairs)))

(defn onit
  "Find reversal distances of various pairs of permutations."
  [] (println "Reversal Distances " (proc-file "test/rosalind_clojure/unit-tests/sample-dataset.txt")))

(comment "BIBLIO
  ;; core
  https://clojuredocs.org/clojure.core/->
  https://clojuredocs.org/clojure.core/assoc
  https://clojuredocs.org/clojure.core/comment
  https://clojuredocs.org/clojure.core/concat
  https://clojuredocs.org/clojure.core/cond
  https://clojuredocs.org/clojure.core/conj
  https://clojuredocs.org/clojure.core/count
  https://clojuredocs.org/clojure.core/defn
  https://clojuredocs.org/clojure.core/distinct
  https://clojuredocs.org/clojure.core/first
  https://clojuredocs.org/clojure.core/filter
  https://clojuredocs.org/clojure.core/for
  https://clojuredocs.org/clojure.core/fn
  https://clojuredocs.org/clojure.core/get
  https://clojuredocs.org/clojure.core/if
  https://clojuredocs.org/clojure.core/int
  https://clojuredocs.org/clojure.core/into
  https://clojuredocs.org/clojure.core/dec
  https://clojuredocs.org/clojure.core/inc
  https://clojuredocs.org/clojure.core/loop
  https://clojuredocs.org/clojure.core/map
  https://clojuredocs.org/clojure.core/min
  https://clojuredocs.org/clojure.core/println
  https://clojuredocs.org/clojure.core/reverse
  https://clojuredocs.org/clojure.core/second
  https://clojuredocs.org/clojure.core/slurp
  https://clojuredocs.org/clojure.core/some
  https://clojuredocs.org/clojure.core/subvec
  https://clojuredocs.org/clojure.core/type
  https://clojuredocs.org/clojure.core/vec
  https://clojuredocs.org/clojure.core/when
  ;; clojure.string 
  https://clojuredocs.org/clojure.string/split
  ;; interop
  https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#parseInt(java.lang.String)")
;; lein run 41
