import React from "react";
import Cards from "./Cards";
import DiemsInfo from "./DiemsInfo";
import Home from "./Home";
import Whyus from "./Whyus";

const index = () => {
  return (
    <div>
      <Home />
      <DiemsInfo />
      <Cards />
      <Whyus />
    </div>
  );
};

export default index;
