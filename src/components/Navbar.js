import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { auth } from "../config/firebase";
import Sidebar from './Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';

function Navbar() {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    const [showSidebar, setShowSidebar] = useState(false);
    
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

    function closeSidebar() {
        setShowSidebar(false);
    }

    return (
        
        <>
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
                    { user ?
                        <Link to={onLogout} onClick={onLogout}><li>SignOut</li></Link>
                        :
                        <Link to="/login"><li>SignIn</li></Link>}
                </ul>
            </div>
            <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar active" : "sidebar"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="sidemenu">
                {showSidebar && <Sidebar close={closeSidebar} links={links} />}                
            </div>
        </div>

        </>
    )
}

export default Navbar;