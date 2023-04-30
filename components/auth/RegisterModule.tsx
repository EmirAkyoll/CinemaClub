import React, { useState } from "react";
import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { IUser } from "@/interfaces/iusers";
import { v4 as generate_random_id } from "uuid";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import Link from "next/link";
import axios from "axios";
import { registerSchema } from "../../yup/register";
//* Styles coming from '_auth-module.scss'

const RegisterModule: React.FC = () => {
  const router = useRouter();
  
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      _id: generate_random_id(),
      user_name: "",
      password: "",
      e_mail: "",
      bookmarks: []
    },

    validationSchema: registerSchema,

    onSubmit: sendUserData,
  });

  async function sendUserData() {
    await axios
      .post("/api/users/register", values)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => router.push("/auth/login"));
  }

  return (
    <div className="auth">
      <form className="auth-module" onSubmit={handleSubmit}>
        <h2 className="auth-module-header">Sign Up</h2>
        <div className="auth-module-section">
          <FiUser className="auth-module-section-icon" />
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={values.user_name}
            autoComplete="off"
            placeholder="Username"
            className="auth-module-section-textbox"
            onChange={handleChange}
            onBlur={handleBlur}
          />
           {errors.user_name && touched.user_name && <p className="auth-module-section-error">{errors.user_name}</p>}
          {/* <label htmlFor="username" className="auth-module-section-label">User Name</label> */}
        </div>

        <div className="auth-module-section">
          <FiLock className="auth-module-section-icon" />
          <input
            type="text"
            id="password"
            name="password"
            value={values.password}
            autoComplete="off"
            placeholder="Password"
            className="auth-module-section-textbox"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && <p className="auth-module-section-error">{errors.password}</p>}
          {/* <label htmlFor="password" className="auth-module-section-label">Password</label> */}
        </div>

        <div className="auth-module-section">
          <FiMail className="auth-module-section-icon" />
          <input
            id="e_mail"
            type="email"
            name="e_mail"
            value={values.e_mail}
            autoComplete="off"
            placeholder="E-mail"
            className="auth-module-section-textbox"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.e_mail && touched.e_mail && <p className="auth-module-section-error">{errors.e_mail}</p>}
          {/* <label htmlFor="mail" className="auth-module-section-label">E-mail</label> */}
        </div>

        <p className="auth-module-routing-text">
          Already registered?
          <Link href="/auth/login">
            <a className="auth-module-routing-text-route">login</a> 
          </Link>
          .
        </p>

        <button type="submit" className="auth-module-button" disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterModule;
