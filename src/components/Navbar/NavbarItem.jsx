import React from "react";

const NavbarItem = ({ name, link, active }) => {
  return (
    <a href={link} className="navbar-item" data-active={active}>
      {name}
    </a>
  );
};

export default NavbarItem;
