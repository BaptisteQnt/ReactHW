import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { CartContext } from "../utils/context/CartContext";
import useGetQuantity from "../utils/hooks/useGetQuantity";
import useGetPrice from "../utils/hooks/useGetPrice"

const Cart = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = useGetQuantity();
  const totalPrice = useGetPrice();
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Quantité</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem, index) => (
              <tr key={index}>
                <td>{cartItem.name}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row>
        <p>{totalQuantity} élements dans le panier </p>
        <p>Prix : {totalPrice}</p>
      </Row>
    </Container>
  );
};

export default Cart;
