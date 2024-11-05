
export const Body = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl grid ${className}`}>
      {children}
    </div>
  )
}