import React, { useState, useEffect, useContext } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { IUser } from "@/interfaces/iusers";
import { Context } from "../../context/state";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { loginSchema } from "../../yup/login";
import Link from "next/link";
import axios from "axios";
import JWT from "jsonwebtoken";
//* Styles coming from '_auth-module.scss'

const LoginModule: React.FC = () => {
  const { currentUser, setCurrentUser }: any = useContext(Context);
  const router = useRouter();

  const handleLogIn = async () => {
    const credentials = values;
    await axios.post("/api/auth/login", credentials)
               .then((res_as_user_token) => {
                //  console.log(JWT.decode(res_as_user_token.data));
                 localStorage.setItem("EncodedUserDataJWT", res_as_user_token.data);                 
                 setCurrentUser(JWT.decode(res_as_user_token.data));
               })
               .then(() => router.push("/"))
               .catch((err) => console.log(err));               
  };

  const handleLogOut = async () => {
    localStorage.removeItem("EncodedUserDataJWT");
    setCurrentUser(null);
  };

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleLogIn,
  });

  return (
    <div className="auth">
      <form className="auth-module" onSubmit={handleSubmit}>
        <h2 className="auth-module-header">Login</h2>
          <div className="auth-module-section">
            <FiUser className="auth-module-section-icon" />
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              autoComplete="off"
              placeholder="Username"
              className="auth-module-section-textbox"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && <p className="auth-module-section-error">{errors.username}</p>}
            {/* <label htmlFor="username" className="auth-module-section-label">User Name</label> */}
          </div>

          <div className="auth-module-section">
          <FiLock className="auth-module-section-icon" />
            <input
              type="password"
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

          <p className="auth-module-routing-text">
            New audience?
            <Link href="/auth/register">
              <a className="auth-module-routing-text-route">sign up</a> 
            </Link>
            .
          </p>

          <button className="auth-module-button" disabled={isSubmitting}>
            Log In
          </button>

          {/* <button className="auth-module-button" onClick={handleLogOut}>
            Log Out
          </button> */}
        </form>
    </div>
  );
};

export default LoginModule;
