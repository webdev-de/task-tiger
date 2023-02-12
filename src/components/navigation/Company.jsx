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
    },{
        path: "/company/add",
        lable: "Neu +"
    }
]

function Navbar() {
    return (
        <>
            <NavLink to={linklist[2].path}>
                {linklist[2].lable}
            </NavLink>
        </>
    );
}


const NavigationCompany = () => {
    return (
        <nav className="home-navigation">
            <div className="home-navigation--name">
                <NavLink to={linklist[0].path}>
                    {INFO.name} / {linklist[1].lable}
                </NavLink>
            </div>
            <div className="home-navigation--links">
                <Navbar />
            </div>
        </nav>)
}

export default NavigationCompany;