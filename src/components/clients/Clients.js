import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      },
      {
        id: "434367",
        firstName: "Tiara",
        lastName: "Gibson",
        email: "tiara@mailexample.com",
        phone: "555-555-4444",
        balance: "700.77"
      }
    ];
    // check for clients firebase

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {""}
                <i className="fas fa-users" />
                Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            {/* loop through client -> insert table row */}
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  {/* column for each piece of data */}
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>

                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        // TODO implement spinner
        <h1>Loading...</h1>
      );
    }
  }
}

export default Clients;
