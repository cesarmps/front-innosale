import React from "react";
import "./home.css";

import { NavLink, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="inno_home_container">
      <div className="inno_home_principal">
        <h2>PRODUCT OWNER ACCOUNT</h2>
        <div className="inno_home_links">
          <NavLink to="/yourproducts"> YOUR PRODUCTS </NavLink>
          <NavLink to="/addproduct"> ADD PRODUCT </NavLink>
        </div>
        <div className="inno_home_p">
          <p>
            If you want to buy any type of software, you have to log in with a
            customer account
          </p>
        </div>
        <div className="inno_home_links">
          <a to="/login"> LOG IN AS CUSTOMER</a>
          </div>
      </div>
    </div>
  );
};
