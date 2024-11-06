import { useScreenWidth } from "../hooks/useScreenWidth"

export const Image = ({ className }) => {

  const screenSize = useScreenWidth();

  const imagePath = `/images/illustration-sign-up-${screenSize}.svg`

  return (
    <section className={`h-full ${className}`}>
      {/* <div className={`bg-banner-${screenSize} h-full w-full`}></div> */}
      <img src={imagePath} alt="" className="w-full h-full object-cover"/>
    </section>
  )
}