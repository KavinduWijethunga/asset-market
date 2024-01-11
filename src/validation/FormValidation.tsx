import * as yup from "yup";

export const signUpValidationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirmation Password is required"),
});
