import React from "react";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./navbar.css"

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
     
        <h1 className="nameFont" >Wither</h1>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
