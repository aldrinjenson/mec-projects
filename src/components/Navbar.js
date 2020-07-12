import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper green lighten-1">
            <div className="container">
              <NavLink to="/" className="brand-logo">
                MEC Projects
              </NavLink>
              {/* eslint-disable-next-line */}
              <NavLink
                to="#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </NavLink>
              <ul className="right hide-on-med-and-down">
                <li>
                  <NavLink to="/new">Add New Project</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About This WebApp</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink to="/new">Add New Project</NavLink>
        </li>
        <li>
          <NavLink to="/about">About This WebApp</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
