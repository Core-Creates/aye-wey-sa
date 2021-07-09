import React, {Component} from 'react';
// import { Carousel } from 'react-bootstrap';
// import { Carousel } from 'react-bootstrap';
// import Navbar from '../navbar/Navbar';
// import TodoCard from '../card/Card';
// import Wrapper from '../wrapper/Wrapper';
import Carousel from '../carousel/Carousel';
// import todos from '../footer/footer'

class Home extends Component {
    // state= {
    //   todos
    // };
  
    render() {
      return (
        <div className='carousel'>
          <Carousel></Carousel>
        </div>

      );
    }
  }

export default Home;