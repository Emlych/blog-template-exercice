import React from "react";
import MainContent from "./MainContent/MainContent";
import SideContent from "./SideContent/SideContent";

const Content = () => {
  return (
    <div className="content">
      <MainContent />
      <SideContent />
    </div>
  );
};

export default Content;
