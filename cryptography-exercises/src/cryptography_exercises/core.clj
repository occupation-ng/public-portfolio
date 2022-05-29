(ns cryptography-exercises.core
  (:gen-class))

(defn ans-multiply-arbitrary-bases [] (str 112111))

(defn ^:private vec-of-nvals
  "Similar to Python's [val]*n
  ie, [0]*3==[0 0 0]"
  [val n]
  (vec (for [i (range n)] val)))

;;  CLOJURE NOTES: (base<10-multiply )
;;    str->int:
;;      (Integer/parseInt (str (nth b i)))
;;      (int (nth b i) : FAIL : 
;;        (type (nth b i)) java.lang.Character \2
;;        (int (nth b i))) == (int \2) : FAIL : 50
;;      (Integer/parseInt (nth b i) : FAIL : Caused by: java.lang.ClassCastException: 
;;                                            class java.lang.Character cannot be cast to class java.lang.String 
;;                                            (java.lang.Character and java.lang.String are in module java.base 
;;                                            of loader 'bootstrap')
;;      (Integer/parseInt (str (nth b ib))) : SUCC : 2
(defn base<10-multiply
  "Multiplies 2 numbers within a specified base 
    LIMITATIONS:
      i) 2 numbers: passed as a base10 int but represents the provided base
      ii) bases less than 10
    100
    *21
    ___  PART i: multiply each digit
    100  (* 1 1) (* 1 0) (* 1 0)
  +200_  (* 2 1) (* 2 0) (* 2 0) _0_
   ____  PART ii: sum the products
   2100
  "
  [base numbers]
  (let [a (reverse (str (first numbers)))
        b (reverse (str (second numbers)))
        ;; PART i
        irr-mat (loop [ib 0
                       irr-mat []] ;; irregular matrix due to digits and carry determining length of rows
                  (if (< ib (count b))
                    ;; (loop ib (loop ia )) due to multiplying each digit of b by each digit of a
                    (let [row (loop [ia 0
                                     row (vec-of-nvals 0 ib)
                                     carry 0]
                                ;(println row)
                                (if (< ia (count a))
                                  (let [vb (Integer/parseInt (str (nth b ib))) ;; clojure typing, see NOTE above
                                        va (Integer/parseInt (str (nth a ia))) ;; clojure typing, see NOTE above
                                        sum (+ carry (* vb va))
                                        val (mod sum base)
                                        new-carry (/ (- sum val) base)]
                                    (recur (inc ia)
                                           (conj row val)
                                           new-carry))
                                  (if (= 0 carry)
                                    row
                                    (conj row carry)) ;; final carry!>=base
                                  ))]
                      (recur (inc ib)
                             (conj irr-mat row)))
                    irr-mat))]
    (if (or (= [\0] a) (= [\0] b))
      "0" ;; return
    ;; PART ii
      (loop [col-sum []
             col 0
             carry 0]
        (let [to-sum (remove nil? (into [] (for [row irr-mat]
                                             (when (< col (count row))
                                               (nth row col)))))]
          (if (empty? to-sum)
            (if (= carry 0)
            ;; the extra "" accounts for reduce returning the passed collection if the collection is (= (count ) 1)
            ;;   ie. (reduce str [2 1]) == "21" java.lang.String
            ;;        but (reduce str [2]) == 2 java.lang.Long 
              (reduce str "" (reverse col-sum)) ;; return
              (reduce str "" (reverse (conj col-sum carry))))  ;; return
            (let [to-mod (+ carry (reduce + to-sum))
                  val (mod to-mod base)
                  new-carry (/ (- to-mod val) base)]
              (recur (conj col-sum val)
                     (inc col)
                     new-carry))))))))

(defn multiply-arbitrary-bases
  "Multiply (212)base3 by (122)base3"
  []
  (base<10-multiply 3 [212 122]))

(defn portfolio-exercise
  "Some Topics In Elementary Number Theory"
  []
  (println "Multiply Arbitrary Bases:" (=
                                        (multiply-arbitrary-bases)
                                        (ans-multiply-arbitrary-bases)))
  (println "Mine: " (multiply-arbitrary-bases))
  (println "Book: " (ans-multiply-arbitrary-bases)))

(defn -main
  "onit"
  [& args]
  (portfolio-exercise))

(comment "BIBLIO 
  https://clojuredocs.org/clojure.core/conj
  https://clojuredocs.org/clojure.core/count
  https://clojuredocs.org/clojure.core/empty_q ;; (empty? )
  https://clojuredocs.org/clojure.core/first
  https://clojuredocs.org/clojure.core/inc
  https://clojuredocs.org/clojure.core/int
  https://clojuredocs.org/clojure.core/into
  https://clojuredocs.org/clojure.core/loop
  https://clojuredocs.org/clojure.core/map
  https://clojuredocs.org/clojure.core/mod
  https://clojuredocs.org/clojure.core/nil_q ;; (nil? )
  https://clojuredocs.org/clojure.core/nth
  https://clojuredocs.org/clojure.core/println
  https://clojuredocs.org/clojure.core/reduce
  https://clojuredocs.org/clojure.core/remove
  https://clojuredocs.org/clojure.core/reverse
  https://clojuredocs.org/clojure.core/second
  https://clojuredocs.org/clojure.core/str")

