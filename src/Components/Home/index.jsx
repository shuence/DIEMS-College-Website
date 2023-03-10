import React from "react";
import Cards from "./Cards";
import DiemsInfo from "./DiemsInfo";
import Events from "./Events";
import Home from "./Home";
import QuickLinks from "./QuickLinks";
import Recruiters from "./Recruiters";
import SkillPartnership from "./SkillPartnership";
import Testimonials from "./Testimonials";
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
      <Events />
      <Recruiters />
      <SkillPartnership />
      <Testimonials />
      <QuickLinks/>
    </div>
  );
};

export default index;
