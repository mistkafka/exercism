;;; anagram.el --- Anagram (exercism)

;;; Commentary:

;;; Code:

(require 'cl)
(require 'dash)

(defun anagrams-for (target-word candidate-words)
  (cl-loop for x in candidate-words
	   when (and (not (equal target-word x)) (is-sublist target-word x)) collect x))

(defun is-sublist (target-word candidate-word)
  (equal
   (normalize-the-word target-word)
   (normalize-the-word candidate-word)
   ))

(defun normalize-the-word (word)
  (->>
   (downcase word)
   (string-to-list)
   ((lambda (x) (sort x '<)))
   (apply 'string)))

(provide 'anagram)
;;; anagram.el ends here
