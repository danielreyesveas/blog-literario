import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout.component'
import { useRouter } from 'next/router';
import Posts from '../../components/posts/Posts.component';
import usePosts from '../../hooks/usePosts';
import useCategories from '../../hooks/useCategories';
import Sidebar from '../../components/sidebar/Sidebar.component'

const Category = () => {
  
  const router = useRouter();  
  const { query: { slug }} = router;
  const { categories } = useCategories('name');

  // Todos los posts
  const { posts } = usePosts(6);
  const [ result, setResult ] = useState([]);
  const [ category, setCategory ] = useState('');

  useEffect(() => {
    if(slug){      
      const filter = posts.filter(post => {
        return (
          post.category.slug === slug
        )
      });

      setResult(filter);
      
      const cat = categories.find(category => category.slug === slug)
      cat && setCategory(cat.name)
    }
  }, [slug, posts ])

  return (
    <div>
      <Layout>

        <div className="container main-content-area">          

          <Posts 
            posts={result} 
            query={category}
          />

          <Sidebar />                      

        </div>

      </Layout>
    </div>
  )
}

export default Category;