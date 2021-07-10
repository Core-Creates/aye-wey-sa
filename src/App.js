import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Parks from "./components/parks/Parks";
import Historical from "./components/historical/Historical";
import Museums from "./components/museums/Museums";
import Libraries from "./components/libraries/Libraries";
import Art_Galleries from "./components/art_galleries/Art_Galleries";
import Hiking from "./components/hiking/Hiking";
import Theater from "./components/theater/Theater";
import Tourist_Attractions from "./components/tourist_attractions/Tourist_Attractionss";
import Entertainment_Venues from "./components/entertainment_venues/Entertainment_Venues";
import Special_Events from "./components/special_events/Special_Events";
// import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
// import Modal from './Component/modal/Modal'; 
import ADD_SPACE from './components/add_Space/Add_Space'; 
// import add from './add.json';
import Header from './components/header/Header';


function App() {
  return (
    <>
    {/* <Particles
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 35,
          density: {
            enable: true,
            value_area: 200
          }
        },
        shape: {
          type: "star",
          stroke: {
            width: 10,
            color: "rgb(118, 41, 190)"
          }
        }
      }
    }} /> */}
    
    
    <Router>
     
        <Header />
        <div style={{display:"flex"}}>
        <div style={{flexGrow: 0}}>
      <Navbar/>
      </div>
      <div style={{flexGrow: 3}}>
    
      
{/* //     <Header/>
//     <div style= {{display: 'flex'}}>
//       <div style= {{flexGrow: 1}}>
//       <Navbar/>
//       </div>
//       <div style= {{flexGrow: 2}}> */}
      <Route exact path="/" component={Home}/>
      <Route exact path="/Parks" component={Parks}/>
      <Route exact path="/Historical" component={Historical}/>
      <Route exact path="/Museums" component={Museums}/>
      <Route exact path="/Libraries" component={Libraries}/>
      <Route exact path="/Art_Galleries" component={Art_Galleries}/>
      <Route exact path="/Hiking" component={Hiking}/>
      <Route exact path="/Theater" component={Theater}/>
      <Route exact path="/Tourist_Attractions" component={Tourist_Attractions}/>
      <Route exact path="/Entertanment_Venue" component={Entertainment_Venues}/>
      <Route exact path="/Special_Events" component={Special_Events}/>

      <Route exact path="/Home" component={Home}/>
=======
      </div>
      <div style={{flexGrow: 4}}>
      <ADD_SPACE/>
      </div>
      </div>
    </Router>
    </>
  );
}


export default App;
