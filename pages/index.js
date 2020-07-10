import React from 'react';
import Layout from '../components/layout/Layout.component';
import usePosts from '../hooks/usePosts';
import Post from '../components/post/Post.component';

const Home = () => {

  const { posts } = usePosts('creado');

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              { posts.map(post => (
                <Post 
                  key={post.id}
                  post={post}
                />
              )) }
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home;