import { forwardRef } from "react";
import Label from "./Label";
const InputForm = forwardRef((props, ref) => {
  const { title, placeholder, name, type = "text" } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <input
        type={type}
        name={name}
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-80"
        placeholder={placeholder}
        id={name}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
