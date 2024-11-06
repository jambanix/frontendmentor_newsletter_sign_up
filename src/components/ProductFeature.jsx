import iconList from "/images/icon-list.svg";

export const ProductFeature = ({children}) => {
  return (
    <div className="flex gap-3">
      <img src={iconList} alt="tick icon" className="h-5 w-5" />
      <p>{children}</p>
    </div>
  )
}