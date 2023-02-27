import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import SearchBar from "../components/searchBar/SearchBar";
import ProductList from "../components/productList/ProductList"
import "./yourProducts.css"
export const YourProducts = () => {
  return (
    <>
      <SearchBar />
      <div className="inno_home_container_yp">
        <SideBar />
        <div className="inno_home_principal_yp">
            <ProductList />
          
        </div>
      </div>
    </>
  );
};

