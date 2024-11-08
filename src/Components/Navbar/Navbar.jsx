import React from "react";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <aside className="sidebar">
        <div className="user-div">
          <h2>Admin Panel</h2>
          <p>
            <FaRegUserCircle />
          </p>
        </div>
        <nav className="navbar">
          <ul>
            <Link to="/">
              <li className={isActive("/") ? "nav-link active" : "nav-link"}>
                Category
              </li>
            </Link>
            <Link to="/additems">
              <li className={isActive("/additems") ? "nav-link active" : "nav-link"}>AddItems</li>
            </Link>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
