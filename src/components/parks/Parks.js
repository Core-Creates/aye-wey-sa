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
        <iframe width="700" height="400" src="https://data.sanantonio.gov/dataset/park-trails1/resource/6d75f6d1-9ff0-48f1-b11b-4904ecebbcfa/view/b5ed02cb-6541-4065-83c3-36da41083583" frameBorder="0"></iframe>
      );
    }
  }

export default Parks;