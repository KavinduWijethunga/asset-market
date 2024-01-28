import React from "react";
import { Field, FieldProps, ErrorMessage } from "formik";

interface Option {
  value: string;
  key: string;
}

interface RadioButtonsProps {
  label: string;
  name: string;
  options: Option[];
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <Field name={name}>
        {(formik: FieldProps) => {
          const { field } = formik;
          return options.map((option) => (
            <div key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                {...rest}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </div>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default RadioButtons;
