import React from "react";
import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <div className="item">
      <ItemTitle itemtitle={props.itemtitle} />
      <ItemSubtitle subtitle={props.subtitle} />
      <ItemPicture />
      <ItemDescription description={props.description} />
    </div>
  );
};

export default Item;
