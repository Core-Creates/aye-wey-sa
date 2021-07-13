import { render } from "@testing-library/react";
import ReactTyped, { Component } from "react";
import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

class Biking extends Component {
  state{
  // to do
}
render() {
  return (
    <div id="biking">
      this is the biking page

      <LoadScript
        googleMapsApiKey={process.env.GOOLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>


  );
}
}

export default Biking;