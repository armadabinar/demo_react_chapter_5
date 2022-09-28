import React from "react";

function Komponen(props) {
    const { onClick } = props
    return (
        <button onClick={onClick}></button>
    )
}

export default Komponen