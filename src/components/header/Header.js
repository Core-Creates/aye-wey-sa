import React from 'react';
import Typed from 'react-typed';
const Header = () => {
    
    return (
        <div className="row">
        <div className= "header-wrapper">
           
            <div className= "main-info">
    <h1>Aye Wey SA</h1>
    <Typed
    className= "typed-text"
    strings={["Your guide to all things San Antonio"]}
    typeSpeed={40}
    backSpeed={40}
    loop
    />
    
            </div>
        </div>
        </div>
    );
    }


export default Header;
