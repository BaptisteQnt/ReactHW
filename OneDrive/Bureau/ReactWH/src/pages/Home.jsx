import { useState, useEffect } from "react";
import Dish from "../components/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../assets/styles/home.css";
import DishDetails from "../datas/dishes.json";

const Home = () => {
  const [dishes, setDishes] = useState([]);

  const [showNewOnly, setShowNewOnly] = useState(false);

  useEffect(() => {
    const filteredDishes = showNewOnly
      ? DishDetails.filter((dishes) => dishes.isNew === true)
      : DishDetails;
      setDishes(filteredDishes);
  }, [showNewOnly]);
  
  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
  };

  return (
    <Container>
      <Button
        onClick={handleShowNewOnly}
        className="dish-btn"
        variant="primary"
      >
        {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
      </Button>{" "}
      <Row className="mt-5 mb-5">
        {dishes.map((dish) => (
          <Col xs={4} key={dish.id}>
            <Dish
              name={dish.name}
              price={dish.price}
              img={dish.img}
              slug={dish.slug}
              isNew={dish.isNew}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
