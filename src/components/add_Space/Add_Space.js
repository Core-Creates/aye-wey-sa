import React from "react";
// import "./Add_Space.css";

function AddCard(props) {
    return (
        <div className="add">
            <div style= {{margin: '10px'}}>
            <div className= "img container">    
                <img alt={props.image} src='https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?resize=200,'></img>
            </div>
            <div className="addDetails">
                <p>chris</p>
            </div>
            </div>
            <div style= {{margin: '10px'}}>
            <div className= "img container-2">
                <img alt={props.image} src='https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?resize=200,'></img>
            </div>
            <div className="addDetails-2">
                <p>chris</p>
            </div>
            </div>
            <div style= {{margin: '10px'}}>
            <div className= "img container-3">
                <img alt={props.image} src='https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?resize=200,'></img>
            </div>
            <div className="addDetails-3">
                <p>chris</p>
            </div>
            </div>
        </div>
    );
}

export default AddCard;
