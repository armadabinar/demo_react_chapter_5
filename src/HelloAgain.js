import React, { Component } from "react";

class HelloAgain extends Component {

    content() {
        const { type } = this.props

        if (type === 'besar') {
            return <h1>hello</h1>
        }

        return <h6>hello</h6>
    }

    render() {


        return <>
            <h3>
                Hello Lagi {this.content()}
            </h3>
        </>
    }
}

export default HelloAgain