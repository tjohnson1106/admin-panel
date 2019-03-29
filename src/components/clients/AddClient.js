import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };

  _onSubmit = (e) => {
    e.preventDefault();

    const newClient = this.state;

    const { firestore, history } = this.props;

    // if no balance -> 0

    if (newClient.balance === "") {
      newClient.balance = 0;
    }

    firestore
      .add({ collection: "clients" }, newClient)
      .then(() => history.push("/"));
  };

  _onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn-link">
              <i className="fas fa-arrow-circle-left" />
              Dashboard
            </Link>
          </div>

          <div className="card">
            <div className="card-header">Add Client</div>

            <div className="card-body">
              <form onSubmit={this._onSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  {/* input -> state */}
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    minLength="2"
                    required
                    onChange={this._onChange}
                    value={this.state.firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  {/* input -> state */}
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    minLength="2"
                    required
                    onChange={this._onChange}
                    value={this.state.lastName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  {/* input -> state */}
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this._onChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  {/* input -> state */}
                  <input
                    type="phone"
                    className="form-control"
                    name="phone"
                    minLength="10"
                    required
                    onChange={this._onChange}
                    value={this.state.phone}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="balance">Balance</label>
                  {/* input -> state */}
                  <input
                    type="balance"
                    className="form-control"
                    name="balance"
                    onChange={this._onChange}
                    value={this.state.balance}
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
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

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddClient);
