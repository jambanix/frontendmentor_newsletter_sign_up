export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`${className} rounded-lg flex items-center justify-center bg-dark-navy text-white text-sm font-semibold h-12 w-full hover:bg-gradient-to-b from-gradient1-start to-gradient1-stop hover:shadow-gradient1-stop transition-all focus:outline-none`} {...props}>{children}</button>
  )
}