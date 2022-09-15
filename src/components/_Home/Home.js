import React from "react";
import HomeBody from "./HomeBody";
import HomeCover from "./HomeCover";

export const Home = () => {
  return (
    <div className="section-home">
      <HomeCover />
      <HomeBody />
    </div>
  );
};
