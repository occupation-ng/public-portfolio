(ns cryptography-exercises.core-test
  (:require [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.generators :as gen]
            [clojure.pprint :as pp]
            [clojure.string :as cstr]
            [cryptography-exercises.core :refer :all]))

(def gen-numbers-of-shared-base
                ;; user=> (gen/sample gen-numbers-of-shared-base)
                ;;  ([323 2 8] [1 111011 2] [411 133241 5] [11 1000 2] [4301 3146 7] [716 4 8] [232 33001 4] [0 12114 6])
                ;; base > 0 : (mod x 0) Execution error : Divide by zero  
                ;; base > 1 : (Integer/parseInt a 1) : Execution error : radix 1 less than Character.MIN_RADIX
                ;; base <= 9 : >9 requires special alphabets; update if alphabets are added
  (gen/bind (gen/choose 2 9) ;; dually inclusive
            (fn [base]
                ;; vector size min<>max to avoid:  
                ;;    java.lang.IllegalArgumentException: Value out of range for int: <SOME-BIG-NUMBER>
              (let [MIN-VEC 1
                    MAX-VEC 6]
                (gen/tuple
                  ;; (Integer/parseInt ) will drop any leading 0s
                 (gen/fmap #(Integer/parseInt (cstr/join (map str %)))
                           (gen/vector
                            (gen/choose 0 (- base 1)) 1 4))
                 (gen/fmap #(Integer/parseInt (cstr/join (map str %)))
                           (gen/vector
                            (gen/choose 0 (- base 1))
                            MIN-VEC MAX-VEC))
                 (gen/return base))))))

(defspec arbitray-base 100 ;; 100 specifies the number of examples to generate
  (prop/for-all [[a b base] gen-numbers-of-shared-base]
                (= (let [ans  (base<10-multiply base [a b])
                         ans-compare (Integer/toString
                                      (* (Integer/parseInt (str a) base)
                                         (Integer/parseInt (str b) base)) base)]
                      ;; Uncomment to print out more examples and answers for this exercise:
                     (pp/print-table [{:Qa a :Qb b :Base base}])
                     (println "Answer:" (str ans "b" base))
                     ans ans-compare))))

(deftest base<10-multiply-test
  (testing "Bases less than 10 multiplication"
    ;;  Clojure Numberic Types: 
    ;;      https://clojure.org/guides/learn/syntax#_numeric_types
    ;;    > arbitrary radix (prefix with base then r) integers
    ;;    user=> 2r1101
    ;;           13
    ;;  Java Integer/toString:
    ;;      https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#toString-int-int-
    ;;    > public static String toString(int i, int radix)
    ;;      Returns a string representation of the first argument 
    ;;      in the radix specified by the second argument.  
    ;;    user=> (Integer/toString 13 2)
    ;;           "1101"
    ;;  Java Integer/parseInt
    ;;      https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#parseInt-java.lang.String-int-
    ;;    > public static int parseInt(String s, int radix)
    ;;      Parses the string argument as a signed integer 
    ;;      in the radix specified by the second argument.
    ;;    user=> (Integer/parseInt "212" 3)
    ;;           23
    (is (=
         (base<10-multiply 3 [122 212])
         (Integer/toString (* (Integer/parseInt "212" 3) (Integer/parseInt "122" 3)) 3)))))

