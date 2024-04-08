import React from "react";

const Dish = ({name , img , prix, description}) => {
    return (
        <main>
            <img src={img}/>
            <h1>{name}</h1>
            <p>{description}</p>
            <h4>{prix}€</h4>
        </main>
    )
}

export default Dish;