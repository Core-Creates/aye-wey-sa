import logo from './logo.svg';
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
import Home from "./components/Home";
import Parks from "./components/Parks";
import Historical from "./components/Historical";
import Museums from "./components/Museum";
import Libraries from "./components/Libraries";
import Art_Galleries from "./components/Art_Galleries";
import Hiking from "./components/Hiking";
import Theater from "./components/Theater";
import Tourist_Attractions from "./components/Tourist_Attractions";
import Entertainment_Venues from "./components/Entertainment_Venues";
import Special_Events from "./components/Special_Events";

import ReactDOM from 'react-dom';

ReactDOM.render(
  <Router>
     <Switch>
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
 
    </Switch>
  </Router>,
  document.getElementById('root')
);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}


export default App;
