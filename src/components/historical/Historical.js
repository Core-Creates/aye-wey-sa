import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's
import projects from '../add.json';


class Historical extends Component {
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
          <div>this is the historical page</div>
        </Wrapper> 
      );
    }
  }

export default Historical;