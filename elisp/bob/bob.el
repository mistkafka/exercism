;;; bob.el --- Bob exercise (exercism)

;;; Commentary:

;;; Code:


(defun question-p (content)
  "CONENT end with char '?'"
  (string-match "?\\'" content))

(defun has-letter-p (str)
  (string-match
   "[a-zA-Z]"
   str))

(defun all-upcase-p (str)
  (string=
   (upcase str)
   str))

(defun yell-p (content)
  "all char of CONTENT is Upercase letter?"
  (and
   (all-upcase-p content)
   (has-letter-p content)))

(defun string-empty-p (str)
  (not (string< "" str)))

(defun bullshit-p (content)
  "all char of CONENT is whitespace?"
  (string-empty-p (replace-regexp-in-string
                   "\s"
                   ""
                   content)))

(defun response-for (ask-content)
  "Bob's response"
  (cond
   ((yell-p ask-content) "Whoa, chill out!")
   ((question-p ask-content) "Sure.")
   ((bullshit-p ask-content) "Fine. Be that way!")
   (t "Whatever.")))

(provide 'bob)
;; bob.el ends here
