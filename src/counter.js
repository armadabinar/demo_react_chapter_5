import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        isClicked: false
    }

    handleOnClick = () => {
        const { count, isClicked } = this.state

        this.setState({
            count: count + 1,
            isClicked: !isClicked,
        })
    }

    render() {
        const { count, isClicked } = this.state


        return (
            <div>
                <p>Total klik <strong>{count}</strong></p>
                <p>is klik <strong>{isClicked ? 'true' : 'false'}</strong></p>
                <button onClick={this.handleOnClick}>Tambah</button>
            </div>
        )
    }
}

export default Counter