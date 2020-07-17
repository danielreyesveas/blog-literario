import React from 'react'
import Link from 'next/link'
import useCategories from '../../hooks/useCategories'

const Categories = () => {
    const { categories } = useCategories('name');

    return (
        <aside className="widget">
            <h3 className="widget-title">Categories</h3>
            <div className="cats-widget">
                <ul>                    
                    {categories.map(category => (
                        <li key={category.id} className="cat-item">
                            <Link href="/category/[slug]" as={`/category/${category.slug}`}>
                                <a title={category.name}>{category.name}</a>
                            </Link>
                            <span>1</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
 
export default Categories;