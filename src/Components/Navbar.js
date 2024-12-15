import React, { useState } from "react";
import Logo from "../Assets/blu.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "Hall Expo",
            icon: <CommentRoundedIcon />,
        },
        {
            text: "About Us",
            icon: <InfoIcon />,
        },
        {
            text: "Sign in",
            icon: <PhoneRoundedIcon />,
        },

    ]


    return <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">Hall Expo</a>
            <a href="">About Us</a>
            <a href="">Sign In</a>

            <button className="primary-button">Sign Up</button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>

    </nav>;

};

export default Navbar