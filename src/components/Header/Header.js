import React from "react";
import Navbar from "../Navbar/Navbar.js";

function Header(props) {

    return (
        <header>
            <Navbar active={props.active} />
        </header>
    );
}

export default Header;