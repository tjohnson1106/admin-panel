import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./util/auth";

import NavBar from "./components/layouts/NavBar";
import Dashboard from "./components/layouts/Dashboard";
import EditClient from "./components/clients/EditClient";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
// auth
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Settings from "./components/Settings";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path="/client/add"
                  component={UserIsAuthenticated(AddClient)}
                />
                <Route
                  exact
                  path="/client/edit/:id"
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path="/client/:id"
                  component={UserIsAuthenticated(ClientDetails)}
                />
                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path="/register"
                  component={UserIsNotAuthenticated(Register)}
                />
                <Route
                  exact
                  path="/settings"
                  component={UserIsAuthenticated(Settings)}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
