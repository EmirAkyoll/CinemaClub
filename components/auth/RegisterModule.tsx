import React from "react";
//* Styles coming from '_auth-module.scss'

const RegisterModule = () => {
  return (
    <div className="auth-module">
      <div className="auth-module-section">
        <label for="username" className="auth-module-section-label">User Name</label>
        <input
          type="text"
          id="username"
          name="username"
          className="auth-module-section-textbox"
          placeholder="Enter your user name.."
        />
      </div>

      <div className="auth-module-section">
        <label for="password" className="auth-module-section-label">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          className="auth-module-section-textbox"
          placeholder="Enter your password.."
        />
      </div>

      <div className="auth-module-section">
        <label for="password" className="auth-module-section-label">E-mail</label>
        <input
          type="email"
          id="password"
          name="password"
          className="auth-module-section-textbox"
          placeholder="Enter your e-mail.."
        />
      </div>

      <p className='auth-module-text'>
        Already registered? 
        <a href="#" className='auth-module-text-route'>login</a>.
      </p>

      <button className="auth-module-button">Sign Up</button>
    </div>
  );
};

export default RegisterModule;
