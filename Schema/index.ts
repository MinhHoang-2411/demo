import * as Yup from "yup";
export const registerInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  agreeServiceAndPrivacyPolicy: true,
};
export const registerValidationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  agreeServiceAndPrivacyPolicy: Yup.boolean().required(),
});

export const loginInitialValues = {
  email: "",
  password: "",
};
export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});
