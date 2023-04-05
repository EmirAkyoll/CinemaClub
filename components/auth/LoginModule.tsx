import React from 'react'
//* Styles coming from '_auth-module.scss'

const LoginModule = () => {
  return (
    <div className='auth-module'>
      <div className='auth-module-section'>
        <label htmlFor="username" className='auth-module-section-label'>User Name</label>
        <input 
            type="text" 
            id="username" 
            name="username" 
            className='auth-module-section-textbox'
            placeholder='Enter your user name..'
        />
      </div>

      <div className='auth-module-section'>
        <label htmlFor="password" className='auth-module-section-label'>Password</label>
        <input 
            type="text" 
            id="password" 
            name="password" 
            className='auth-module-section-textbox'
            placeholder='Enter your password..'
        />
      </div>

      <p className='auth-module-text'>
        New audience? 
        <a href="#" className='auth-module-text-route'>sign up</a>.
      </p>

      <button className='auth-module-button'>
        Log In
      </button>
    </div>
  )
}

export default LoginModule
