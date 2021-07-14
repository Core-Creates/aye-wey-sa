import { render } from "@testing-library/react";
import React, { Component } from 'react';
import TodoCard from "../card/Card";
import Wrapper from "../wrapper/Wrapper";
import projects from '../add.json';

class Biking extends Component {
  state{
  projects
};

render() {
  return (
    <div id="biking">
      <h1>Biking Trails, Lanes, and Paths</h1>
      <iframe width="700" height="400"
        src="https://opendata-cosagis.opendata.arcgis.com/datasets/55234cc46b954f69a659711b240bdf59_0"
        frameBorder="0"></iframe>

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

export default Biking;