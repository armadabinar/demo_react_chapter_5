import React from "react";
import { useParams } from "react-router";

function About() {
    const { id } = useParams()

    return (<h1>
        Hello {id}
    </h1>)
}

export default About