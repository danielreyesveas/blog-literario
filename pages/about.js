import React from 'react';
import Layout from '../components/layout/Layout.component';
import usePosts from '../hooks/usePosts';
import Posts from '../components/posts/Posts.component';
import Sidebar from '../components/sidebar/Sidebar.component';

const About = () => {

  const { posts } = usePosts(50);

  return (
    <div>
      <Layout>

        <div className="container main-content-area">          

          <Posts posts={posts}/>

          <Sidebar />                      

        </div>

      </Layout>
    </div>
  )
}

export default About;