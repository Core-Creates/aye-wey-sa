// export default Navbar;
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (  
        <div className={`navbar-menu`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/museums"
              exact
            >
              Link
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/art_galleries"
              exact
            >
              Link
            </NavLink>
          </div>
      </div>     
  );
}
}

export default Navbar;