import React from 'react'
import usePosts from '../../hooks/usePosts';
import Link from 'next/link';

const RecentPosts = ()  => {
    
    const { posts } = usePosts(3)
    
    return (
        <aside className="widget">
            
            <h3 className="widget-title">Recent Posts</h3>

            <div className="recent-posts-wrapper">

                {posts.map(post => {
                    const { id, title, imageurl, author } = post
                    return (
                        <div key={id} className="post">
                            <div className="post-image">
                                <Link href="/posts/[id]" as={`/posts/${id}`}>
                                    <a title={title}>
                                        <img width="150" height="150" src={imageurl} />
                                    </a>                            
                                </Link>
                            </div> 

                            <div className="post-content">
                                <Link href="/posts/[id]" as={`/posts/${id}`}>
                                    <a title={title}>{title}</a>                            
                                </Link>
                                <span className="date">{author.nombre}</span>
                            </div>
                        </div>
                )})}                

            </div> 
        </aside>
    );
}
 
export default RecentPosts;