;;; pangram.el --- Pangram (exercism)

;;; Commentary:

;;; Code:

(require 's)
(require 'subr-x)

(defun is-alphabet? (char)
  (when (and (stringp char) (s-match "[a-zA-Z]" char))
    t))

(defun is-pangram (sentence)
  (let ((used-alphabet-table (make-hash-table :test 'equal)))
    (cl-loop for char across sentence
	     do
	     (setq char (string char))
	     (when
		 (is-alphabet? char)
	       (puthash (s-downcase char) t used-alphabet-table)))
    (= 26 (hash-table-count used-alphabet-table))
    ))

(provide 'pangram)
;;; pangram.el ends here
