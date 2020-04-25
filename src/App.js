import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
import User from "./user";
import { ReactComponent as LogoSvg } from './logo.svg';

class App extends Component {
  state = {
    logIn: false,
    userName: "",
  };

  handleSignIn = (userName) => {
    {
      userName !== "" &&
        this.setState({
          logIn: true,
          userName: userName,
        });
    }
  };
  handleSignOut = () => {
    this.setState({
      logIn: false,
      userName: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          logIn={this.state.logIn}
          userName={this.state.userName}
          onSignIn={this.handleSignIn}
          onSignOut={this.handleSignOut}
        />
        <LogoSvg />
        {/* <div>
          <Main/>
          <User/>
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
