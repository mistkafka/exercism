;;; bob.el --- Bob exercise (exercism)

;;; Commentary:

;;; Code:

(require 's)
(require 'subr-x)

(defun response-for (ask-content)
  (cond
   ((shouting? ask-content)
    "Whoa, chill out!")
   ((question? ask-content)
    "Sure.")
   ((silence? ask-content)
    "Fine. Be that way!")
   (t
    "Whatever.")))

(defun s-exists-alpha? (str)
  (string-match "[[:alpha:]]" str))

(defun shouting? (content)
  (and
   (s-uppercase? content)
   (s-exists-alpha? content)))

(defun question? (content)
  (s-ends-with? "?" content))

(defun silence? (content)
  (string-blank-p content))

(provide 'bob)
;; bob.el ends here
