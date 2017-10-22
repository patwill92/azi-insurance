import React, {Component} from 'react';
import Map from './map'

class Location extends Component {
  render() {
    return (
        <div id="location-component" className="container-fluid component">
          <h1 className="py-5">Locate Us</h1>
          
          <Map
              isMarkerShown
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2JWUeQf4QsSlYg0A4d-AjwRSYrAsOMGg&v=3.exp&libraries=geometry,drawing,places"
          />
        </div>
    );
  }
}

export default Location;