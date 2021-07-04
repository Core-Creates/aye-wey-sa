import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
// import 'react-responsive-modal/styles.css';
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
                <button onClick={this.onClickButton}>Sign-in</button>
                <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                    <h1>Sign-in</h1>
                </Modal>   
            </div>
        )
    }
}

export default SignUpModal;