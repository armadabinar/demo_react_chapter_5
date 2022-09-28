import React from "react";
import './carCard.css'

function CarCard(props) {
    const { imageURL, carName, carPrice } = props

    return (
        <div class="carCard">
            <img src={imageURL} className="carImage" alt="" />
            <p className="carName">{carName}</p>
            <p className="carPrice">{carPrice}</p>
        </div>
    )
}

export default CarCard