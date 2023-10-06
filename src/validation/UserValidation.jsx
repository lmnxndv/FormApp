import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required( "Please enter your first name!"),
  lastName: yup
    .string()
    .required( "Please enter your last name!"),
  email: yup
    .string()
    .email("Invalid email address!")
    .required("Please enter your email address!"),
  phoneNumber: yup
    .string()
    .min(7)
    .required( "Please enter your phone number!"),
});
