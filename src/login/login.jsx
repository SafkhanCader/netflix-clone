import React, { useState } from 'react';
import './login.css';
import backgroundImage from '../assets/background_banner.jpg';
import netflixLogo from '../assets/logo.png'; // Make sure you have the logo in your assets folder

export default function Login({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    onLogin();
  };

  return (
    <div
      className="login"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="login__overlay">
        {/* Netflix Logo */}
        <div className="login__logo">
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>

        <div className="login__container">
          <h1>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
          <form className="login__form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            {isSignup && <input type="password" placeholder="Confirm Password" required />}
            <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
          </form>
          <p className="login__toggle">
            {isSignup ? 'Already have an account? ' : "New here? "}
            <span onClick={toggleMode}>{isSignup ? 'Sign In' : 'Sign Up now.'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
