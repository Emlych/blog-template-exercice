import React from "react";
import ItemTitle from "../MainContent/Item/ItemTitle";
import ItemPicture from "../MainContent/Item/ItemPicture";
import ItemDescription from "../MainContent/Item/ItemDescription";

const AboutMe = (props) => {
  return (
    <div className="aboutme">
      <ItemTitle itemtitle={props.itemtitle} />
      <ItemPicture />
      <ItemDescription description={props.description} />
    </div>
  );
};

export default AboutMe;
