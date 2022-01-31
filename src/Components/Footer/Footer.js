import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      Made with <span>{props.techno}</span> at le <span>{props.formation}</span>{" "}
      by <span>{props.author}</span>
    </div>
  );
};

export default Footer;
