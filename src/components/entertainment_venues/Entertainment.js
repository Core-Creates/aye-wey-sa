import React, { Component } from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's
import projects from '../add.json';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Entertainment extends Component {
  state = {
    projects
  };
  render() {
    const libraries = ["places"];

    const center = {
      lat: 29.4241, lng: -98.4936,
    };


    const style = {
      margin: '20px',
      width: '50%',
      height: '55%'
    }
    return (
      <div id="Entertainment">

        <div>
        <h1>Entertainment page</h1>
        <GoogleApiWrapper></GoogleApiWrapper>
        <Map
          google={window.google}
          zoom={10}
          style={style}
          initialCenter={center}

        ></Map>

        <iframe height="550px"></iframe>
        </div>
        
        <div>
        <Wrapper>
<<<<<<< HEAD
        {this.state.projects.map(project => (
          <TodoCard
            link={project.link}
            title={project.title}
            image={project.image}
            author={project.author}
          />
        ))}
        <div>this is the entertainment page</div>
</Wrapper>
      );
=======
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


        </div>
        );
>>>>>>> main
    }
  }

  export default GoogleApiWrapper({
    apiKey: ("AIzaSyCtFzdbJA-H72PJ4sIY0gGWT9mDwEloPkA")
  })(Entertainment);