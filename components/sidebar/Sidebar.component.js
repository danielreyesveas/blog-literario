import React from 'react'

import About from '../about/About.component'
import Categories from '../categories/Categories.component'
import RecentPosts from '../recent-posts/RecentPosts.component'

const Sidebar = ({ posts }) => {
    return (
        <div className="secondary widget-area" role="complementary">

            <About />


            <RecentPosts posts={posts}/>
                          
            <Categories />
            
        </div>
    );
}
 
export default Sidebar;