import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's
import projects from '../add.json';


class Libraries extends Component {
    state= {
    projects
    };
  
    render() {
      return (
        <Wrapper>
         {this.state.projects.map(project => (
            <TodoCard
              id={project.id}
              title={project.title}
              image={project.image}
              author={project.author}
            />
            ))}
          <div>this is the libraries</div>
        </Wrapper> 
      );
    }
  }

export default Libraries;