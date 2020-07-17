import React from 'react'
import Link from 'next/link'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import ScrollTop from '../scroll-top/ScrollTop.component'


const EnlaceHome = styled.a`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;


const Footer = () => {
    return(   
        <div className="footer-area">
            <footer className="colophon site-footer" role="contentinfo">
                <div className="site-info container">

                    <nav className="social social-icons">
                        <ul id="menu-social-items" className="social-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom">                                
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
                    </nav> 
                    <div className="copyright col-md-12">
                        <a href="https://colorlib.com/" target="_blank">reciclatusanimales</a> 
                    </div>

                </div>
                <ScrollTop />
            </footer>
        </div>
    );
}
 
export default Footer;