import { useState } from "react";
import InformationBar from "./desktop/InformationBar";
import NavBar from "./NavBar";

const Header = ({ isDesktop }) => {
  if (isDesktop) {
    return (
      <div className="header">
        <InformationBar />
        <NavBar isDesktop={isDesktop} />
      </div>
    );
  } else {
    return (
      <div className="header-mobile">
        <NavBar isDesktop={isDesktop} />
      </div>
    );
  }
};

export default Header;
