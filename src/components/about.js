import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
        <div id="about-component" className="container-fluid component">
          <h1 className="py-5">About Us</h1>
          <div id="about-row" className="row py-5">
            <div id="about1" className="col text-center about-item py-4 mr-5">
              <h6>Family Matters</h6>
              A family owned business that will work with you to find you the best insurance coverage.
              Azimut Insurance Consultants will strive to create a relationship with their clients.
            </div>
            <div id="about2" className="col text-center about-item py-4 mr-5">
              <h6>Did You Know?</h6>
              Azimut Insurance Consultants work with leading insurance carriers to guarantee that you are receiving the coverage needed at the best price.
            </div>
            <div id="about3" className="col text-center about-item py-4">
              <h6>Close The Deal</h6>
              New to business and filled with excitement,
              we ensure you Azimut Inusrance Consultants will work to find you the best policies to cover your assets
            </div>
          </div>
        </div>
    );
  }
}

export default About;