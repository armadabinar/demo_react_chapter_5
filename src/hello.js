import React from "react";
import './hello.css';

function HelloFunction(props) {
    const { type } = props

    function content() {
        if (type === 'besar') {
            return <h1 className="text">hello</h1>
        }

        return <h6>hello</h6>
    }

    return (
        <h1>Hello Function {content()}</h1>
    )
}

export default HelloFunction