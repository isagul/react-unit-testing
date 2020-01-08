import React, { useState } from 'react';
import './style.scss';

const Posts = (props) => {
    const {header, desc} = props;
    const [isPostShow, setIsPostShow] = useState(false);
    const [posts, setPosts] = useState([
        {id: 1, title: 'A first title', desc: 'A first desc'},
        {id: 2, title: 'A second title', desc: 'A second desc'},
        {id: 3, title: 'A third title', desc: 'A third desc'}
    ])


    if(!header) {
        return null;
    }

    const renderPosts = () => {
        setIsPostShow(true);
    }

    const addNewPost = () => {
        const oldPost = [...posts];
        oldPost.push({
            id: 4, title: 'A fourth title', desc: 'A fourth desc'
        })
        setPosts(oldPost);
    }

    return (
        <div className="postsComponent">
            <h1 className="header">{header}</h1>
            <p className="desc">{desc}</p>
            <button className="renderPosts" onClick={renderPosts}>Render Posts</button>
            <button className="addNewPost" onClick={addNewPost}>Add Post</button>
            {
                isPostShow &&
                posts.map(post => {
                    return (
                        <div className="posts" key={post.id}>
                            <h2 className="postsTitle">{post.title}</h2>
                            <p className="postsDesc">{post.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts;
