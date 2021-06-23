import React from "react";
import "./Card.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.image} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong></strong> {props.title}
          </li>
          <li>
            <strong></strong> {props.author}
          </li>
        </ul>
      </div>
    </div>
  
  );
}

export default ProjectCard;