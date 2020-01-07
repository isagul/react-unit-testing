import React, { useState } from 'react';

const Posts = (props) => {
    const {header, desc} = props;
    const [isPostShow, setIsPostShow] = useState(false);

    const post = [
        {id: 1, title: 'A first title', desc: 'A first desc'},
        {id: 2, title: 'A second title', desc: 'A second desc'},
        {id: 3, title: 'A third title', desc: 'A third desc'}
    ];

    if(!header) {
        return null;
    }

    const renderPosts = () => {
        setIsPostShow(true);
    }

    return (
        <div className="postsComponent">
            <h1 className="header">{header}</h1>
            <p className="desc">{desc}</p>
            <button className="renderPosts" onClick={renderPosts}>Render Posts</button>
            {
                isPostShow &&
                post.map(post => {
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
