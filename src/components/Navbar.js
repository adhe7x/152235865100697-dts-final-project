import React from "react";
import { Link, useLocation} from "react-router-dom";

function Navbar() {
    
    const location = useLocation();

    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Recipes",
            path: "/recipes"
        },
        {
            name: "Categories",
            path: "/categories"
        },

    ];

    const log = [
       {
            name: "SignIn",
            path: "/signin"
        },
        {
            name: "SignOut",
            path: "/register"
        },
    ]

    return (
        <div className="navbar container">
            <Link to="/" className="logo"><span>myFood</span>Recipes</Link>
            <div className="nav-links">
                <ul>
                    {links.map(
                        (link) => (
                            <Link to={link.path} className={ location.pathname === link.path && "active" }><li>{link.name}</li></Link>
                        )
                    )
                    }
                    <Link to={log[1].path}><li>{log[1].name}</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;