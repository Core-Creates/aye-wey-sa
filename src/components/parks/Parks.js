import React, { Component } from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's

import projects from '../add.json';


class Parks extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <iframe width="700" height="400"
          src="https://opendata-cosagis.opendata.arcgis.com/datasets/29fd105cac45483f99058b1a5e2a07ac_0" frameBorder="0"></iframe>

        <Wrapper>
          {this.state.projects.map(project => (
            <TodoCard
              id={project.id}
              title={project.title}
              image={project.image}
              author={project.author}
            />
          ))}
          
        </Wrapper>
      </div>
    );
  }
}

export default Parks;