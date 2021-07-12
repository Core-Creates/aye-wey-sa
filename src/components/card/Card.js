import React from "react";
import "./Card.css";

function TodoCard(props) {
  return (
    <div className= "col col-md-4">
    <div className="card">
      <div className="img-container">
        <img alt={props.image} src={props.image} />
      </div>
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
    </div>
    </div>
  
  );
}

export default TodoCard;