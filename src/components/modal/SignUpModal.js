import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './modal.css';


class SignUpModal extends Component {
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
                <button onClick={this.onClickButton} style={{backgroundColor:'hotpink', width:"90%"}}>Sign-Up</button>
                <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                    <h1>Sign-Up</h1>
                    <form action="/login" method="post">

                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Sign Up" />
                    </div>

                </form>
                </Modal>   
            </div>
        )
    }
}

export default SignUpModal;