;;; allergies.el --- Allergies Exercise (exercism)

;;; Commentary:

;;; Code:

(require 's)

(defconst score-list '(
		       (1   . "eggs")
		       (2   . "peanuts")
		       (4   . "shellfish")
		       (8   . "strawberries")
		       (16  . "tomatoes")
		       (32  . "chocolate")
		       (64  . "pollen")
		       (128 . "cats")
		       ))
  
(defun allergen-list (score)
  "TODO:")

(defun cover-number-to-string (number &optional base)
  "使用辗转相除法进行进制转换"
  (unless base
    (setq base 10))
  (s-reverse (do-cover-number-to-string number base)))

(defun do-cover-number-to-string (number base)
  (let ((yushu (% number base))
	(shan (/ number base)))
    (if (zerop shan)
	(number-to-string number)
      (s-concat (number-to-string yushu)
		(do-cover-number-to-string shan base)))))

(provide 'allergies)
;;; allergies.el ends here
