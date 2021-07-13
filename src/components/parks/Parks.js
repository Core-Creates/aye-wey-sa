import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's
import projects from '../add.json';


class Parks extends Component {
    state= {
  projects
    };
  
    render() {
      return (
        <Wrapper>
        <iframe width="700" height="400" src="https://data.sanantonio.gov/dataset/park-trails1/resource/6d75f6d1-9ff0-48f1-b11b-4904ecebbcfa/view/b5ed02cb-6541-4065-83c3-36da41083583" frameBorder="0"></iframe>
        {this.state.projects.map(project => (
          <TodoCard
            link={project.link}
            title={project.title}
            image={project.image}
            author={project.author}
          />
          ))}
          </Wrapper>
        );
    }
  }

export default Parks;