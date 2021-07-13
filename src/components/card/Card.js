import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

function TodoCard(props) {
  return (
    <NavLink to= {'/' + props.link}>
    <button className="card">
      <div className="content">
        {/* <ul>
          <li>
            <strong></strong>{props.title}
          </li>
          <li>
            <strong></strong>{props.info}
          </li>
        </ul> */}
        <div style={{textAlign:'center'}}>
        <h4>{props.title}</h4>
        <p>{props.snippet}</p>
        </div>
      <div classname='mapArea'></div>
      </div>
    </button>
    </NavLink>
  
  );
}

export default TodoCard;