import React from 'react'
import usePosts from '../../hooks/usePosts';
import Link from 'next/link';

const RecentPosts = ()  => {
    
    const { posts } = usePosts(3)
    
    return (
        <aside className="widget">
            
            <h3 className="widget-title">Post Recientes</h3>

            <div className="recent-posts-wrapper">

                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-image">
                            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                <a title={post.title}>
                                    <img width="150" height="150" src={post.imageurl} />
                                </a>                            
                            </Link>
                        </div> 

                        <div className="post-content">
                            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                <a title={post.title}>{post.title}</a>                            
                            </Link>
                            <span className="date">{post.author.nombre}</span>
                        </div>
                    </div>
                ))}                

            </div> 
        </aside>
    );
}
 
export default RecentPosts;