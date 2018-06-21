;;; hello-world.el --- Hello World Exercise (exercism)

;;; Commentary:

;;; Code:
(defun hello (&optional to)
  "return 'Hello, `TO'!'"
  (unless to
    (setq to "World"))
  (format "Hello, %s!" to))

(provide 'hello-world)
;;; hello-world.el ends here
