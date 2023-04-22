import React, { useState } from "react";
import { IUser } from "@/interfaces/iusers";
import { v4 as generate_random_id } from 'uuid';
import { useRouter } from 'next/router'
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
    await axios.post('/api/users', userData)
               .then(data => console.log(data))
               .catch(err => console.log(err))
               .finally(() => router.push('/auth/login'))
  }

  return (
    <div className="auth-module">
      <div className="auth-module-section">
        <label htmlFor="username" className="auth-module-section-label">User Name</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.user_name}
          className="auth-module-section-textbox"
          placeholder="Enter your user name.."
          onChange={(e) => setUserData({ ...userData, user_name: e.target.value })}
        />
      </div>

      <div className="auth-module-section">
        <label htmlFor="password" className="auth-module-section-label">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={userData.password}
          className="auth-module-section-textbox"
          placeholder="Enter your password.."
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
      </div>

      <div className="auth-module-section">
        <label htmlFor="mail" className="auth-module-section-label">E-mail</label>
        <input
          type="email"
          id="mail"
          name="mail"
          value={userData.e_mail}
          className="auth-module-section-textbox"
          placeholder="Enter your e-mail.."
          onChange={(e) => setUserData({ ...userData, e_mail: e.target.value })}
        />
      </div>

      <p className='auth-module-text'>
        Already registered? 
        <Link href="/auth/login" className='auth-module-text-route'>login</Link>.
      </p>

      <button 
        className="auth-module-button"
        onClick={sendMovieData}
      >
        Sign Up
      </button>
    </div>
  );
};

export default RegisterModule;
