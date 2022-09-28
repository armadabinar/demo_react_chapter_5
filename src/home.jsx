import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import { ErrorResponse } from "@remix-run/router";

class Post extends Component {
    render() {
        const { title } = this.props

        return <h5>{title}</h5>
    }
}

class Home extends Component {
    state = { posts: [], inputTitle: '' }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

            if (response.status !== 200) {
                throw new Error('http request failed, status not 200, instead ' + response.status)
            }

            if (!response.data || !response.data) {
                throw new Error('invalid data received from server!')
            }

            this.setState({
                posts: response.data
            })
        } catch (err) {
            console.log('error ' + err.toString())
        }
    }

    async fetchDataWithFetch() {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
            const response = await resp.json()

            if (resp.status !== 200) {
                throw new Error('http request failed, status not 200, instead ' + response.status)
            }

            if (!response) {
                throw new Error('invalid data received from server!')
            }

            this.setState({
                posts: response
            })
        } catch (err) {
            console.log('error ' + err.toString())
        }
    }


    onChangeInput(event) {
        this.setState({
            inputTitle: event.target.value
        })
    }

    async onSubmitPost() {
        const { title } = this.state

        try {
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    "title": title
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

    render() {
        const { posts } = this.state

        return (
            <>
                <div>
                    {posts.map(p => <Post title={p.title} />)}
                </div>
                <input onChange={this.onChangeInput.bind(this)} placeholder='masukkan judul' />
                <button onClick={this.onSubmitPost.bind(this)}>SUBMIT</button>
            </>
        )
    }
}

export default Home