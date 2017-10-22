import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 25.793853, lng: -80.329233 }}
        >
          {this.props.isMarkerShown && <Marker position={{ lat: 25.793853, lng: -80.329233 }} />}
        </GoogleMap>
      </div>
    )
  }
}

export default withScriptjs(withGoogleMap(Map));