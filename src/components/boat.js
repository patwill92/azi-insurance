import React, {Component} from 'react';

class Boat extends Component {
  render() {
    return (
        <div id="boat-insurance-component">
            <h1 className="py-5">Boat Insurance</h1>
            <div className="mx-5 p-2" style={{backgroundColor: '#cccccc', borderRadius: '5px', height: '300px'}}>
              <h4>Have us protect your boat so you can focus on spending a great day with your friends and family</h4>
              <div className="py-3">
                Facts you need to know about boat insurance:
                <ul style={{marginLeft: '-22px', marginTop: '10px'}}>
                  <li className="py-2">Boat policy covers you for liability if someone is injured on your watercraft</li>
                  <li className="py-2">Your boat policy gives you the choice between cash value (agreed value) or replacement cost in case of a total loss</li>
                </ul>
              </div>
            </div>
        </div>

    );
  }
}

export default Boat;