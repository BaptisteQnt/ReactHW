import React from "react";

const Dish = ({name , img , prix}) => {
    return (
        <div>
            <img src={img}/>
            <h1>{name}</h1>
            <h4>{prix}€</h4>
        </div>
    )
}

export default Dish;