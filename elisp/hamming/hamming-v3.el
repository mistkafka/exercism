(require 'cl)

(defun hamming-distance (DNAa DNAb)
  (unless (equal (length DNAa) (length DNAb))
    (error "the length of two DNA is not the same"))
  (cl-loop for a across DNAa
	   for b across DNAb
	   count (/= a b)))
