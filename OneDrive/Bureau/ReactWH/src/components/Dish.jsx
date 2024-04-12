import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import "../assets/styles/dish.css";

const Dish = ({ name, img, price, slug, isNew }) => {
  return (
    <Link to={"/plat/"+slug}>
      <Card>
        <Card.Img className="card-img" variant="top" src={img} />
          {isNew === true && <Badge className="card-img-dish" bg="primary">Nouveau</Badge>}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}€</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Dish;
