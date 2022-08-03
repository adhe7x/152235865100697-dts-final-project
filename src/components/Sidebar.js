import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';

function Sidebar({links, close}) {

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
    
    const location = useLocation();

    return (
        <div onClick={close}>
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
    )
}

export default Sidebar;