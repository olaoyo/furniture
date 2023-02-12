import React from "react";
import { SearchForm, SearchButton, SearchInput } from "./Search.styles";

function Search() {
  return (
    <SearchForm>
      <SearchButton>
        <span className="material-symbols-outlined">search</span>
      </SearchButton>
      <SearchInput placeholder="Search" />
    </SearchForm>
  );
}

export default Search;
