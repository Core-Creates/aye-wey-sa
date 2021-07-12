import React from "react";
import "./Card.css";

function TodoCard(props) {
  return (
    <div className= "col col-md-6">
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
        </div>
      <div classname='mapArea'></div>
    </button>
    </div>
  
  );
}

export default TodoCard;