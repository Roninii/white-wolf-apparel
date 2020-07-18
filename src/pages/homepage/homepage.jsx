import React from "react";

import "./hompage.scss";

import directories from "./directory.data";
import Directory from "../../components/directory/directory";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory directories={directories} />
    </div>
  );
};

export default Homepage;
