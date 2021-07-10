import React, {Component} from 'react';
// import { Carousel } from 'react-bootstrap';
// import { Carousel } from 'react-bootstrap';
// import Navbar from '../navbar/Navbar';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
import Carousel from '../carousel/Carousel';
import projects from '../add.json'

class Home extends Component {
    state= {
      projects
    };
  
    render() {
      return (
        <div className='carousel'>
          <div style={{margin:'10px'}}>
          <Carousel></Carousel>
          <Wrapper>
          <div style={{width: '50%'}}>
          {this.state.projects.map(project => (
            <TodoCard
              id={project.id}
              title={project.title}
              image={project.image}
              author={project.author}
            />
          ))}
          </div>
          </Wrapper>
          
          
        </div>
        </div>

      );
    }
  }

export default Home;