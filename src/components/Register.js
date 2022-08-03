import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../config/firebase";

function Register() {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="main container">
            <div className="login">
            <form onSubmit={handleSubmit} noValidate>
                <h3>Register</h3>
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
                    autoComplete="new-password"
                />
                <span className="error-message">{errorMessage}</span>
                <button type="submit">Register</button>
                <h4>
                    <span className="account">Already have an Account? </span>
                    <Link to="/login">
                        <span className="signup">SignIn</span>
                    </Link>
                </h4>
            </form>
            </div>
            
        </div>
    )
}

export default Register;