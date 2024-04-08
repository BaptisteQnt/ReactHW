import React from "react";

const Menus = ({name , img , prix, description}) => {
    return (
        <div>
            <img src={img}/>
            <h1>{name}</h1>
            <p>{description}</p>
            <h4>{prix}€</h4>
        </div>
    )
}

export default Menus;