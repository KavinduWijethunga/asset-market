import React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";

interface Option {
  value: string;
  key: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default Select;
