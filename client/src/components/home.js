import React, {Component} from 'react';
import progressive from '../images/ins-progressive.png';
import united from '../images/ins-uaic.png';
import universal from '../images/ins-universal.png';
import citizens from '../images/ins-citizens.png';
import foremost from '../images/ins-foremost.png';
import mercury from '../images/ins-mercury.png';
import slb from '../images/ins-slb.png';
import starcasualty from '../images/ins-starcasualty.png';
import windhaven from '../images/ins-windhaven.png';
import upc from '../images/ins-upc.png';


class Home extends Component {
  render() {
    return (
        <div id="home-component" className="container-fluid component">
          <h1 className="py-5">Welcome to Azimut</h1>
          <div id="quote" className="container py-5 text-center">
            <h4 className="py-5">Trust is earned, get a free quote today and let us help you save</h4>
            <div><a className="btn btn-danger" href="/contact">Get a Quote</a></div>
          </div>
          <h1 className="py-5">Our Trusted Carriers</h1>
          <div id="insurance-carousel" className="carousel slide py-5 container" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img className="d-block img-fluid c" src={progressive} alt="slide1"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={universal} alt="slide2"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={united} alt="slide3"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={starcasualty} alt="slide4"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={citizens} alt="slide5"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={foremost} alt="slide6"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={mercury} alt="slide7"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={slb} alt="slide8"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={upc} alt="slide9"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={windhaven} alt="slide10"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#insurance-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#insurance-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    );
  }
}

export default Home;