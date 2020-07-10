import React from 'react'
import Link from 'next/link'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

const EnlaceHome = styled.a`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;


const Footer = () => {
    return(   
        <footer className="footer">
            <ul className="social-icons">
                <li>
                    <a href="https://www.twitter.com" className="social-icon">
                        <i className="ti-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className="social-icon">
                        <i className="ti-twitter-alt"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com" className="social-icon">
                        <i className="ti-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com" className="social-icon">
                        <i className="ti-google"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" className="social-icon">
                        <i className="ti-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" className="social-icon">
                        <i className="ti-github"></i>
                    </a>
                </li>
            </ul>
            <p>&copy; <span id="date"></span> Blog Ecovegano.</p>
        </footer>
    );
}
 
export default Footer;