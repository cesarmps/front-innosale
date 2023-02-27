import React from "react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import "./searchBar.css";

export function Search() {
  //Esto es para que al hacer click en el submit no envie peticion al servidor
  //para pasar la busqueda a través de la url
  //HAgo que cada vez que se pase algo por la search bar se actualice el valor de searchInput
  //con el nuevo input para tener controlado siempre los inputs
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="inno_search_container" onSubmit={handleSubmit}>
      <div className="inno_searchbox">
        <input
          className="inno_search_input"
          type="text"
          id="searchbar_input"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="inno_search_button" type="submit">
          <BiSearch size={20} />
        </button>
      </div>
    </div>
  );
}
export default Search;
