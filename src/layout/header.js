import React, {Component} from "react";
import logo from "../images/azimutlogo.png";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div id="nav-header-layout" className="sticky-top">

        {/* NAV BAR */}
        <nav id="nav-header-1" className="navbar navbar-expand-md justify-content-between container">

          {/* BRAND LOGO */}
          <a className="navbar-brand" href="/">
            <img id="azimut-logo"src={logo} alt="Azimut Insurance"/>
          </a>

            {/* NAV MENU */}
            <div id="nav-header-links" className="navbar-nav">
              <div className="dropdown">
                <a className="btn btn-danger dropdown-toggle" href="" role="" id="ddlButton" data-toggle="dropdown">
                  Insurance
                </a>
                <div className="dropdown-menu dropdown-menu-right bg-danger" aria-labelledby="ddlButton">
                  <Link className="dropdown-item" to="/car">Car</Link>
                  <Link className="dropdown-item" to="/boat">Boat</Link>
                  <Link className="dropdown-item" to="/house">House</Link>
                  <Link className="dropdown-item" to="/life">Life</Link>
                </div>
              </div>

              <Link className="nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/about">About Us</Link>
              <Link className="nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/contact">Contact Us</Link>
              <Link className="nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/location">Location</Link>

              {/* FACEBOOK LINK*/}
              <a className="nav-link px-4" href="https://www.facebook.com/azimutinsurance/" target="_blank" rel="noopener noreferrer">
                <span><i className="fa fa-facebook"></i></span>
              </a>

              {/* INSTAGRAM LINK*/}
              <a className="nav-link px-4" href="https://instagram.com/azimutinsurance" target="_blank" rel="noopener noreferrer">
                <span style={{marginLeft: '-25px'}}><i className="fa fa-instagram"></i></span>
              </a>

            </div>

        </nav>

      </div>
    );
  }
}

export default Header;