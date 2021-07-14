import React, { Component } from 'react';
// import { KmlLayer } from "react-google-maps";
// import {GoogleMap,useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
import projects from '../add.json';

// import todos from '../footer/footer';  this is where we will need to import different API's


class Entertainment_Venues extends Component {


  render() {
    const libraries = ["places"];

    const center = {
      lat: 29.4241, lng: -98.4936,
    };


    const style = {
      margin: '20px',
      width: '50%',
      height: '55%'
    }

    return (
      <div id="Entertainment_Venues">

        
        <GoogleApiWrapper></GoogleApiWrapper>
      <Map
          google={window.google}
          zoom={10}
          style={style}
          initialCenter={center}
         
        >
         
        </Map>
        <h1>Entertainment Venues Page</h1>

        
      </div>


    );
  }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyCtFzdbJA-H72PJ4sIY0gGWT9mDwEloPkA")
})(Entertainment_Venues);