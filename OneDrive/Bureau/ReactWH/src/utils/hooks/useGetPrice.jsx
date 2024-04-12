import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"



const useGetPrice = () => {
    const { cart } = useContext(CartContext);
    const [totalPrice, setTotalPrice ] = useState(0)

    useEffect(() => {
        let totalCartPrice = 0;
        
        cart.forEach(dish => {
            
            totalCartPrice += dish.price * dish.quantity
            
            
            
            
            
            
        });
        
    
        
        
        setTotalPrice(totalCartPrice);

        
    }, [cart])
    return totalPrice;
}

export default useGetPrice;