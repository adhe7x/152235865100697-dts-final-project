import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function Login() {
    const navigate = useNavigate();

    const [ errorMessage, setErrorMessage ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="main container">
            <div className="login">
            <form onSubmit={handleSubmit} noValidate>
                <h3>Sign In</h3>
                <input
                    required="required"
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                />
                <input
                    required="required"
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                />
                <span className="error-message">{errorMessage}</span>
                <button type="submit">Sign In</button>
                <h4>
                    <span className="account">Don't have an Account? </span>
                    <Link to="/register">
                        <span className="signup">SignUp</span>
                    </Link>
                </h4>
            </form>
            </div>
            
        </div>
    )
}

export default Login;