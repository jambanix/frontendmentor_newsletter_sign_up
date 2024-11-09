import { useForm } from "react-hook-form";
import { ProductFeature } from "./ProductFeature";
import { Button } from "./Button";
import { Input } from "./Input";

export const Form = ({ className, onSubmit }) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  return (
    <section
      className={`${className} h-full flex flex-col gap-6 justify-center items-center px-6 py-10 md:p-8`}
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold lg:text-[50px]">Stay Updated!</h2>
        <p className="text-dark-navy">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className="flex flex-col gap-4">
          <ProductFeature>
            Product discovery and building what matters
          </ProductFeature>
          <ProductFeature>
            Measuring to ensure updates are a success
          </ProductFeature>
          <ProductFeature>And much more!</ProductFeature>
        </div>
      </div>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-6 w-full"
      >
        <Input
          error={errors.email}
          name="email"
          type="email"
          className="w-full"
          {...register("email", {
            pattern: emailRegex, required: true
          })}
        />
        <div className="">
          <Button type="submit">Subscribe to monthly newsletter</Button>
        </div>
      </form>
    </section>
  );
};
