import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const headerStyles = {
    border: "1px solid #000000",
    padding: "15px 30px",
    backgroundColor: "#cccccc"
}

const navStyles = {
    border: "1px solid #cccccc"
}

const Layout = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <>
            <header style={headerStyles}>Selected User: {`${currentUser.firstName} ${currentUser.lastName}`}</header>
            <nav style={navStyles}>
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