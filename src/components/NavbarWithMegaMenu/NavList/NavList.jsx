import { List, ListItem } from "@material-tailwind/react";
import NavListMenu from "../NavListMenu/NavListMenu";
import { navigationBar } from "../../../db/data";
import { Link } from "react-router-dom";

const NavList = () => {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row md:items-center lg:p-1 font-primary">
            {navigationBar.map((navbar) => (
                navbar?.subMenus ? <NavListMenu navListMenuItems={navbar} key={navbar?.id} /> : (
                    <Link key={navbar?.id} to={navbar?.pathname}>
                        <ListItem className="flex items-center gap-2 py-2 font-normal text-sm">{navbar?.menuName}</ListItem>
                    </Link>
                )
            ))}
        </List>
    );
};

export default NavList;