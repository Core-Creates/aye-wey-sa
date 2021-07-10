import React, { Component } from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's

class Hiking extends Component {
  state = {
    //   todos
  };

  render() {
    let map;
    return (


      function initMap() {

        const google = window.google

        map = new google.maps.Map(document.getElementById("map"), {
          scaleControl: true,
          zoom: 4,
          // center: { lat: +lat, lng: +lng },
        });
        // NOTE: This uses cross-domain XHR, and may not work on older browsers.
        map.data.loadGeoJson(
          " https://opendata-cosagis.opendata.arcgis.com/datasets/55234cc46b954f69a659711b240bdf59_0.geojson?outSR=%7B%22latestWkid%22%3A2278%2C%22wkid%22%3A102740%7D"
        );
      }

      // loadMapAt(new google.maps.LatLng(geo.lat, geo.lng));


    );

  }
}

export default Hiking;