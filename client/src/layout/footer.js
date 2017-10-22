import React, {Component} from "react";
// import {Route, Link, Switch} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div id="footer-layout" className="row px-3">
        <div id="footer-page-links" className="col text-left"><h1>FOOTER</h1></div>
        <div id="footer-social-media-links" className="col text-center">
          <a href="https://facebook.com"><span className="px-1"><i className="fa fa-facebook-square"></i></span></a>
          <a href="https://twitter.com"><span className="px-1"><i className="fa fa-twitter-square"></i></span></a>
          <a href="https://https://plus.google.com"><span className="px-1"><i className="fa fa-google-plus-square"></i></span></a>
          <a href="https://pinterest.com"><span className="px-1"><i className="fa fa-pinterest-square"></i></span></a>
          <a href="https://instagram.com"><span className="px-1"><i className="fa fa-instagram"></i></span></a>
        </div>
        <div id="footer-terms-conditions-links" className="col text-right"></div>
      </div>
    );
  }
}

export default Footer;