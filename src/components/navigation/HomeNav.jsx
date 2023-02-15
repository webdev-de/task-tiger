import { NavLink, useLocation } from "react-router-dom";

import AppSettings from "../../global/AppSettings";

const links = [
    {
        path: "/",
        lable: "Home"
    },
    {
        path: "/companys",
        lable: "Unternehmen"
    }
]

const LinkList = () => links.map((link, index) => <NavLink key={index} to={link.path}>{link.lable}</NavLink>);

const HomeNav = () => {

    const { appname } = AppSettings;

    return (
        <nav className="home-navigation">
            <div className="home-navigation--name">
                <NavLink to="/">
                    {appname}
                </NavLink>
            </div>
            <div className="home-navigation--links">
                <LinkList />
            </div>
        </nav>
    )
}

export default HomeNav;