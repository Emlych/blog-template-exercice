import React from "react";
import Link from "./Link";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div className="navigation--link">
        <Link />
        <Link />
        <Link />
      </div>
      <Link />
    </div>
  );
};

export default NavigationMenu;
