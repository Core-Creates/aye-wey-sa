import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's

class Parks extends Component {
    state= {
    //   todos
    };
    
    render() {
      return (
        <iframe width="700" height="400" src=" https://opendata-cosagis.opendata.arcgis.com/datasets/1c9fc1749bfb4222ab8a5d1f9728ca60_0.geojson?outSR=%7B%22latestWkid%22%3A2278%2C%22wkid%22%3A102740%7D" frameBorder="0"></iframe>
      );
    }
  }

export default Parks;