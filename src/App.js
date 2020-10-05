import React, { Component } from "react";
import "./App.css";
import User from "./components/User";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  checkLoginStatus() {
    if (this.state.login) {
      return <User />
    }
    return <Login />;
  }

  render() {
    return (
      <div className="App">
        {this.checkLoginStatus()}
      </div>
    )
  }
}

export default App;