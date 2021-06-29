// export default Navbar;
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (  
      <div className="container">
      <div className="columns is-ancestor">
          <div className="column is-one-third">
              <article class="tile is-child notification" id="searchBoxBg">
                  {/* <!--Search bar and frequently searched cities--> */}
                  <p className="title" id="searchTitle">Search</p>
                  <div id="searchBox">
                  <div class="field is-grouped">
                            <input class="input" type="text" placeholder="City" id="cityInput"> </input>
                            <button class="button" id="searchBtn">
                                <span class="icon">
                                    <svg class="svg-inline--fa fa-search-location fa-w-16" aria-hidden="true"
                                        data-prefix="fas" data-icon="search-location" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
                                        </path>
                                    </svg>
                                    {/* <!-- <i class="fas fa-search-location"></i> --> */}
                                </span>
                            </button>
                        </div>
                        </div>
                        
                        <div id="frequentlySearched">
                            <button class="button is-info" id="art">Art</button>
                            <button class="button is-info" id="entertainment">Entertainment</button>
                            <button class="button is-info" id="hiking">Hiking</button>
                            <button class="button is-info" id="historical">Historical</button>
                            <button class="button is-info" id="home">Home</button>
                            <button class="button is-info" id="libraries">Libraries</button>
                            <button class="button is-info" id="museums">Museums</button>
                            <button class="button is-info" id="parks">Parks</button>
                            <button class="button is-info" id="events">Events</button>
                            <button class="button is-info" id="theatre">Theatre</button>
                            <button class="button is-info" id="tourism">Tourism</button>
                        </div>
                </article>
            </div>
            </div>
            </div>
    );
  }}
                    
      {/* //   <div className={`navbar-menu`}>
      //     <div className="navbar-start" class >
      //       <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
      //         Home
      //       </NavLink>

      //       <NavLink */}
      {/* //         className="navbar-item"
      //         activeClassName="is-active"
      //         to="/museums"
      //         exact
      //       >
      //         Link
      //       </NavLink>

      //       <NavLink */}
      {/* //         className="navbar-item"
      //         activeClassName="is-active"
      //         to="/art_galleries"
      //         exact
      //       >
      //         Link
      //       </NavLink>
      //     </div>
      // </div>      */}
  

export default Navbar;