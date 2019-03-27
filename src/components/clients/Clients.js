import React, { Component } from "react";

class Clients extends Component {
  state = {};
  render() {
    const clients = [
      {
        id: "434343",
        firstName: "Janet",
        lastName: "Johnson",
        email: "janet@mailexample.com",
        phone: "555-555-5555",
        balance: "30"
      }
    ];
    // check for clients firebase

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users" />
                Clients
              </h2>
            </div>
          </div>

          <table className="table-striped">
            <div className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </div>
          </table>
        </div>
      );
    } else {
    }
    return (
      // TODO implement spinner
      <h1>Loading...</h1>
    );
  }
}

export default Clients;
