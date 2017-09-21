import React, { Component } from 'react';
import ShowPost from './ShowPost';


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

    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ posts: data });
        })
    }


    render() {
        let posts = this.state.posts;
        return (
            <header>
                <div>
                    <form onSubmit={this.fetchData}>
                        <button>Refresh List</button>
                    </form>
                    <ShowPost posts={posts} />
                </div>
            </header>
        )
    }
}