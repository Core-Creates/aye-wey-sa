import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './modal.css';
import { Link } from "react-router-dom";
// import axios from 'axios';


class LogInModal extends Component {
    state = {
        openModal: false
    }

    onClickButton = e => {
        e.preventDefault()
        this.setState({ openModal: true })
    }

    onCloseModal = () => {
        this.setState({ openModal: false })

    }


render() {
    return (
        <div>

            <button onClick={this.onClickButton} style={{width:'90%', backgroundColor:'turquoise'}}>Log In</button>
            <Modal open={this.state.openModal} onClose={this.onCloseModal} class="fullModal">
                <h1>Log In</h1>
                <form action="/login" method="post">

                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Log In" />
                    </div>

                </form>
            </Modal>
        </div>

        // <div>
        //     <button onClick={this.onClickButton}>Sign-Up</button>
        //     <Modal open={this.state.openModals} onClose={this.onCloseModal}>
        //         <h1>Sign-Up</h1>
        //     </Modal>   
        // </div>
    )
}
}

export default LogInModal;