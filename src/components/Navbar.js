import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg p-3 w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="brand">Skye</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 width80 justify-content-end">
            <li className="nav-item se me-3">
              <Link className="nav-link se me-2" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item se me-2">
              <Link className="nav-link" aria-current="page" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item se">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
