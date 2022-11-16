/* eslint-disable react/no-unescaped-entities */
import {Formik, Form, Field, ErrorMessage} from "formik";
import Link from "next/link";
import {useState} from "react";
import {registerInitialValues, registerValidationSchema} from "../Schema";
import ShowPwdIcon from "./Icons/ShowPwdIcon";
import UnShowPwdIcon from "./Icons/UnShowPwdIcon";

const Register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassWord] = useState(false);
  return (
    <div className="sm:bg-slate-50 p-10 sm:flex flex-col justify-center items-center min-w-full min-h-screen">
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <div className="card bg-white !border-none">
              <Form className="mx-auto sm:w-[400px]">
                {" "}
                <h1 className=" text-3xl mb-2">Sign up with your email</h1>
                <p className="mb-8 text-sm text-slate-400">
                  Already have an account? <Link href="/login">Sign in</Link>{" "}
                </p>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="w-full"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-8 ">
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="w-full"
                    />
                    <span
                      className=" absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer"
                      onClick={() => {
                        setShowPassWord(!showPassword);
                      }}
                    >
                      {showPassword ? <ShowPwdIcon /> : <UnShowPwdIcon />}
                    </span>
                  </div>

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      name="agreeServiceAndPrivacyPolicy"
                      id="agreeServiceAndPrivacyPolicy"
                    />
                    <label
                      htmlFor="agreeServiceAndPrivacyPolicy"
                      className="ml-2 text-xs"
                    >
                      I agree to the <Link href="/#">Terms of Service</Link> and{" "}
                      <Link href="/#">Privacy Policy</Link>
                    </label>
                  </div>
                  {formik.touched.agreeServiceAndPrivacyPolicy &&
                    formik.errors.agreeServiceAndPrivacyPolicy && (
                      <div className="text-red-500">
                        {formik.errors.agreeServiceAndPrivacyPolicy}
                      </div>
                    )}
                </div>
                <div className="mb-4 ">
                  <button
                    className={
                      formik.isValid &&
                      formik.dirty &&
                      formik.values.agreeServiceAndPrivacyPolicy
                        ? "primary-button"
                        : "disabled-button"
                    }
                    disabled={
                      !formik.isValid ||
                      !formik.dirty ||
                      !formik.values.agreeServiceAndPrivacyPolicy
                    }
                  >
                    Continue
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
