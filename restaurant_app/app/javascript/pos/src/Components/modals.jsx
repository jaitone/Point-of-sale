import React, { Component } from "react";
import Signup from "./User/signup";
import Login from "./User/login";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalLogin: false,
      modalSignUp: false,
    };
  }

  handleLogInModal = () => {
    this.setState({
      modalLogin: !this.state.modalLogin,
    });
  };

  handleSignUpModal = () => {
    this.setState({
      modalSignUp: !this.state.modalSignUp,
    });
  };

  render() {
    const { modalSignUp, modalLogin } = this.state;
    return (
      <div>
        {this.props.status === "LOGGED_IN" ? (
          <Button
            id="buttons"
            color="danger"
            onClick={() => this.props.handleLogOutClick()}
          >
            Log out
          </Button>
        ) : (
          <Button id="buttons" color="info" onClick={this.handleLogInModal}>
            Log in
          </Button>
        )}

        <Button color="info" onClick={this.handleSignUpModal}>
          Sign Up
        </Button>
        <Modal isOpen={modalSignUp} toggle={this.handleSignUpModal}>
          <ModalHeader toggle={this.handleSignUpModal}>Sign up</ModalHeader>
          <ModalBody>
            <Signup
              id="buttons"
              handleRedirect={this.props.redirect}
              cancelModal={this.handleSignUpModal}
            />
          </ModalBody>
        </Modal>
        <Modal isOpen={modalLogin} toggle={this.handleLogInModal}>
          <ModalHeader toggle={this.handleLogInModal}>Log in</ModalHeader>
          <ModalBody>
            <Login
              handleRedirect={this.props.redirect}
              cancelModal={this.handleSignUpModal}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalPopUp;
