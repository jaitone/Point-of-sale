import React, { Component } from "react";
import Pin from "./pinPage";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(data) {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h1>Status: {this.props.userStatus}</h1>
        {console.log(this.props)}
        <Pin />
      </div>
    );
  }
}

export default Dashboard;
