import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's
import projects from '../add.json';
import { Map, GoogleApiWrapper, mapStyles, InfoWindow, Marker } from 'google-maps-react';
import "./Libraries.css";



class Libraries extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
    projects
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

    render() {

      const style = {
        width: '45%',
        height:'80%', 
        frameBorder: '0px',
        
      }
      
      return (
 <div id= 'container' >    
  <div id="new" > 
      <Map
        google={this.props.google}
        zoom={10}
        style= {style}
        location={Marker}
        initialCenter={
          {
            lat: 29.4241,
            lng: -98.4936
          }
        }
        >
        <Marker
        onClick={this.onMarkerClick}
        name={'San Antonio Library'}
        position={{lat: 29.432316 , lng: -98.492844}}/>

        <Marker 
        onClick={this.onMarkerClick}
        name={'Little Free Library'}
        position={{lat: 29.52480 , lng: -98.49085}}/>
        <Marker 
        onClick={this.onMarkerClick}
        name={'Central Library'}
        position={{lat: 29.43713 , lng: -98.49432}}/>
        <Marker 
        onClick={this.onMarkerClick}
        name={'Tobin Library at Oakwell'}
        position={{lat: 29.51791 , lng: -98.43423}}/>
        <Marker 
        onClick={this.onMarkerClick}
        name={'Memorial Library'}
        position={{lat: 29.45415 , lng: -98.56020}}/>

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
          
      </Map>
      </div>   
         <div>
      {/* <Wrapper>
          {this.state.projects.map(project => (
            <TodoCard
              snippet={project.snippet}
              title={project.title}
              image={project.image}
              Link={project.Link}
            />
          ))}
          
        </Wrapper> */}
        </div>
      </div>
      );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCtFzdbJA-H72PJ4sIY0gGWT9mDwEloPkA")
})(Libraries);