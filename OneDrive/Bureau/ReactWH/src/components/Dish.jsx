import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../assets/styles/dish.css";

const Dish = ({ name, img, price, slug }) => {
  return (
    <Link to={"/plat/"+slug}>
      <Card>
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Dish;
