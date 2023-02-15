import { NavLink , useLocation } from "react-router-dom";

const linklist = [
    {
        path: "/",
        lable: "Home"
    },
    {
        path: "/companys",
        lable: "Unternehmen"
    },
    {
        path: "/company/add",
        lable: "Neu +"
    }
]


const HomeNavigation = () => {
    return (
        <nav className="home-navigation">
            <div className="home-navigation--name">
                <NavLink to={linklist[0].path}>
                   NAME / {linklist[1].lable}
                </NavLink>
            </div>
            <div className="home-navigation--links">
               
            </div>
        </nav>)
}


export default HomeNavigation;