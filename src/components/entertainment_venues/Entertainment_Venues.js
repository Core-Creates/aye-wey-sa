import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// import todos from '../footer/footer';  this is where we will need to import different API's

class Entertainment_Venues extends Component {

    render() {
      return (
        <div>this is the entertainment page

<LoadScript
            googleMapsApiKey={process.env.GOOLE_API_KEY}
          >
            <GoogleMap
              // mapContainerStyle={containerStyle}
              // center={center}
              zoom={10}
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
            </GoogleMap>
          </LoadScript>
        </div>

      );
    }
  }

export default Entertainment_Venues;