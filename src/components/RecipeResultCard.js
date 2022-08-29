import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const RecipeResultCard = ({ itemId, title, image, subtitle }) => {
  return (
    <div className="recipe-results-card">
      <Card className="m-2">
        <Link to={"/recipe/" + itemId}>
          <CardImg
            top
            width="100%"
            src={image}
            alt="Card image"
            title={itemId}
          />
          <CardBody>
            <CardTitle title={itemId} tag="h5">
              {title}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2">
              {subtitle}
            </CardSubtitle>
          </CardBody>
        </Link>
      </Card>
    </div>
  );
};

export default RecipeResultCard;
