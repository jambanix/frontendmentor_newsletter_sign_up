import { useScreenWidth } from "../hooks/useScreenWidth"

export const Image = ({ className }) => {

  const screenSize = useScreenWidth();

  const filePath = `src/assets/images/illustration-sign-up-${screenSize}.svg`

  return (
    <section className={`h-full ${className}`}>
      <div className={`bg-[url('${filePath}')] h-full w-full`}></div>

    </section>
  )
}