import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <Link to="/articles-list">Articles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
