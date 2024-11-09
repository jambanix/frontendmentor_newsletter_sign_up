import { forwardRef, useImperativeHandle, useRef } from "react"

export const Button = forwardRef(({ children, className, ...props }, ref) => {

  const btnRef = useRef(ref);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        btnRef.current.focus();
      }
    }
  }, []);

  return (
    <button ref={btnRef} className={`${className} rounded-lg flex items-center justify-center bg-dark-navy text-white text-sm font-semibold h-12 w-full hover:bg-gradient-to-b from-gradient1-start to-gradient1-stop hover:shadow-gradient1-stop transition-all focus:outline-none focus:bg-gradient-to-b from-gradient1-start to-gradient1-stop`} {...props}>{children}</button>
  )

});