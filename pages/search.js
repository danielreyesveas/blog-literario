import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout.component';
import { useRouter } from 'next/router';
import Posts from '../components/posts/Posts.component';
import usePosts from '../hooks/usePosts';
import Sidebar from '../components/sidebar/Sidebar.component'

const Search = () => {
  
  const router = useRouter();  
  const { query: { q } }  = router;

  // Todos los posts
  const { posts } = usePosts('created_at');
  const [ result, setResult ] = useState([]);
  
  useEffect(() => {
    if(q){      
      const search = q.toLowerCase();
      const filter = posts.filter(post => {
        return (
          post.title.toLowerCase().includes(search) || post.subtitle.toLowerCase().includes(search)
        )
      });
      setResult(filter);
    }
  }, [q, posts])

  return (
    <div>
      <Layout>

        <div className="container main-content-area">          

          <Posts 
            posts={result} 
            query={q}
          />

          <Sidebar />                      

        </div>

      </Layout>
    </div>
  )
}

export default Search;