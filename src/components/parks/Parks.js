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
        <iframe width="700" height="400" src="  https://services.arcgis.com/g1fRTDLeMgspWrYp/arcgis/rest/services/SPark_Sites/FeatureServer/0" frameBorder="0"></iframe>
      );
    }
  }

export default Parks;