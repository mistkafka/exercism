(require 'dash)
(require 'seq)

(defun is-letter? (c)
  (or (<= ?a c ?z)
      (<= ?A c ?Z)))

(defun is-pangram (sentence)
  (->>
   (downcase sentence)
   (seq-filter 'is-letter?)
   (delete-dups)
   (length)
   (= 26))
  )

(provide 'pangram)
