
export const Body = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-3xl grid ${className}`}>
      {children}
    </div>
  )
}