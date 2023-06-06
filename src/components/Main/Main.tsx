import React from "react";
import Centers from "./Centers/Centers";
import Contact from "./Contact/Contact";
import MainSlider from "./MainSlider/MainSlider";
import Purpose from "./Purpose/Purpose";
const Main = () => {
  return (
    <div>
      <MainSlider />
      <Centers />
      <Purpose />
      <Contact />
    </div>
  );
};

export default Main;
