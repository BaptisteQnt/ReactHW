import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dishes from "../datas/dishes.json";
import Button from 'react-bootstrap/Button';

const DishDetails = () => {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentDish = Dishes.find((dish) => dish.slug === slug );
    console.log(currentDish);
    if(!currentDish){
      navigate("*");
    }
    setDish(currentDish);
    
  }, [slug, navigate])


  return (
    <Container>
      (dish ? <Row>
        <Col>
          <img src= { dish.img } />
        </Col>
        <Col>
          <h2>{ dish.name }</h2>
          <p>{ dish.description }</p>
          <p>{ dish.price }</p>
          <Button variant="primary">Commander</Button>
        </Col>
      </Row> : (
        <Row>
          <h1>Chargement en cours ...</h1>
        </Row>
      )) 
    </Container>
  );
};

export default DishDetails;
