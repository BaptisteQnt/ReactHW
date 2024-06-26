import {  createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart];

        const productIndex = newCart.findIndex((currentDish) => currentDish.id === product.id);

        if(productIndex === -1 ){
            product.quantity = 1;
            newCart.push(product);
        } else {
            newCart[productIndex].quantity++;
        }
        
        setCart(newCart);
      }

      return(
        <CartContext.Provider value={{cart , addToCart}}>
            {children}
        </CartContext.Provider>
      )
}
