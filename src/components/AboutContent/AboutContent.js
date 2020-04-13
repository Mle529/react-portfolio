import React from "react";
import Bio from "../Bio/Bio";
import Headshot from "../Headshot/Headshot";
import PortfolioBtn from "../PortfolioBtn/PortfolioBtn";
import ResumeBtn from "../ResumeBtn/ResumeBtn.js";

function AboutContent() {
    const data = require("../../data/about-data");

    return (
        <section>
            <div className="container-lg">
                <div className="row my-5 mx-1">
                    <div className="d-none d-sm-block col-lg-5 px-0">
                        <Headshot photo={data.photo} />
                    </div>
                    <div className="about-me col-lg-7">
                        <Bio bio={data.bio} />
                        <div id="info">
                            <PortfolioBtn />
                            <ResumeBtn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutContent;