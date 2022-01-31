import React from "react";
import AboutMe from "./AboutMe";

const sideData = [
  {
    itemtitle: "side title",
    description: "Cras interdum pharetra felis eu faucibus.",
  },
];

const SideContent = () => {
  return (
    <div className="side-content">
      {sideData.map((post) => (
        <AboutMe title={post.title} description={post.description} />
      ))}
    </div>
  );
};

export default SideContent;
