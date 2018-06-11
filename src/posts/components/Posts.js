import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../state/postActions';
import Proptypes from 'prop-types';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts for Today</h1>
                {postItems}
            </div>
        )
    }
}

Posts.Proptypes = {
    fetchPosts: Proptypes.func.isRequired,
    posts: Proptypes.array.isRequired,
    newPost: Proptypes.object
}

const mapStatetoProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item

});

export default connect(mapStatetoProps, { fetchPosts })(Posts);