import React, { useEffect, useState } from "react";

const QuickSearchButton = ({ cuisine, image, setSearchQueryInformation }) => {
  const [cuisineSearch, setCuisineSearch] = useState("");

  const handleQSClick = async (e) => {
    e.preventDefault();
    setCuisineSearch(e.target.alt);
  };

  useEffect(() => {
    if (cuisineSearch === "") {
      return;
    }
    fetch(`/api/search?query=${cuisineSearch}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchQueryInformation(data.results);
      });
  }, [cuisineSearch, setSearchQueryInformation]);

  return (
    <div className="quick-search-button">
      <img src={image} alt={cuisine} onClick={handleQSClick} />
      <div>{cuisine}</div>
    </div>
  );
};

export default QuickSearchButton;
