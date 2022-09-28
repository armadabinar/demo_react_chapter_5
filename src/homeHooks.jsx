import React, { useEffect, useState, Component, useCallback } from "react";
import axios from "axios";


class Post extends Component {
    render() {
        const { title } = this.props

        return <h5>{title}</h5>
    }
}

function HomeHooks() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(input)
    }, [input])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

            if (response.status !== 200) {
                throw new Error('http request failed, status not 200, instead ' + response.status)
            }

            if (!response.data || !response.data) {
                throw new Error('invalid data received from server!')
            }

            setPosts(response.data)
        } catch (err) {
            console.log('error ' + err.toString())
        }
    }

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }

    const onSubmitPost = async () => {
        try {
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    "title": input
                }
            )

            if (response.status < 200 || response.status >= 300) {
                throw new Error('http request failed, status not 200, instead ' + response.status)
            }

            if (!response.data || !response.data.id) {
                throw new Error('invalid post response received from server!')
            }

        } catch (err) {
            console.log('error ' + err.toString())
        }
    }

    const countAllPosts = useCallback(() => {
        return `${posts.length}`
    }, [posts])

    return (
        <>
            <div>{countAllPosts()}</div>
            <div>
                {posts.map(p => <Post title={p.title} />)}
            </div>
            <input onChange={onChangeInput} placeholder='masukkan judul' />
            <button onClick={onSubmitPost}>SUBMIT</button>
        </>
    )
}

export default HomeHooks