import { useScreenWidth } from "../hooks/useScreenWidth"

export const Image = ({ className }) => {

  const screenSize = useScreenWidth();

  const imagePath = `./images/illustration-sign-up-${screenSize}.svg`

  return (
    <section className={`h-full ${className}`}>
      <img src={imagePath} alt="" className="w-full h-full object-cover"/>
    </section>
  )
}