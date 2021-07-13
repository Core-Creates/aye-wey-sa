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
          <Carousel></Carousel>
          <Wrapper>
          {this.state.projects.map(project => (
            <TodoCard
              id={project.id}
              link={project.link}
              title={project.title}
              image={project.image}
              snippet={project.snippet}
            />
          ))}
          </Wrapper>
        </div>
      

      );
    }
  }

export default Home;