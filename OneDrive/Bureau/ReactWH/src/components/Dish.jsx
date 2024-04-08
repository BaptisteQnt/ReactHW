import React from "react";

const Dish = ({name , img , price}) => {
    return (
        <div>
            <img src={img}/>
            <h1>{name}</h1>
            <h4>{price}€</h4>
        </div>
    )
}

export default Dish;