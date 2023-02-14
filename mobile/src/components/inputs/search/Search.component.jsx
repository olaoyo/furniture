import { SearchIcon, SearchInput, SearchBar, SearchBg } from "./Search.styles";


function Search() {
  return (
    <SearchBg>
      <SearchBar>
        <SearchIcon name="search" />
        <SearchInput placeholder="Search" />
      </SearchBar>
    </SearchBg>
  );
}

export default Search;

