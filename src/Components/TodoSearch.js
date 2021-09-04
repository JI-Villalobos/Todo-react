import React from "react";
import "./styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  //const [searchValue, setSearchValue] = React.useState("");

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
