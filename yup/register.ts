import * as Yup from "yup";

export const registerSchema = Yup.object({
  user_name: Yup.string()
    .required("User name is required.")
    .min(3, "Full name must be at least 3 characters."),

  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters."),

  e_mail: Yup.string()
    .required("E-mail is required.")
    .email("E-mail is invalid.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Inappropriate email entry."
    ),

  // confirmPassword: Yup.string()
  //   .required("Confirm password is required.")
  //   .nullable()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match."),
});
