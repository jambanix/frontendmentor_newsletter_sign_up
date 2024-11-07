import imgSuccess from "/images/icon-success.svg"
import {Button} from "./Button"

export const Success = ({ className, email, onClick }) => {

  const handleClick = () => onClick("");

  return (
    <section onKeyDown={handleEnter} className={`py-4 px-8 flex flex-col gap-8 ${className}`}>
      <div className="flex flex-col justify-center flex-grow gap-10">
        <img src={imgSuccess} alt="success icon" className="h-16 w-16"/>
        <h2 className="text-4xl font-bold">Thanks for subscribing!</h2>
        <p className="">A confirmation email has been sent to <span className="font-bold">{email}.</span> Please open it and click the button inside to confirm your subcription.</p>
      </div>
      <div className="flex flex-grow">
        <Button className="self-end md:self-auto" onClick={onClick}>Dismiss message</Button>
      </div>
    </section>
  )
}