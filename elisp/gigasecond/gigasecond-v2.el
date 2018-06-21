

(defconst one-gigasecond (expt 10 9)
  "One gigasecond in seconds.")

(defconst utc-timezone t
  "use the Universal Time")

(defun from (second minute hour day month year)
  (let* ((time-of-birthday (encode-time second minute hour day month year utc-timezone))
	 (time-of-gigasecond (time-add time-of-birthday one-gigasecond))
	 (decoded-time (decode-time time-of-gigasecond utc-timezone)))
       (butlast decoded-time 3)))

(provide 'gigasecond)
