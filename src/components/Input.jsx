import { forwardRef } from "react";

export const Input = forwardRef(({onChange, error, name, placeholder, ...props}, ref) => {

  const inputClassName = error ? "bg-vermillion/30 border-vermillion" : "bg-white border-grey/20"
  const errorMessageClassName = error ? "visible opacity-100" : "invisible opacity-0"

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between w-full">
        <label className="text-xs font-semibold" htmlFor="email">Email address</label>
        <p className={`text-xs font-semibold text-vermillion ${errorMessageClassName}`}>Valid email required</p>
      </div>
      
      <input placeholder={placeholder} ref={ref} name={name} onChange={onChange} className={` px-3 py-1 w-full outline-none border rounded-lg h-12 transition-opacity ${inputClassName}`}/>
    </div>
  )
});