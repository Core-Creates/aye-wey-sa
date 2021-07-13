import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// import GoogleMapReact from 'google-map-react';
// import { GoogleMap, LoadScript } from 'react-google-maps';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's

class Hiking extends Component {
  state = {
    //   todos
  };

  render() {
    // const google = window.google;

      const hikingLayer = new window.google.maps.KmlLayer({
        url: " https://opendata-cosagis.opendata.arcgis.com/datasets/ed00038f9f5c44988eb38a0bafd9a227_0.kml?outSR=%7B%22latestWkid%22%3A2278%2C%22wkid%22%3A102740%7D",
        map: Map,
      });

    return (

      <div id = "hiking">
      {/* this is the hiking page */}

      <GoogleApiWrapper></GoogleApiWrapper>

      <Map
          google={window.google}
          zoom={12}
          // style={mapStyles}
          initialCenter={{ lat: 29.4241, lng: -98.4936}}
        />

    </div>

    );


  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCtFzdbJA-H72PJ4sIY0gGWT9mDwEloPkA")
})(Hiking);