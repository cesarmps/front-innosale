import React from "react";
import "./messages.css";
import SideBar from "../components/sideBar/SideBar";
import SearchBar from "../components/searchBar/SearchBar";


export const Messages = () => {
  return (
    <>
      <SearchBar />
    <div className="inno_msg_container">
      <SideBar />
      <div className="inno_msg_principal">
        <h1>esto es msg</h1>
      </div>
    </div>
    </>
  );
};
