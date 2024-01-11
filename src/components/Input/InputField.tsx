import React, { forwardRef } from "react";
import { ErrorMessage, useField } from "formik";

import { cn } from "@/lib/utils";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = forwardRef<
  HTMLInputElement,
  InputFieldProps
>(({ label, name, type, placeholder, className, ...props }, ref) => {
  const [, meta] = useField(name);
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>

      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
          { "border-red-500": meta.error },
          className
        )}
        ref={ref}
        {...props}
      />
      <ErrorMessage
        name={name}
        className="text-xs text-red-500 italic font-medium"
        component="div"
      />
    </div>
  );
});

export default InputField;
