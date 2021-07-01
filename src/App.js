
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import ReactDOM from 'react-dom';



ReactDOM.render(
  <Router>
    <Navbar/>
     <Switch>
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
 
    </Switch>
  </Router>,
  document.getElementById('root')
);

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
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
      </div>
    </Router>
  );
}


export default App;
