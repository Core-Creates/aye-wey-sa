import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

function TodoCard(props) {
  return (
    <NavLink to={'/' + props.link}>
    <div className="card">
      <div className="content">
      <div className="img-container" style= {{class:'center'}}>
        <img alt={props.title} src={props.image} style={{height:'100px'}} />
      </div>
        <div style={{textAlign:'center', color:'black', textDecoration:'none'}}>
        <h4>{props.title}</h4>
        <p>{props.snippet}</p>
        </div>
      <div classname='mapArea'></div>
      </div>
    </div>
    </NavLink>
  
  );
}

export default TodoCard;