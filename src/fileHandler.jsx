import React, { Component } from "react";
import axios from "axios";

class FileHandler extends Component {
    state = {
        selectedFile: null,
        image: null
    }

    file = React.createRef()

    handleSubmit = async e => {
        e.preventDefault()

        const { selectedFile } = this.state
        const formData = new FormData()

        formData.append('myFile', selectedFile, selectedFile.name)

        try {
            await axios.post('api/uploadFile', formData)

        } catch (err) {
            console.log('error ' + err.toString())
        }
    }

    handleFileChange = e => {
        const file = this.file.current.files[0]

        const reader = new FileReader()

        this.setState({ selectedFile: file })

        reader.addEventListener('load', () => {
            this.setState({ image: reader.result })
        })

        if (file.type.includes('image/')) {
            reader.readAsDataURL(file)
        }
    }

    render() {
        const { image } = this.state
        return (
            <div>
                {!!image && <img src={image} alt='Preview' />}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type='file'
                        name='photo'
                        ref={this.file}
                        onChange={this.handleFileChange.bind(this)}
                    />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default FileHandler