import React, { useContext } from 'react'
import Link from 'next/link';

import Nav from '../nav/Nav.component'
import { HeaderContainer, LogoContainer } from './Header.styles'
import { FirebaseContext } from '../../firebase'
import Boton from '../ui/Boton'


const Header = () => {

  const { user, firebase } = useContext(FirebaseContext)
  
  return (
    <header className="header">
      <nav className="nav" id="nav">
        <div className="nav-center">

          <button className="nav-btn">
            <i className="fas fa-bars"></i>
          </button>

          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            { user ? (
              <>
                <li><a onClick={() => firebase.logout()}>Logout</a></li>
                <li>
                  <Link href="/create-post">
                    Nuevo
                  </Link>
                </li>
              </>
            ) : (
              <Link href="/login">
                Login
              </Link>
            )}                                              
          </ul>

          <div className="nav-search">
            <form method="get">
              <input type="text" name="s" placeholder="Search" />
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="logo">
          <h1 className="site-name">
            <a href="https://colorlib.com/activello/" className="custom-logo-link" rel="home">
              <img width="207" height="28" src="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/logo.png" className="custom-logo" alt="Activello Theme Demo" />
            </a>
          </h1>
          <div className="tagline">Just another colorlib.com site</div>
        </div>
      </div>
    </header>
  )
}

export default Header;