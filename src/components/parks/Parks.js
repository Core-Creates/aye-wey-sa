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
          src="https://opendata-cosagis.opendata.arcgis.com/datasets/1c9fc1749bfb4222ab8a5d1f9728ca60_0" frameBorder="0"></iframe>

        <Wrapper>
<<<<<<< HEAD
        <iframe width="700" height="400" src="https://data.sanantonio.gov/dataset/park-trails1/resource/6d75f6d1-9ff0-48f1-b11b-4904ecebbcfa/view/b5ed02cb-6541-4065-83c3-36da41083583" frameBorder="0"></iframe>
        {this.state.projects.map(project => (
          <TodoCard
            link={project.link}
            title={project.title}
            image={project.image}
            author={project.author}
          />
=======
          {this.state.projects.map(project => (
            <TodoCard
              id={project.id}
              title={project.title}
              image={project.image}
              author={project.author}
            />
>>>>>>> main
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Parks;