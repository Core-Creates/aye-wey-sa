import React from "react";
// import "./Add_Space.css";

function AddCard(props) {
    return (
        <div className="add">
            <div className= "img container">
                <img alt={props.image} src='https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?resize=200,'></img>
            </div>
            <div className="addDetails">
                <p>chris</p>
            </div>
        </div>
    );
}

export default AddCard;
