import React, { useState } from "react";
import QuickSearch from "./QuickSearch";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchQueryInformation, setSearchQueryInformation] = useState([]);

  return (
    <div className="search">
      <div className="search-wrapper">
        <QuickSearch setSearchQueryInformation={setSearchQueryInformation} />
        <SearchForm setSearchQueryInformation={setSearchQueryInformation} />
      </div>
      <div>
        <SearchResults searchQueryInformation={searchQueryInformation} />
      </div>
    </div>
  );
};

export default Search;
