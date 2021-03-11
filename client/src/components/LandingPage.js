import React from "react";
import DetailCard from "./DetailCard";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <DetailCard text="Don't know what to make for dinner tonight..." />
      <DetailCard text="...in the mood for some cake or cookies?" />
      <DetailCard text="You found the right place...Easy Fresh Goodness" />
      <DetailCard text="Go search for all meals, with nutrition, ingredients and instructions." />
      <DetailCard text="Use the quick search, or check the Daily Meal Theme for ideas for any day! ENJOY!!" />
    </div>
  );
};

export default LandingPage;
