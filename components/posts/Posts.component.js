import React from 'react'
import Post from '../post/Post.component'

const Posts = ({ posts }) => {
    
    return (
        <div className="main-content-inner">
            <main id="main" className="site-main" role="main">
                <div className="article-container">

                    {posts.map(post => (
                        <Post 
                            key={post.id}
                            className="post"
                            post={post}
                        />                  
                    ))}
                    
                </div>
            </main> 
        </div>
    );
}
 
export default Posts;