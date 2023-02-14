import { SearchIcon, SearchInput, SearchBar, SearchBg } from "./Search.styles";


function Search() {
  return (
    <SearchBg>
      <SearchBar>
        {/* <Feather name="search" size={20} /> */}
        <SearchIcon name="search" />
        <SearchInput placeholder="Search" />
      </SearchBar>
    </SearchBg>
  );
}

export default Search;

