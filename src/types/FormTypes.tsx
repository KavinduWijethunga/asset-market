"use client";
{
  /* ------------------------------------ Types ------------------------------------------*/
}

//sign-up form types
export interface signUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

{
  /* ------------------------------------export initial values ------------------------------------------*/
}

//sign-up form initial values
export const initialSignUpFormValues: signUpFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
