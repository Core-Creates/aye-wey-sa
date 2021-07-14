import React, { Component } from 'react';
<<<<<<< HEAD
=======
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// import GoogleMapReact from 'google-map-react';
// import { GoogleMap, LoadScript } from 'react-google-maps';
>>>>>>> f42e8d8d5611a86641fb57e2188665d0b85492da
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's
import projects from '../add.json';



class Hiking extends Component {
  state = {
<<<<<<< HEAD
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
=======
    projects
  };

  render() {
    // const google = window.google;

    const style = {
      margin: '20px',
      width: '55%',
      height: '55%'
    }

    return (

      <div id="hiking">



        <iframe width="700px" height="400px" src="https://opendata-cosagis.opendata.arcgis.com/datasets/ed00038f9f5c44988eb38a0bafd9a227_0" frameBorder="0"></iframe>


        <Wrapper>
          {this.state.projects.map(project => (
            <TodoCard
              id={project.id}
              title={project.title}
              image={project.image}
              author={project.author}
            />
          ))}

          <div id="hiking">this is the hiking page</div>
        </Wrapper>
      </div>

    );


  }
}

>>>>>>> f42e8d8d5611a86641fb57e2188665d0b85492da

export default Hiking;