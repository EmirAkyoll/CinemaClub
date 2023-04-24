import React, { useState, useEffect, useContext } from "react";
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
    await axios.post("/api/auth/login", credentials)
               .then((res_as_user_token) => {
                  localStorage.setItem('EncodedUserDataJWT', res_as_user_token.data)
                  setCurrentUser(res_as_user_token.data)
                })  
               .then(() => router.push('/'))
               .catch(err => console.log(err))
  };

  const handleLogOut = async () => {
    localStorage.removeItem('EncodedUserDataJWT')
    setCurrentUser(null)
  };

  return (
    <div className='auth-module'>
      <div className='auth-module-section'>
        <label htmlFor="username" className='auth-module-section-label'>User Name</label>
        <input 
            type="text" 
            id="username" 
            name="username" 
            value={username}
            className='auth-module-section-textbox'
            placeholder='Enter your user name..'
            onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className='auth-module-section'>
        <label htmlFor="password" className='auth-module-section-label'>Password</label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            className='auth-module-section-textbox'
            placeholder='Enter your password..'
            onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <p className='auth-module-text'>
        New audience? 
        <Link href="/auth/login" className='auth-module-text-route'>sign up</Link>.
      </p>

      <button className='auth-module-button' onClick={handleLogIn}>
        Log In
      </button>
      
      <button className='auth-module-button' onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  )
}

export default LoginModule
