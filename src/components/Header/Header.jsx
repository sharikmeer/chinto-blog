import React from "react";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/background.png"})`,
      }}
      className="header-wrapper"
    >
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <AboutMe />
      </div>
    </div>
  );
};

export default Header;
