import React from "react";
import PropTypes from "prop-types";
import "./main.scss";

const Main = ({children}) => {
  return (
    <main className="main">
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
