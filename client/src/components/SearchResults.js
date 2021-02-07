import React, { useEffect } from "react";
import RecipeResultCard from "./RecipeResultCard";

const SearchResults = ({ searchQueryInformation }) => {
  useEffect(() => {}, [searchQueryInformation]);

  return (
    <div className="search-results mt-5">
      {searchQueryInformation.map((item) => {
        return (
          <RecipeResultCard
            key={item.id}
            itemId={item.id}
            title={item.title}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
