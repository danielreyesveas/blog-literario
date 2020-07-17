import React, { useContext } from 'react'
import Link from 'next/link';

import Nav from '../nav/Nav.component'
import Search from '../search/Search.component'
import { HeaderContainer, LogoContainer } from './Header.styles'
import { FirebaseContext } from '../../firebase'
import Boton from '../ui/Boton'


const Header = () => {

  const { user, firebase } = useContext(FirebaseContext)
  
  return (
    <header className="header">
      <nav className="navbar navbar-default" id="nav">
        <div className="nav-center">

          {/* <div className="navbar-header">
            <button type="button" className="btn navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div> */}

          <ul className="nav-links">
            <li>
              <Link href="/">
                <a title="inicio">Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a title="popular">Popular</a>
              </Link>
            </li>
            { user ? (
              <>
                <li>
                  <Link href="/create-post">
                    <a title="create-post">Nuevo</a>
                  </Link>
                </li>
                <li>
                  <a onClick={() => firebase.logout()}>Logout</a>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login">
                  <a title="login">Login</a>
                </Link>
              </li>
            )}                                              
          </ul>

          <Search />
          
        </div>
      </nav>
      <div className="container">
        <div className="logo">
          <h1 className="site-name">
            <Link href="/">
              <a className="custom-logo-link" title="Cuenteros">
                <img width="280" height="32" src="/static/img/logo.png" className="custom-logo" alt="Activello Theme Demo" />
              </a>
            </Link>
          </h1>
          <div className="tagline">Todo es cuento</div>
        </div>
      </div>
    </header>
  )
}

export default Header;