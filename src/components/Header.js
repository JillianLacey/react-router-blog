import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
    navStyle: { top: 0, display: "flex", width: "100%", justifyContent: "space-around", paddingTop: 20, marginBottom: 50 },
    listStyle: {},
    linkStyle: {
        textDecoration: "none",
        border: "2px solid pink",
        color: "green",
        fontWeight: "bold",
        padding: 5,
    },
    activeStyle: {
        backgroundColor: "magenta",
        color: "white"
    }
}

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav style={styles.navStyle} >
                    <NavLink exact to="/" style={styles.linkStyle} activeStyle={styles.activeStyle}>Home</NavLink>
                    <NavLink to="/postlist" style={styles.linkStyle} activeStyle={styles.activeStyle}>Post List</NavLink>
                    <NavLink to="/showpost" style={styles.linkStyle} activeStyle={styles.activeStyle}>Show Post</NavLink>
                    <NavLink to="/createpost" style={styles.linkStyle} activeStyle={styles.activeStyle}>Create Post</NavLink>
                </nav>
            </div>
        )
    }
}
