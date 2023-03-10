import React from "react";
import Cards from "./Cards";
import DiemsInfo from "./DiemsInfo";
import Events from "./Events";
import Home from "./Home";
import Whyus from "./Whyus";
import Widgets from "./Widgets";

const index = () => {
  return (
    <div>
      <Home />
      <DiemsInfo />
      <Widgets />
      <Cards />
      <Whyus />
      <Events/>
    </div>
  );
};

export default index;
