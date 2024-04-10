import { useState } from "react";
import Dish from "../components/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../assets/styles/home.css";

const Home = () => {
  const dishes = [
    {
      id: 1,
      name: "Tacos",
      price: 3,
      img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      slug: "tacos",
      isNew: true,
    },
    {
      id: 2,
      name: "Enchiladas",
      price: 12,
      img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      slug: "enchiladas",
      isNew: false,
    },
    {
      id: 3,
      name: "Mole poblano",
      price: 15,
      img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      slug: "mole-poblano",
      isNew: false,
    },
  ];

  const [showNewOnly, handleShowNewOnly] = useState(false);

  const newOnly = () => handleShowNewOnly(true);
  

  const filteredDishes = dishes.filter((dishes) => dishes.isNew === true);

  return (
    <Container>
      {showNewOnly === true ? (
        <div>
          <Button
            className="dish-btn"
            variant="primary"
            onClick={handleShowNewOnly}
          >
            Voir tous les plats
          </Button>{" "}
          <Row className="mt-5 mb-5">
            {filteredDishes.map((dish) => (
              <Col key={dish.id}>
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
        </div>
      ) : (
        <div>
          <Button onClick={newOnly} className="dish-btn" variant="primary">
            Nouveautés uniquement
          </Button>{" "}
          <Row className="mt-5 mb-5">
            {dishes.map((dish) => (
              <Col key={dish.id}>
                <Dish
                  name={dish.name}
                  price={dish.price}
                  img={dish.img}
                  slug={dish.slug}
                  ISNew={dish.isNew}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
      ;
    </Container>
  );
};

export default Home;
