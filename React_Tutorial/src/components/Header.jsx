import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-blue-300 h-18 px-2 sticky top-0">
      <h1 className="font-bold text-2xl">Rabbit's React Apps</h1>
      <nav className="px-3 py-4">
        <ul className="flex items-center gap-3">
          <li>
            <NavLink className="" to="/">
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/jokes">
              Jokes
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/theme-toggle">
              Theme-Toggle
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/user-list">
              User List
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/user-login">
              User Login
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/user-registration">
              {" "}
              User Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
