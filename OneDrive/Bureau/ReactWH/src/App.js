import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dish from "./components/Dish";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Row className="mt-5 mb-5">
            <Col>
              <Dish
                name={"Tacos"}
                price={3}
                img={
                  "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                }
              />
            </Col>
            <Col>
              <Dish
                name={"Enchiladas"}
                price={12}
                img={
                  "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                }
              />
            </Col>
            <Col>
              <Dish
                name={"Mole poblano"}
                price={15}
                img={
                  " https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                }
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
