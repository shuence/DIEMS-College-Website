import React from "react";
import Cards from "./Cards";
import DiemsInfo from "./DiemsInfo";
import Home from "./Home";
import Whyus from "./Whyus";
import Widgets from "./Widgets";

const index = () => {
  return (
    <div>
      <Home />
      <DiemsInfo />
      <Cards />
      <Widgets />
      <Whyus />
    </div>
  );
};

export default index;
