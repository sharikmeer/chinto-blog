import React from "react";
import NavbarItem from "./NavbarItem";
const navs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Posts",
    link: "/posts",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];
const Navbar = () => {
  return (
    <nav className="navbar">
      {navs.map((nav) => (
        <NavbarItem
          active={nav.name === "Home" ? true : false}
          key={nav.name}
          {...nav}
        />
      ))}
    </nav>
  );
};

export default Navbar;
