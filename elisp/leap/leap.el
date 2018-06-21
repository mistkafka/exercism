;;; leap.el --- Leap exercise (exercism)

;;; Commentary:

;;; Code:

(defun leap-year-p (year)
  (or (zerop (% year 400))
      (and (zerop (% year 4))
	   (not (zerop (% year 100))))
      ))

(provide 'leap)
;;; leap.el ends here
