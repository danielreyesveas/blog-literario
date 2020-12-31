import React from 'react';
import Layout from '../components/layout/Layout.component';
import usePosts from '../hooks/usePosts';
import Posts from '../components/posts/Posts.component';
import Sidebar from '../components/sidebar/Sidebar.component';

const Populares = () => {

  const { posts, islast, isfirst, prevPage, nextPage } = usePosts(6);

  return (
    <div>
      <Layout>

        <div className="container main-content-area">          

          <Posts 
            posts={posts} 
            isfirst={isfirst}
            islast={islast}
            prevPage={prevPage}
            nextPage={nextPage}
          />

          <Sidebar />                      

        </div>

      </Layout>
    </div>
  )
}

export default Populares;