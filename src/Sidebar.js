import React from "react";
import { NavLink } from "react-router-dom";
import authStore from "./stores/authStore";
import { observer } from "mobx-react";

// Logo
import logo from "./assets/theindex.svg";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books">BOOKS</NavLink>
        </h4>
        {authStore.user ? (
          <h4 className="menu-item" onClick={authStore.logout}>
            <NavLink to="/login">Logout</NavLink>
          </h4>
        ) : (
          <div>
            <h4 className="menu-item active">
              <NavLink to="/login">Login</NavLink>
            </h4>
            <h4 className="menu-item">
              <NavLink to="/signup">Signup</NavLink>
            </h4>
          </div>
        )}
      </section>
    </div>
  );
};

export default observer(Sidebar);
