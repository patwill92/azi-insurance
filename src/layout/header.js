import React, {Component} from "react";
import logo from "../images/azimutlogo.png";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div id="header-layout">
        <nav id="header-1" className="navbar navbar-expand-lg justify-content-between">
          <a className="navbar-brand" href="/">
            <img id="azimut-logo"src={logo} alt="Azimut Insurance"/>
          </a>
          <div id="navbar-items" className="navbar-nav">
              <div className="dropdown">
                <a className="btn btn-danger dropdown-toggle" href="" role="" id="dropdownMenuLink" data-toggle="dropdown">
                  Insurance
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <Link className="dropdown-item" to="/car">Car</Link>
                  <Link className="dropdown-item" to="/boat">Boat</Link>
                  <Link className="dropdown-item" to="/house">House</Link>
                  <Link className="dropdown-item" to="/life">Life</Link>
                </div>
              </div>
            <Link className="nav-item nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/about">About Us</Link>
            <Link className="nav-item nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/contact">Contact Us</Link>
            <Link className="nav-item nav-link px-4 border border-top-0 border-bottom-0 border-left-0" to="/location">Location</Link>
            <a className="nav-item nav-link px-4" href="https://www.facebook.com/azimutinsurance/" target="_blank" rel="noopener noreferrer">
              <span><i className="fa fa-facebook"></i></span>
            </a>
            <a className="nav-item nav-link px-4" href="https://instagram.com/azimutinsurance" target="_blank" rel="noopener noreferrer">
              <span style={{marginLeft: '-25px'}}><i className="fa fa-instagram"></i></span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;