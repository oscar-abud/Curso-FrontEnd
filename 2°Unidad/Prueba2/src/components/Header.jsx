import React from "react";
import logo from "../assets/logo-header.png";
import Navbar from "./Navbar";
function Header() {
  return (
    <div className="bg-light">
      <header className="container-sm d-flex justify-content-between align-items-center p-4">
        <img src={logo} alt="logo" className="w-32" />
        <Navbar />
      </header>
    </div>
  );
}

export default Header;
