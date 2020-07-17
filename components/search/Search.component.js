import React, { useState } from 'react'
import Router from 'next/router'

const Search = () => {

    const [ search, setSearch ] = useState('');

    const searchPosts = e => {
        e.preventDefault();
        
        if(search.trim() === '') return;

        // Redireccionar al usuario a /buscar
        Router.push({
            pathname: '/search',
            query: { q: search }
        })
    }

    return (
        <div className="nav-search">
            <form 
                onSubmit={searchPosts}
            >
                <input 
                    type="text" 
                    placeholder="Buscar" 
                    onChange={ e => setSearch(e.target.value) }
                />
                <button type="submit" className="header-search-icon">
                  <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
}
 
export default Search;