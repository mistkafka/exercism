;; 1. 使用seq-sort来排序字符串，免去string->list->sort->array->string的繁琐操作
;; 2. string=代替=来比较字符串

(require 'cl)
(require 'seq)
(require 'dash)

(defun anagrams-for (target-word candidate-words)
  (cl-loop for x in candidate-words
	   when (is-sublist target-word x) collect x))

(defun is-sublist (a b)
  (and (not (string= (downcase a) (downcase b)))
       (string= (normalize-the-word a) (normalize-the-word b))))

(defun normalize-the-word (word)
  (->>
   (downcase word)
   (seq-sort #'<)))

(provide 'anagram)
