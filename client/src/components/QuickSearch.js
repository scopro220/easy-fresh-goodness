import React from "react";
import QuickSearchButton from "./QuickSearchButton";

import italian from "../images/italian.jpg";
import mexican from "../images/mexican.jpg";
import indian from "../images/indian.jpg";
import chinese from "../images/chinese.jpg";

const quickSearchSelections = [
  {
    cuisine: "Italian",
    image: italian,
  },
  {
    cuisine: "Mexican",
    image: mexican,
  },
  {
    cuisine: "Chinese",
    image: chinese,
  },
  {
    cuisine: "Indian",
    image: indian,
  },
];

const QuickSearch = ({ setSearchQueryInformation }) => {
  return (
    <div className="quick-search mt-3">
      <h3>Quick Search</h3>
      <div className="quick-search-button-wrapper mt-3">
        {quickSearchSelections.map((item) => (
          <QuickSearchButton
            setSearchQueryInformation={setSearchQueryInformation}
            key={item.cuisine}
            cuisine={item.cuisine}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickSearch;
