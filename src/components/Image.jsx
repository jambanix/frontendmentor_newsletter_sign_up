import { useScreenWidth } from "../hooks/useScreenWidth"

export const Image = ({ className }) => {

  const screenSize = useScreenWidth();

  const imagePath = `/images/illustration-sign-up-${screenSize}.svg`

  return (
    <section className={`h-full ${className}`}>
      <div className={`bg-[url('${imagePath}')] h-full w-full`}></div>

    </section>
  )
}