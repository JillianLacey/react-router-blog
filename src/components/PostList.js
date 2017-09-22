import React, { Component } from 'react';
// import ShowPost from './ShowPost';
import { Link } from 'react-router-dom';


export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    };
    // let songs = this.state.vehicles;

    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ posts: data });
            // console.log("state", this.state.songs);
        })
    }




    render() {
        let posts = this.state.posts.map((post, index) => {
            // let postList;

            return (
                <div key={index}>
                    <p>Author: {post.authorName}</p>
                    <Link to={'/posts/' + post._id}>Blog Title: {post.blogTitle}</Link>
                    <p>Blog Entry: {post.blogEntry}</p>
                </div>
            )
        })



        return (
            <div>
                {posts}
            </div>
        )
    }
}