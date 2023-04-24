import React, { useState, useEffect, useContext } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { IUser } from "@/interfaces/iusers";
import { Context } from "../../context/state";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import JWT from "jsonwebtoken";
//* Styles coming from '_auth-module.scss'

const LoginModule: React.FC = () => {
  const { currentUser, setCurrentUser }: any = useContext(Context);

  const router = useRouter();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogIn = async () => {
    const credentials = { username, password };
    await axios
      .post("/api/auth/login", credentials)
      .then((res_as_user_token) => {
        localStorage.setItem("EncodedUserDataJWT", res_as_user_token.data);
        setCurrentUser(res_as_user_token.data);
      })
      .then(() => router.push("/"))
      .catch((err) => console.log(err));
  };

  const handleLogOut = async () => {
    localStorage.removeItem("EncodedUserDataJWT");
    setCurrentUser(null);
  };

  return (
    <div className="auth">
        <div className="auth-module">
        <h2 className="auth-module-header">Login</h2>
          <div className="auth-module-section">
            <FiUser className="auth-module-section-icon" />
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              autoComplete="off"
              placeholder="Username"
              className="auth-module-section-textbox"
              onChange={(e) => setUserName(e.target.value)}
            />
            {/* <label htmlFor="username" className="auth-module-section-label">User Name</label> */}
          </div>

          <div className="auth-module-section">
          <FiLock className="auth-module-section-icon" />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              className="auth-module-section-textbox"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <label htmlFor="password" className="auth-module-section-label">Password</label> */}
          </div>

          <p className="auth-module-routing-text">
            New audience?
            <Link href="/auth/register">
              <a className="auth-module-routing-text-route">sign up</a> 
            </Link>
            .
          </p>

          <button className="auth-module-button" onClick={handleLogIn}>
            Log In
          </button>

          {/* <button className="auth-module-button" onClick={handleLogOut}>
            Log Out
          </button> */}
        </div>
    </div>
  );
};

export default LoginModule;
