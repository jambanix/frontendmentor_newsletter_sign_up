export const Button = ({ children, props }) => {
  return (
    <button className="rounded-lg flex items-center justify-center bg-dark-navy text-white text-sm font-semibold h-12 w-full" {...props}>{children}</button>
  )
}