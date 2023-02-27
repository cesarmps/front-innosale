import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./sideBar.css";

function SideBar() {
  return (
    <>
      <main className="inno_productowner_sidebar">
        <nav className="inno_productowner_sidebar_links">
          <NavLink  to="/yourproducts"> YOUR PRODUCTS </NavLink>
          <NavLink  to="/addproduct"> ADD PRODUCT </NavLink>
					<NavLink  to="/messages"> MESSAGES </NavLink>
        </nav>
      </main>
      <Outlet />
    </>
  );
}
export default SideBar;
