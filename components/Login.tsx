/* eslint-disable react/no-unescaped-entities */
import {Formik, Form, Field, ErrorMessage} from "formik";
import Link from "next/link";
import {useState} from "react";
import * as Yup from "yup";
import {loginInitialValues, loginValidationSchema} from "../Schema";
import ShowPwdIcon from "./Icons/ShowPwdIcon";
import UnShowPwdIcon from "./Icons/UnShowPwdIcon";

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassWord] = useState(false);

  return (
    <div className="sm:bg-slate-50 p-10 sm:flex flex-col justify-center items-center min-w-full min-h-screen">
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values.email, values.password);
        }}
      >
        {(formik) => {
          return (
            <div className="flex flex-col">
              <div className="card  bg-white !border-none">
                <Form className="mx-auto sm:w-[400px]">
                  {" "}
                  <h1 className=" text-3xl  mb-2">Sign in with your email</h1>
                  <p className="mb-8 text-sm text-slate-400">
                    Don't have an account? <Link href="/register">Sign up</Link>{" "}
                  </p>
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
                        placeholder="Email address"
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
                  <div className="mb-4 ">
                    <button
                      className={
                        formik.isValid && formik.dirty
                          ? "primary-button"
                          : "disabled-button"
                      }
                      disabled={!formik.isValid && !formik.dirty}
                    >
                      Continue
                    </button>
                  </div>
                </Form>
              </div>
              <Link className="mt-8 text-sm" href="/#">
                Forgot your password?
              </Link>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
