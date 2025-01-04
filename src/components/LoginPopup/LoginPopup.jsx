import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => { // Correctly destructuring props
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} // Using the function correctly
                        src={assets.cross_icon} 
                        alt="Close" 
                    />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? null : (
                        <input type="text" placeholder="Username" required />
                    )}
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button>{currState === "signup" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrState("signup")}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrState("Login")}>Login Here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
