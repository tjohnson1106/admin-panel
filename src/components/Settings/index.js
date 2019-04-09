import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  setAllowRegistration,
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit
} from "../../actions/settingsActions";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <h1>Settings Component</h1>
      </div>
    );
  }
}

// not calling any firestore methods, only need state from auth

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  {
    setAllowRegistration,
    setDisableBalanceOnAdd,
    setDisableBalanceOnEdit
  }
)(Settings);
