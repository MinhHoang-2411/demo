/* eslint-disable react/no-unescaped-entities */
import {Formik, Form} from "formik";
import Link from "next/link";
import {useState} from "react";
import * as Yup from "yup";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassWord] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeServiceAndPrivacyPolicy: false,
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    agreeServiceAndPrivacyPolicy: Yup.boolean().required(),
  });
  return (
    <div className="sm:bg-slate-50 p-10 sm:flex flex-col justify-center items-center min-w-full min-h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
                  <input
                    type="text"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder="First name"
                    className="w-full"
                    id="firstName"
                  ></input>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder="Last name"
                    className="w-full"
                    id="lastName"
                  ></input>
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500">{formik.errors.lastName}</div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email address"
                    className="w-full"
                    id="email"
                  ></input>
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500">{formik.errors.email}</div>
                  )}
                </div>
                <div className="mb-8 ">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="Password"
                      className="w-full"
                      id="password"
                    />
                    <span
                      className=" absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer"
                      onClick={() => {
                        setShowPassWord(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </span>
                  </div>

                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 ">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="agreeServiceAndPrivacyPolicy"
                      onChange={formik.handleChange}
                      checked={formik.values.agreeServiceAndPrivacyPolicy}
                      id="agreeServiceAndPrivacyPolicy"
                    ></input>
                    <label className="ml-2 text-xs">
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

export default login;
