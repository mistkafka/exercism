(require 'seq)

(defun is-pangram (str)
  (seq-every-p
   (lambda (x) (seq-contains (downcase str) x))
   "abcdefghijklmnopqrstuvwxyz"))

(provide 'pangram)
