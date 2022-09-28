import React, { useMemo, useState } from "react";

function HooksDemo() {
    const [count, setCounter] = useState(0)
    const [todos, setTodos] = useState([])

    const fibonacci = useMemo(() => fibo(count), [count])

    const handleOnIncrement = () => {
        setCounter(count + 1)
    }

    const handleOnDecrement = () => {
        if (count <= 0) {
            return
        }

        setCounter(count - 1)
    }
    const x = { key: 'value' }
    const y = { ...x }

    console.log(y)

    const addTodo = () => {

        setTodos((t) => {
            const newTodo = [...t]

            console.log('todolen ' + newTodo.length)

            newTodo.push('yyy')

            console.log('todolen after push' + newTodo.length)
            console.log('todolen ori after push' + t.length)

            return [...t, "New Todo"]
        });
    };

    return <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
        <label>{fibonacci}</label>
        <button onClick={handleOnDecrement}>DECREMENT</button>
        <button onClick={handleOnIncrement}>INCREMENT</button>
    </div>

}

function fibo(n) {
    if (n <= 2) {
        return n
    }

    return fibo(n - 1) + fibo(n - 2)
}

export default HooksDemo