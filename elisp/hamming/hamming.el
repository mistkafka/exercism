;;; hamming.el --- Hamming (exercism)

;;; Commentary:

;;; Code:

(defun hamming-distance (DNAa DNAb)
  (let ((distance 0)
	(dna-length (length DNAa))
	(index 0))
    (when (not (equal dna-length (length DNAb)))
      (error "the length of two DNA is not the same"))
    (setq DNAa (s-split "" DNAa t)
	  DNAb (s-split "" DNAb t))
    (while (< index dna-length)
      (when (not (equal (nth index DNAa) (nth index DNAb)))
	(setq distance (+ distance 1)))
      (setq index (+ index 1)))
    distance))

(provide 'hamming)
;;; hamming.el ends here
