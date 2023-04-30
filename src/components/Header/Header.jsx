import React from "react";
import logoWhite from './../../assets/Logo/logo_white.png';
import userIcon from '../../assets/batman.png'
import { FaSearch, FaBell, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({cartCount}) {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-alpha px-3">
      <Link to="/" className="navbar-brand">
        <img src={logoWhite} alt="Logo" height="40" />
      </Link>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link text-white text-underline mt-2" href="#">
              Go To Marketpage
            </a>
          </li>
        </ul>
        <form className="form-inline ms-auto search-bar me-3 ">
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
            />
            <div className="input-group-append">
              <button className="btn btn-light rounded-0 rounded-end text-beta" type="button">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item px-2">
            <a className="nav-link text-white bg-beta px-2 rounded icon-width" href="#">
              <FaBell />
              <span className="badge badge-pill  notification-count">3</span>
            </a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-white bg-beta px-2 rounded icon-width" href="#">
              <FaShoppingCart />
              <span className="badge badge-pill  notification-count">{cartCount}</span>
            </a>
          </li>
          <li className="nav-item dropdown px-2">
            <a
              className="nav-link text-black bg-white rounded icon-width"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={userIcon} alt="User Icon" className="w-icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
