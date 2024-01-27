import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
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