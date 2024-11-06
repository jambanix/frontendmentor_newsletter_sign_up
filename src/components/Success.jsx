import imgSuccess from "/images/icon-success.svg"
import {Button} from "./Button"

export const Success = ({ className, email, onClick }) => {
  return (
    <section className="py-4 px-8 flex flex-col items-center justify-center">
      <img src={imgSuccess} alt="success icon" />
      <h2>Thanks for subscribing!</h2>
      <p className="">A confirmation email has been sent to <span className="font-bold">{email}.</span> Please open it and click the button inside to confirm your subcription.</p>
      <Button onClick={onClick}>Dismiss message</Button>
    </section>
  )
}