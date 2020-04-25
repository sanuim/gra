import React, { Component } from "react";

class Header extends Component {
  state = {
    name: "",
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { logIn, userName } = this.props;

    return (
      <div className="navbar navbar-expand-lg navbar-light bg-dark text-white p-3">
        <span>{logIn && `Hi ${userName}`}</span>
        <span>
          {/* <button className="btn btn-light float-right p-2 m-1">Sign up</button> */}
          {!logIn && (
            <form
              onSubmit={(event) => {
                this.props.onSignIn(this.state.name);
                this.state.name='';
              }}
            >
              <input
                type="text"
                className="m-2 p-1"
                placeholder="Enter your name"
                onChange={this.handleChangeName}
              />
              <input
                type="submit"
                className="btn btn-primary float-right p-2 m-1"
                value="Sign in"
              />
            </form>
          )}
          {logIn && (
            <button
              className="btn btn-primary float-right p-2 m-1"
              onClick={this.props.onSignOut}
            >
              Sign out
            </button>
          )}
        </span>
      </div>
    );
  }
}

export default Header;
