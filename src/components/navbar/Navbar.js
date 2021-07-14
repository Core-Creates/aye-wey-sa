// export default Navbar;
import React, { Component, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import LogInModal from "../modal/LogInModal";
import SignUpModal from "../modal/SignUpModal";
import Carousel from '../carousel/Carousel';

const Navbar = () => {
  const navItems = ["Home", "Art",  "Hiking", "Historical", "Libraries", "Museums", "Parks", "Special_Events", "Theater", "Tourist_Attractions", "Entertainment"]
  return (
   
    <ul className= "nav flex-column nav-pills nav-justified">
      {navItems.map(e => {return(
<div classname="container">
        <NavLink exact to={"/"+e}>
          <div></div>
          <li className= "nav-item" id="buttons">
          {e}
          </li>
        </NavLink>
      </div>  
      )})}    
    </ul>
    

  
   
  )
}

export default Navbar

