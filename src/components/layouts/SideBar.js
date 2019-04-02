import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Link to="/client/add" className="btn btn-info btn-block">
      <i className="fas fas-plus" /> New
    </Link>
  );
};

export default SideBar;
