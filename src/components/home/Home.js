import React, { Component } from "react";
import Navbar from "../navbar/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
         <Navbar
          // theUser={this.state.currentlyLoggedIn}
          // pleaseLogOut={() => this.service.logout()}
          // toggleForm={this.toggleForm}
          // getUser={this.getCurrentlyLoggedInUser}
        /> 
      </div>
    );
  }
}

export default Home;
