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
                        Activello. Theme by 
                        <a href="https://colorlib.com/" target="_blank">Colorlib</a> 
                        Powered by <a href="https://wordpress.org/" target="_blank">WordPress</a> 
                    </div>

                </div>
                {/* <button className="scroll-to-top" style="display: block;"><i className="fa fa-angle-up"></i></button> */}
            </footer>
        </div>

        // <footer className="footer">
        //     <nav className="social-icons">
        //         <ul className="social-menu">
        //             <li>
        //                 <a href="https://www.twitter.com" className="social-icon">
        //                     <i className="ti-facebook"></i>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="https://www.twitter.com" className="social-icon">
        //                     <i className="ti-twitter-alt"></i>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="https://www.youtube.com" className="social-icon">
        //                     <i className="ti-youtube"></i>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="https://www.google.com" className="social-icon">
        //                     <i className="ti-google"></i>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="https://www.instagram.com" className="social-icon">
        //                     <i className="ti-instagram"></i>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="https://www.instagram.com" className="social-icon">
        //                     <i className="ti-github"></i>
        //                 </a>
        //             </li>
        //         </ul>
        //     </nav>
        //     <p>&copy; <span id="date"></span> Blog Ecovegano.</p>
        // </footer>
    );
}
 
export default Footer;