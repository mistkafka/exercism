;;; gigasecond.el --- Gigasecond exercise (exercism)

;;; Commentary:
;; Calculate the date one gigasecond (10^9 seconds) from the
;; given date.
;;
;; NB: Pay attention to  Emacs' handling of time zones and dst
;; in the encode-time and decode-time functions.

;;; Code:

(require 's)

(defconst gigasecond (expt 10 9))

(defun from (second minute hour day month year)
  "Return the moment of some one live 10^9 seconds. the artuments is the one's birth moment"
  (let* ((birthday-date (format "%d-%d-%d %d:%d:%d" year month day hour minute second))
	 (birthday-time (date-to-time birthday-date))
	 (gigasecond-time (time-add birthday-time gigasecond))
	 (gigasecond-date (format-time-string "%S %M %H %d %m %Y" gigasecond-time t))
	 (result (mapcar 'string-to-number (s-split " " gigasecond-date))))
    result))

(provide 'gigasecond)
;;; gigasecond.el ends here
