import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar container">
            <Link to="/" className="logo"><span>myFood</span>Recipes</Link>
            <div className="nav-links">
                <ul>
                    <Link to="/" className="active"><li>Home</li></Link>
                    <Link to="/recipes"><li>Recipes</li></Link>
                    <Link to="/categories"><li>Categories</li></Link>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar;