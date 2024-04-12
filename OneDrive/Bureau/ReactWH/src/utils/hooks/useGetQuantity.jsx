import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const useGetQuantity = () => {
    const { cart } = useContext(CartContext);
    const [totalElmnt, setTotalElmnt] = useState(0)

    useEffect(() => {
    let totalQuantity = 0;
    cart.forEach(dish => {
      totalQuantity+=dish.quantity
    });
    setTotalElmnt(totalQuantity);
    }, [cart]);

    
    return totalElmnt;
}

export default useGetQuantity;