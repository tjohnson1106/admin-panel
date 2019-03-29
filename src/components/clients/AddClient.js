import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };

  _onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Link to="/" className="btn-link">
            <i className="fas fa-arrow-circle-left"> </i>
            Dashboard
          </Link>
        </div>

        <div className="card">
          <div className="card-header">Add Client</div>

          <div className="card-body">
            <form>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddClient;
