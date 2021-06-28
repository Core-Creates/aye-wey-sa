import React from "react";
import "./Add_Space.css";

function AddCard(props) {
    return (
        <div className="add">
            <div className= "img container">
                <img alt={props.image} src={props.image}/>
            </div>
            <div className="addDetails">
                <p>{props.addDetails}</p>
            </div>
        </div>
    );
}

export default AddCard;
