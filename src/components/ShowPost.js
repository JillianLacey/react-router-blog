import React, { Component } from 'react'


export default class ShowPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                blogTitle: ""
            }
        }
    };

    componentWillMount() {
        const { id } = this.props.match.params;
        const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

        fetch(URL).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ post: data });

        })
    }

    render() {


        return (

            <div>
                <p>Author: {this.state.post.authorName}</p>
                <p>Blog Title: {this.state.post.blogTitle}</p>
                <p>Blog Entry: {this.state.post.blogEntry}</p>
            </div>
        );

    }
}
