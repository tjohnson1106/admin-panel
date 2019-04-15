import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
// firebase not firestore connect is used for auth
import { firebaseConnect } from "react-redux-firebase";

import { notifyUser } from "../../actions/notifyActions";
import Alert from "../layouts/Alert";

class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  _onSubmit = (e) => {
    e.preventDefault();

    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    // register with firebase
    firebase
      .createUser({ email, password })
      .catch((err) => notifyUser("That user already exists", "error", err));
  };

  _onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { message, messageType } = this.props.notify;
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              {message ? (
                <Alert message={message} messageType={messageType} />
              ) : null}
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" /> Register
                </span>
              </h1>
              <form onSubmit={this._onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this._onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this._onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired,
  notifyUser: PropTypes.func.isRequired
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      // recieved from state assigned to props
      notify: state.notify,
      settings: state.settings
    }),
    // action
    {
      notifyUser
    }
  )
)(Register);
