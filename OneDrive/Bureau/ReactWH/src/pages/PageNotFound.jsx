import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PageNotFound = () => {
    return(
        <Container fluid>
      <Row>
        <Col>
          <h1>Page non trouvée</h1>
        </Col>
      </Row>
    </Container>
    )
}

export default PageNotFound;