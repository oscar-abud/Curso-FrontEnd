import React from "react";
import logo from "../assets/logo-header.png";
import Navbar from "./Navbar";
function Header() {
  return (
    <header className="flex justify-content-between">
      <img src={logo} alt="logo" />
      <Navbar />
    </header>
  );
}

export default Header;
