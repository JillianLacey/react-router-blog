import React, { Component } from 'react'


export default class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorName: '',
            blogTitle: '',
            blogEntry: '',
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    createPost = (e) => {
        e.preventDefault();
        this.setState({ authorName: e.target.value, blogTitle: e.target.value, blogEntry: e.target.value });
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");

        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ authorName: '', blogTitle: '', blogEntry: '' });
    }

    render() {
        let { authorName, blogTitle, blogEntry } = this.state;
        return (
            <div>
                <form onSubmit={this.createPost}>
                    <div>
                        <input onChange={this.handleInputChange} value={authorName} type="text" name="authorName" placeholder="Enter your name" />
                        <input onChange={this.handleInputChange} value={blogTitle} type="text" name="blogTitle" placeholder="Blog Title" />
                        <textarea onChange={this.handleInputChange} value={blogEntry} type="text" name="blogEntry" placeholder="Blog Entry"></textarea>
                    </div>

                    <button id="input-submit" type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
