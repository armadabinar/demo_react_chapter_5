import React, { Component } from "react";

class Penghitung extends Component {
    state = {
        count: 0
    }

    setCount(val) {
        this.setState({
            count: val
        })
    }

    remNegative() {
        const { count } = this.state

        if (count === 0) {
            return 0;
        }
        if (count > 0) {
            return count - 1
        }
    }

    render() {
        const { count } = this.state
        return (
            <div className='counter'>
                <p>{count}</p>
                <button onClick={() => this.setCount(count + 1)} id='Btn'>Increase</button>
                <button onClick={() => this.setCount(this.remNegative())} id='Btn'>Decrease</button>
            </div>
        );
    }
}



export default Penghitung;