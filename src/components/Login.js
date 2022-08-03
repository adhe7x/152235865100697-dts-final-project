import React from "react";

function Login() {

    return (
        <div className="main container">
            <div className="login">
            <form>
                <h3>Sign In</h3>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span className="account">Don't have an Account? </span>
                    <span className="signup">Sign Up</span>
                </h4>
            </form>
            </div>
            
        </div>
    )
}

export default Login;