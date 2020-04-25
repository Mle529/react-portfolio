import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import About from "./pages/About/About.js";
import Portfolio from "./pages/Portfolio/Portfolio.js";
import "./assets/css/style.css";

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <ul>
            <li><Link to="/react-portfolio/">About</Link></li>
            <li><Link to="/react-portfolio/portfolio">Portfolio</Link></li>
          </ul>

          <hr />

          <Route exact path="/react-portfolio/" component={About} />
          <Route path="/react-portfolio/portfolio" component={Portfolio} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
