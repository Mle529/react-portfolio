import React from "react";
import NavToggler from "../NavToggler/NavToggler";
import NavAboutLink from "../NavAboutLink/NavAboutLink";
import NavPortfolioLink from "../NavPortfolioLink/NavPortfolioLink";
import NavDropdown from "../NavDropdown/NavDropdown";

function Navbar(props) {
    const data = require("../../data/navbar-data");

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-slate">
            <div className="container-lg">
                <a className="navbar-brand" href="/">Michael Le</a>
                <NavToggler />
                <div className="collapse navbar-collapse" id="navbarLinks">
                    <ul className="navbar-nav ml-auto">
                        <NavAboutLink active={(props.active === "about") ? "true" : "false"} />
                        <NavPortfolioLink active={(props.active === "portfolio") ? "true" : "false"} />
                        <NavDropdown data={data} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;