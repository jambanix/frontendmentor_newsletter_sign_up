import { useForm } from "react-hook-form"
import { ProductFeature } from "./ProductFeature";
import { Button } from "./Button";

export const Form = ({ className, onSubmit }) => {

  const {register, handleSubmit} = useForm();

  return (
    <section className={`${className} w-full h-full flex flex-col gap-6 flex-grow justify-center`}>
 
        <h2 className="text-2xl md:text-4xl font-bold">Stay Updated!</h2>
        <p className="text-dark-navy">Join 60,000+ product managers receiving monthly updates on:</p>
 
      <div className="flex-flex-col-gap-2">
        <ProductFeature>Product discovery and building what matters</ProductFeature>
        <ProductFeature>Measuring to ensure updates are a success</ProductFeature>
        <ProductFeature>And much more!</ProductFeature>
      </div>
      <form noValidate onSubmit={onSubmit} className="flex flex-col flex-grow mt-6">
        <div className="flex flex-col flex-grow">
          <label htmlFor="email">Email address:</label>
          <input name="email" type="email" {...register} />
        </div>
        <div className="w-full">
          <Button type="submit">Subscribe to monthly newsletter</Button>
        </div>
      </form>
    </section>
  )
}