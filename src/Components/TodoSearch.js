import React from "react";
import { TodoContext } from "./context/TodoContext";
import "./styles/TodoSearch.css";

function TodoSearch() {
  //const [searchValue, setSearchValue] = React.useState("");
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const OnSearchValueSearch = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="cebolla"
      onChange={OnSearchValueSearch}
      value={searchValue}
    />
  );
}

export { TodoSearch };
