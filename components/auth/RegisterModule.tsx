import React, { useState } from "react";
import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { IUser } from "@/interfaces/iusers";
import { v4 as generate_random_id } from "uuid";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
//* Styles coming from '_auth-module.scss'

const RegisterModule: React.FC = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<IUser>({
    _id: generate_random_id(),
    user_name: "",
    password: "",
    e_mail: "",
  });

  async function sendMovieData() {
    await axios
      .post("/api/users", userData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => router.push("/auth/login"));
  }

  return (
    <div className="auth">
      <div className="auth-module">
        <h2 className="auth-module-header">Sign Up</h2>
        <div className="auth-module-section">
          <FiUser className="auth-module-section-icon" />
          <input
            type="text"
            id="username"
            name="username"
            value={userData.user_name}
            autoComplete="off"
            placeholder="Username"
            className="auth-module-section-textbox"
            onChange={(e) => setUserData({ ...userData, user_name: e.target.value })}
          />
          {/* <label htmlFor="username" className="auth-module-section-label">User Name</label> */}
        </div>

        <div className="auth-module-section">
          <FiLock className="auth-module-section-icon" />
          <input
            type="text"
            id="password"
            name="password"
            value={userData.password}
            placeholder="Password"
            className="auth-module-section-textbox"
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
          {/* <label htmlFor="password" className="auth-module-section-label">Password</label> */}
        </div>

        <div className="auth-module-section">
          <FiMail className="auth-module-section-icon" />
          <input
            id="mail"
            type="email"
            name="mail"
            value={userData.e_mail}
            autoComplete="off"
            placeholder="E-mail"
            className="auth-module-section-textbox"
            onChange={(e) => setUserData({ ...userData, e_mail: e.target.value })}
          />
          {/* <label htmlFor="mail" className="auth-module-section-label">E-mail</label> */}
        </div>

        <p className="auth-module-routing-text">
          Already registered?
          <Link href="/auth/login">
            <a className="auth-module-routing-text-route">login</a> 
          </Link>
          .
        </p>

        <button className="auth-module-button" onClick={sendMovieData}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RegisterModule;
