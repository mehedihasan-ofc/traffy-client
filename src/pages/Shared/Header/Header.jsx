import { Button, Collapse, IconButton, Navbar } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import NavList from "../../../components/NavbarWithMegaMenu/NavList/NavList";

const Header = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="my-container px-4 py-3 shadow-none">
            <div className="flex items-center justify-between text-blue-gray-900">

                <Link to="/">
                    <img className="w-24 h-12 md:w-32 md:h-16 object-contain" src={Logo} alt="Logo" />
                </Link>

                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="blue-gray">
                        Log In
                    </Button>
                    <Button size="sm" className="bg-primary rounded">
                        Get Started
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <IoClose className="h-6 w-6" />
                    ) : (
                        <FaBarsStaggered className="h-6 w-6" />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Log In
                    </Button>

                    <Button size="sm" className="bg-primary rounded" fullWidth>
                        Get Started
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default Header;