import React from 'react';
import Link from 'next/link';

import { NavContainer, NavLink } from './Nav.styles';

const Nav = () => (

    <NavContainer>

        <Link href='/shop'><NavLink title="/">SHOP</NavLink></Link>

        <Link href='/contact'><NavLink title="/">CONTACT</NavLink></Link>

        <Link href='/contact'><NavLink title='/'>SIGN IN</NavLink></Link>
    
    </NavContainer>
);

export default Nav;