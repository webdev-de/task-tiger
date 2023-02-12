import { NavLink, useLocation } from "react-router-dom";
import INFO from "../../helper/settings";


const linklist = [
    {
        path: "/",
        lable: "Home"
    },
    {
        path: "/companys",
        lable: "Unternehmen"
    }
]

function Navbar() {
    return (
        <>
            <NavLink to={linklist[0].path}>
                {linklist[0].lable}
            </NavLink>

            <NavLink to={linklist[1].path}>
                {linklist[1].lable}
            </NavLink>
        </>
    );
}


const NavigationHome = () => {
    return (
        <nav className="home-navigation">
            <div className="home-navigation--name">
                <NavLink to={linklist[0].path}>
                    {INFO.name}
                </NavLink>
            </div>
            <div className="home-navigation--links">
                <Navbar />
            </div>
        </nav>)
}

export default NavigationHome;