import React from "react";
import "./Container.css";

let Container = (props) => {
  return <div className="container main-container">{props.children}</div>;
};

export default Container;
