import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const Layout = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    return (
        <>
            <header>{`${currentUser.firstName} ${currentUser.lastName}`}</header>
            <nav>
                <ul>
                    <li><Link to="/">Landing Page</Link></li>
                    <li><Link to="/form">Form Page</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;