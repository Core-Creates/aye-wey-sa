// export default Navbar;
import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Modal from "react-modal";

class Navbar extends Component {
    render() {
        let modalIsOpen;
        this.state = { modalIsOpen: false };

        return (
            <aside>
                <div className="container">
                    <div class="row">
                        <nav class="nav flex-column">
                            <div className="column is-one-third">
                                <br></br>
                                <button className="button is-info" id="art">Art </button>
                                <br></br>
                                <button className="button is-info" id="entertainment">Entertainment</button>
                                <br></br>
                                <button className="button is-info" id="hiking">Hiking</button>
                                <br></br>
                                <button className="button is-info" id="historical">Historical</button>
                                <br></br>
                                <button className="button is-info" id="home">Home</button>
                                <br></br>
                                <button className="button is-info" id="libraries">Libraries</button>
                                <br></br>
                                <button className="button is-info" id="museums">Museums</button>
                                <br></br>
                                <button className="button is-info" id="parks">Parks</button>
                                <br></br>
                                <button className="button is-info" id="events">Events</button>
                                <br></br>
                                <button className="button is-info" id="theatre">Theatre</button>
                                <br></br>
                                <button className="button is-info" id="tourism">Tourism</button>
                                <br></br>
                                {/* Login modal button */}
                                <button className="" id="SigninBtn" onClick={() => 
                                    this.setState({ modalIsOpen: true })}>
                                        Sign-In
                                    </button>
                                <Modal isOpen={modalIsOpen}>
                                    <h2>Sign-In</h2>
                                </Modal>
                            </div>
                        </nav>
                    </div>
                </div>
            </aside>
        );
    }
}


export default Navbar;