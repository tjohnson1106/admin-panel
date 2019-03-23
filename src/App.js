import React, { Component } from "react";

import NavBar from "./components/layouts/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Admin Panel</h1>
      </div>
    );
  }
}

export default App;
