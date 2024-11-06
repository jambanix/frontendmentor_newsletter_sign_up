export const Button = ({ children, ...props }) => {
  return (
    <button className="rounded-lg flex items-center justify-center bg-dark-navy text-white text-sm font-semibold h-12 w-full hover:bg-gradient-to-b from-gradient1-start to-gradient1-stop hover:shadow-gradient1-stop transition-all" {...props}>{children}</button>
  )
}