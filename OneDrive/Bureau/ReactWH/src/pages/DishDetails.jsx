import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dishes from "../datas/dishes.json";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../utils/context/CartContext";

const DishDetails = () => {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const currentDish = Dishes.find((dish) => dish.slug === slug );
    if(!currentDish){
      navigate("*");
    }
    setDish(currentDish);
    
  }, [slug, navigate])


  return (
    <Container className="mt-5 mb-5">
      {dish ? <Row>
        <Col>
          <img className="mw-100" src= { dish.img } alt={dish.name} />
        </Col>
        <Col>
          <h2>{ dish.name }</h2>
          <p>{ dish.description }</p>
          <p>{ dish.price }€</p>
          <Button onClick={() => addToCart(dish)} variant="primary">Commander</Button>
        </Col>
      </Row> : (
        <Row>
          <h1>Chargement en cours ...</h1>
        </Row>
      )}
    </Container>
  );
};

export default DishDetails;
