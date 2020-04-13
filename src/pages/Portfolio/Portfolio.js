import React from "react";
import Header from "../../components/Header/Header.js";
import Project from "../../components/Project/Project.js";
import Footer from "../../components/Footer/Footer.js";

function Portfolio() {

    const projectsData = require("../../data/projects-data.js");

    projectsData.projects.sort((a, b) => a.order - b.order);

    for (let i = 0; i < projectsData.projects.length; i++) {
        if (i % 2 === 0) {
            projectsData.projects[i].reversed = false;
        }
        else {
            projectsData.projects[i].reversed = true;
        }
    }

    return (
        <>
            <div className="content">
                <Header active="/react-portfolio/portfolio" />
                <section>
                    <div className="container-lg">
                        {
                            projectsData.projects.map(project => {
                                return <Project data={project} key={project.order} />;
                            })
                        }
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Portfolio;