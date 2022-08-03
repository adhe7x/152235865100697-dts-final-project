import React from "react";

function Register() {

    return (
        <div className="main container">
            <div className="login">
            <form>
                <h3>Register</h3>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit">Register</button>
                <h4>
                    <span className="account">Already have an Account? </span>
                    <span className="signup">SignIn</span>
                </h4>
            </form>
            </div>
            
        </div>
    )
}

export default Register;