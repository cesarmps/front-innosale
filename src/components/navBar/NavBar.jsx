import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./navBar.css";
import { FaRegTimesCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logoUser from "../../assets/img/user.png";
import logoInnosale from "../../assets/img/Logo_InnoSale.png";

export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
    <nav className="inno_navbar">
      <div className="inno_navbar_container">
      
        <div className="inno_navbar_logo">
          <img src={logoInnosale}></img>
        </div>
        <div
          className={click ? "inno_navbar_links active" : "inno_navbar_links"}
        >
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/yourproducts"> Your Products </NavLink>
          <NavLink to="/addproduct"> Add Product </NavLink>
          <NavLink to="/messages"> Messages</NavLink>
        </div>
        <div className="inno_navbar_user">
          <img src={logoUser} alt="user"></img>
        </div>
        
        <div className="inno_navbar_menu" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="inno_navbar_icon" />
          ) : (
            <GiHamburgerMenu className="inno_navbar_icon" />
          )}
        </div>
      </div>
      </nav>
      <Outlet />
    </>
  );
}
export default NavBar;
