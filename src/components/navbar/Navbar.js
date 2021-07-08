// export default Navbar;
import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";

import SignInModal from "../modal/SignInModal";
import SignUpModal from "../modal/SignUpModal";


class Navbar extends Component {
    render() {

        

        return (
            
               
  //                   <div className="row">
  //                       <nav className="nav col-3">
  //                           <div className="col-3">
  //                               <br></br>
  //                               <button className="button is-info" id="art">Art </button>
  //                               <br></br>
  //                               <button className="button is-info" id="entertainment">Entertainment</button>
  //                               <br></br>
  //                               <button className="button is-info" id="hiking">Hiking</button>
  //                               <br></br>
  //                               <button className="button is-info" id="historical">Historical</button>
  //                               <br></br>
  //                               <button className="button is-info" id="home">Home</button>
  //                               <br></br>
  //                               <button className="button is-info" id="libraries">Libraries</button>
  //                               <br></br>
  //                               <button className="button is-info" id="museums">Museums</button>
  //                               <br></br>
  //                               <button className="button is-info" id="parks">Parks</button>
  //                               <br></br>
  //                               <button className="button is-info" id="events">Events</button>
  //                               <br></br>
  //                               <button className="button is-info" id="theatre">Theatre</button>
  //                               <br></br>
  //                               <button className="button is-info" id="tourism">Tourism</button>
  //                               <br></br>
  //                               <SignInModal></SignInModal>
  //                               <SignUpModal></SignUpModal>
  //                           </div>
  //                       </nav>
  //                       <div className="col-9">
  //   <div className="tab-content" id="v-pills-tabContent">
  //     <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
  //     <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
  //     <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
  //     <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  //   </div>
  // </div>
  //                   </div>

  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Art</a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Entertainment</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Hiking</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Historical</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Libraries</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Museums</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Parks</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Events</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Theatre</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tourism</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
      <SignInModal></SignInModal>
                                <SignUpModal></SignUpModal>
    </div>
  </div>

               
 
       
        );
    
    }
}


export default Navbar;