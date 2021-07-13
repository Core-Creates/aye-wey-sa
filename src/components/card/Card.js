import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

function TodoCard(props) {
  return (
    <NavLink to={'/' + props.link}>
    <div className="card">
      <div className="content">
        <div style={{textAlign:'center'}}>
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