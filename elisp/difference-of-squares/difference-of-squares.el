;;; difference-of-squares.el --- Difference of Squares (exercism)

;;; Commentary:

;;; Code:

(defun sum-of-squares (n)
  (let ((sum 0))
    (while (>= n 1)
      (setq sum (+ sum (* n n)))
      (setq n (- n 1)))
    sum))

(defun square-of-sums (n)
  (let ((sum 0))
    (while (>= n 1)
      (setq sum (+ sum n))
      (setq n (- n 1)))
    (* sum sum)))

(defun difference (n)
  (- (square-of-sums n) (sum-of-squares n)))


(provide 'difference-of-squares)
;;; difference-of-squares.el ends here
