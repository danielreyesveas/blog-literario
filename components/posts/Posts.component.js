import React from 'react'
import Post from '../post/Post.component'

const Posts = ({ posts, query, isfirst, islast, prevPage, nextPage }) => {
    
    return (
        <div className="main-content-inner">
            <div className="main-content-inner-container">
                <main id="main" className="site-main" role="main">

                    {query && 
                        <header className="page-header">
                            <h1 className="page-title">Search Results for: <span>{query}</span></h1>
                        </header>
                    }

                    <div className="article-container">

                        {posts.map(post => (
                            <Post 
                                key={post.id}
                                className="post"
                                post={post}
                            />                  
                        ))}
                        
                    </div>

                    <nav className="paging-navigation">
                        {!islast && (
                            <div className="nav-previous"> 
                                <a onClick={() => prevPage()}>Older posts</a>
                            </div>
                        )}
                        {!isfirst && (
                            <div className="nav-next">
                                <a onClick={() => nextPage()}>Newer posts</a> 
                            </div>
                        )}
                    </nav>

                </main> 
            </div>
        </div>
    );
}
 
export default Posts;