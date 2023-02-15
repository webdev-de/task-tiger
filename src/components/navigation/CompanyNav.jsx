import { NavLink, useLocation } from "react-router-dom";
import AppSettings from "../../global/AppSettings";

const links = [
    {
        path: "/company/add",
        lable: "Neu +"
    }
]

const LinkList = () => links.map((link, index) => <NavLink key={index} to={link.path}>{link.lable}</NavLink>);

const CompanyNav = () => {
    const { appname } = AppSettings;

    return (
        <nav className="home-navigation">
            <div className="home-navigation--name">
                <NavLink to="/">
                    {appname}
                </NavLink>

                <NavLink to="/companys">
                    Unternehmen
                </NavLink>
            </div>
            <div className="home-navigation--links">
                <LinkList />
            </div>
        </nav>)
}


export default CompanyNav;