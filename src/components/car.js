import React, {Component} from 'react';

class Car extends Component {
  render() {
    return (
        <div id="car-insurance-component">
          <h1 className="py-5">Car Insurance</h1>
          <div className="mx-5 p-2" style={{backgroundColor: '#cccccc', borderRadius: '5px', height: '300px'}}>
            <h4>Get insured by a team that loves your car just as much as you</h4>
            <div className="py-3">
              Facts you need to know about car insurance:
              <ul style={{marginLeft: '-22px', marginTop: '10px'}}>
                <li className="py-2">Driver must have a personal injury protection of at least $10,000</li>
                <li className="py-2">Drivers must have Bodily injury limits of at least $10,000 per person and $20,000 per accident</li>
                <li className="py-2">Drivers must have a property damage liability of atleast $10,000</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default Car;