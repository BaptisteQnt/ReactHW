import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from 'react-bootstrap/Table';

const Cart = ( {cart} ) => {
    return(
        <Container className="mt-5 mb-5">
            <Row>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cartItem , index) => (
        <tr key={index}>
            <td>{cartItem.name}</td>
            <td>{cartItem.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
            </Row>
        </Container>





    )
}

export default Cart;