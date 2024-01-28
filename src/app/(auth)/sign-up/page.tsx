"use client";
import { initialSignUpFormValues } from "@/types/FormTypes";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { signUpValidationSchema } from "@/validation/FormValidation";
import InputField from "@/components/Input/InputField";
import FormikController from "@/components/Controller/FormikController";
import ClientOnly from "@/components/Client/ClientOnlyWrapper";

const SignUp = () => {
  const handleSubmit = (values: any) => {
    // Your form submission logic here
  };

  return (
    <ClientOnly>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-in"
            >
              Already have an account? Sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <Formik
              initialValues={initialSignUpFormValues}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="grid gap-2">
                  <div className="grid gap-2 py-2">
                    <FormikController
                      control="input"
                      type="email"
                      label="Email"
                      name="email"
                    />
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default SignUp;
