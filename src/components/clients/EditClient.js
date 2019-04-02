import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layouts/Spinner";

class EditClient extends Component {
  state = {};
  render() {
    const { client } = this.props;

    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" />
                Dashboard
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Edit Client</div>

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
                    defaultValue={client.firstName}
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
                    defaultValue={client.lastName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  {/* input -> state */}
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    defaultValue={client.email}
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
                    defaultValue={client.phone}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="balance">Balance</label>
                  {/* input -> state */}
                  <input
                    type="balance"
                    className="form-control"
                    name="balance"
                    defaultValue={client.balance}
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
      );
    } else {
      return <Spinner />;
    }
  }
}

EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect((props) => [
    {
      collection: "clients",
      storeAs: "client",
      doc: props.match.params.id
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(EditClient);
