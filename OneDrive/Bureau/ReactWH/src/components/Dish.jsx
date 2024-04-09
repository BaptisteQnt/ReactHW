import React from "react";
import Card from "react-bootstrap/Card";
import "../asset/css/dish.css";

const Dish = ({ name, img, price }) => {
  return (
    <Card>
      <Card.Img className="card-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          {name}
        </Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dish;
