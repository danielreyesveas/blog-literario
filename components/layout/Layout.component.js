import React from 'react'
import Head from 'next/head'

import { Global, css } from '@emotion/core'

import Header from '../header/Header.component'
import Footer from '../footer/Footer.component'

const Layout = props => {
    return (
        <>
            <Global
                styles={css`
                    *, *:before, *:after {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    body {
                        color: #696969;
                        background-color: #FFFFFF;
                        word-wrap: break-word;
                        font-family: 'Lora', serif;
                        line-height: 2;
                        font-size: 14px;
                    }

                    ul {
                       list-style-type: none;
                    }
                    a {
                        color: #393939;
                        text-decoration: none;
                        -webkit-transition: all 0.3s;
                        -moz-transition: all 0.3s;
                        -o-transition: all 0.3s;
                        transition: all 0.3s;
                    }
                    a:hover, a:focus {
                        color: #a161bf;
                        text-decoration: none;
                    }
                    a:focus {
                        outline: thin dotted;
                        outline: 5px auto -webkit-focus-ring-color;
                        outline-offset: -2px;
                    }

                    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
                        color: #696969;
                        font-weight: 400;
                        font-family: 'Montserrat', sans-serif;
                        margin: 30px 0;
                    }
                    img {
                        height: auto;
                        max-width: 100%;
                    }

                    .container {
                        max-width: 1090px;
                        padding-right: 15px;
                        padding-left: 15px;
                        margin-right: auto;
                        margin-left: auto;
                    }
                    h1, .h1 {
                        font-size: 28px;
                    }
                    h2, .h2 {
                        font-size: 24px;
                    }
                    h3, .h3 {
                        font-size: 20px;
                    }
                    h4, .h4 {
                        font-size: 16px;
                    }
                    h5, .h5 {
                        font-size: 14px;
                    }
                    h6, .h6 {
                        font-size: 13px;
                    }
                    p {
                        margin: 15px 0;
                    }
                    *> p:first-of-type {
                        margin-top: 0;
                    }
                    *> p:last-of-type {
                        margin-bottom: 0;
                    }
                    


                    

                    .nav-links {
                        display: none;

                        a {
                            font-family: 'Montserrat', sans-serif;
                            font-size: 12px;
                            font-weight: bold;
                            padding: 20px 0;
                            line-height: 2.6;
                            letter-spacing: 1px;
                            color: #1c202a;
                            text-transform: uppercase;
                            padding: 2vw;
                        }
                        li{
                            font-size: 3vh;
                        }
                    }
                    .nav {
                        height: 4rem;
                        display: grid;
                        -webkit-box-align: center;
                        align-items: center;
                        -webkit-transition: all 0.3s linear;
                        transition: all 0.3s linear;
                        padding: 1rem;
                    }
                    .nav-center {
                        width: 100%;
                        max-width: 1170px;
                        margin: 0 auto;
                    }
                    .nav-header {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        -webkit-box-align: center;
                        align-items: center;
                    }
                    .nav-btn {
                        background: transparent;
                        border-color: transparent;
                        font-size: 2rem;
                        cursor: pointer;                        
                        justify-self: left;                    
                    }                    

                    @media screen and (min-width: 768px) {
                        .container {
                            width: 750px;
                        }
                        .nav-btn {
                            display: none;
                        }
                        .nav-links {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            font-size: 3vh;
                            margin-right: 25px;
                        }
                        .nav-links a {
                            text-transform: uppercase;
                            font-weight: bold;
                            letter-spacing: 0.25rem;
                            -webkit-transition: all 0.3s linear;
                            transition: all 0.3s linear;
                        }
                        .nav-links a:hover {
                            color: #a161bf;
                        }
                        .nav-center {
                            display: grid;
                            grid-template-columns: auto 1fr;
                            -webkit-box-align: center;
                            align-items: center;
                        }
                    }
                    /* fixed navbar */
                    .navbar-fixed {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        z-index: 2;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    }
                    
                    @media only screen and (max-width: 500px) {
                        ul{
                            flex-direction: column;
                        }
                        
                        li{
                            margin: 0;
                        }
                        a{
                            display: block;
                        }
                        button{
                            display: block;
                            
                            padding: 2vw;
                            font-size: 3vh;                            
                            border: none;
                            
                            outline: none;
                            
                            cursor: pointer;
                            align-self: flex-start;
                        }
                    }
                    
                    @media screen and (min-width: 768px) { 
                        .article-container {
                            overflow: hidden;
                        }
                        .post {
                            width: 100%;
                            padding-right: 0!important;
                            float: left;
                        }
                        .post-inner-content {
                            border-bottom: 1px solid #dedede;
                        }
                        /* ul{
                            margin: 0;
                            padding: 0;
                            display: flex;
                        } */ 
                        .blog.home article.post .read-more, .blog.home article.post .entry-footer {
                            display: none;
                        }         
                        .blog.home .page-1 article.post:first-of-type .read-more, .blog.home .page-1 article.post:nth-of-type(2) .read-more, .blog.home .page-1 article.post:first-of-type .entry-footer, .blog.home .page-1 article.post:nth-of-type(2) .entry-footer {
                            display: block;
                        }              
                    }
                    
                    @media (max-width: 992px) {
                        .site-branding {
                            text-align: center;
                        }
                        .main-content-inner {
                            margin-bottom: 30px;
                        }
                    }

                    @media screen and (min-width: 1090px) { 
                        .sidebar {
                            float: right;
                            width: 20%;
                        }

                        .content {
                            float: left;
                            width: 80%;
                        }

                        .main-content-area {
                            grid-template-columns: 2fr 1fr;
                        }
                        
                        .header, .footer {
                            grid-column: 1 / -1;
                            clear: both;
                        }
                    }


                    .site-main {
                        max-width: 100%;
                    }

                    .sidebar, .content {
                        border: 1px solid black;
                    }

                    .main-content-area > * {                    
                        border-radius: 5px;
                    }

                    @supports (display: grid) {
                        .main-content-area > * {
                            width: auto;
                        }
                    }
                    .nav-search {
                        justify-self: end;
                    }
                    .nav-search input {
                        border: 0;
                    }

                    .logo {
                        padding: 50px 0 45px 0;
                        text-align: center;
                    }
                    a.custom-logo-link {
                        display: block;
                    }

                    .site-name {
                        display: inline-block;
                        margin: 0;
                    }

                    .tagline {
                        font-family: 'Montserrat', sans-serif;
                        margin-top: 10px;
                        letter-spacing: 1px;
                    }


                    .footer-area {
                        background-color: #f2f2f2;
                        color: #999;
                    }
                    .footer-area .footer-widget-area {
                        padding: 40px 0 20px 0;
                        overflow: hidden;
                    }
                    .footer-area ul li {
                        border-bottom: 1px solid #444;
                    }
                    .footer-area .site-info nav ul li {
                        border-bottom: none;
                    }
                    .footer-area .social a {
                        margin: 0 15px;
                    }
                    .colophon {
                        padding: 50px 0;
                        text-align: center;
                    }
                    .site-info a {
                        color: #777;
                    }
                    .site-info a:hover,
                    .site-info a:focus {
                        color: #a161bf;
                    }
                    .site-info {
                        color: #999;
                        font-size: 12px;
                    }
                    @media (max-width: 768px) {
                        .secondary {
                            padding: 30px 15px 0!important;
                        }
                        .site-info, .copyright {
                            text-align: center;
                        }
                        .footer-nav.nav, .copyright {
                            float: none;
                        }
                    }
                    .copyright {
                        font-family: "Montserrat", sans-serif;
                        margin-top: 10px;
                    }
                    .copyright, .copyright a {
                        color: #696969;
                    }



                    .footer {
                        padding: 30px 0;
                        text-align: center;
                        background-color: #f2f2f2;
                        color: #999;
                        line-height: 2;
                        font-size: 12px;
                        padding-bottom: 1rem;
                        display: grid;
                        place-items: center;
                    } 
                    .social-icons {
                        position: relative;
                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .social a {
                        color: #696969;
                        display: inline-block;
                        font-size: 18px;
                        list-style: none;
                        text-align: center;
                    }
                    .footer .social-icon {
                        color: #696969;
                        display: inline-block;
                        font-size: 18px;
                        list-style: none;
                        text-align: center;
                    }
                    .footer .social-icon:hover {
                        color: #a161bf;
                    }
                    .social-icons li {
                        display: inline-block;
                    }
                    .footer p {
                        font-size: 1.25rem;
                    }

                    .main-content-area {
                        margin-top: 40px;
                        margin-bottom: 40px;
                        display: grid;
                        grid-gap: 10px;
                    }

                    article.post {
                        width: 100%;
                        margin: 0;
                        padding-right: 10px;
                    }
                    .page-header {
                        margin-top: 0;
                        border-bottom: 0;
                        padding-bottom: 0;
                    }
                    .entry-header {
                        text-align: center;
                    }
                    .single-category {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    .single-category > li {
                        display: inline-block;
                    }
                    .single-category > li.show-more-categories {
                        cursor: pointer;
                        position: relative;
                    }
                    .entry-title {
                        color: #444;
                        font-family: "Lora", serif;
                        font-size: 24px;
                        font-style: italic;
                        margin-top: 0;
                        margin-bottom: 15px;
                    }
                    .entry-title a {
                        color: #444;
                        text-transform: capitalize;
                    }
                    .cat-item a:hover,
                    .cat-item a:focus,
                    .entry-meta a:hover,
                    .entry-meta a:focus,
                    .read-more a:hover,
                    .read-more a:focus,
                    .entry-title a:hover,
                    .entry-title a:focus {
                        color: #a161bf;
                    }
                    .cat-item {
                        position: relative;
                        font-size: 12px;
                        margin: 0 0 15px 0;
                        padding: 0 0 8px 0;
                        list-style: none;
                    }
                    .cat-item:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        height: 2px;
                        width: 40px;
                        margin-left: -20px;
                        background: #a161bf;
                    }
                    .cat-item a {
                        color: #696969;
                        font-family: 'Montserrat', sans-serif;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                    }

                    .entry-meta a {
                        font-size: 13px;
                        color: #6B6B6B;
                    }
                    .entry-meta {
                        margin-bottom: 20px;
                    }
                    footer.entry-meta {
                        margin-bottom: 0;
                    }
                    .page-header {
                        margin-top: 0;
                        border-bottom: 0;
                        padding-bottom: 0;
                    }
                    .entry-meta .fa {
                        font-size: 14px;
                        margin-right: 3px;
                    }
                    .entry-meta span {
                        margin-right: 10px;
                    }
                    .updated {
                        display: none;
                    }
                    .post-image img:hover,
                    .post-image img:focus-within {
                        opacity: 0.6 !important;
                    }
                    .single-featured {
                        -webkit-transition: opacity 0.3s linear;
                        -moz-transition: opacity 0.3s linear;
                        -o-transition: opacity 0.3s linear;
                        transition: opacity 0.3s linear;
                        display: block;
                        margin: auto;
                    }
                    .single-featured:hover,
                    .single-featured:focus-within {
                        opacity: 0.8;
                    }
                    .page-content, .entry-content {
                        margin: 20px 0 0;
                    }
                    .read-more {
                        text-align: center;
                    }
                    .read-more a {
                        border-left: 2px solid #696969;
                        border-right: 2px solid #696969;
                        color: #696969;
                        font-family: 'Maven Pro', sans-serif;
                        font-weight: 700;
                        line-height: 1.2;
                        letter-spacing: 1px;
                        display: inline-block;
                        padding: 0 10px;
                        text-transform: uppercase;
                    }


                    
                    .secondary .widget .social-icons a {
                        margin-right: 20px;
                    }
                    .social-icons {
                        position: relative;
                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .secondary .widget .social-icons {
                        text-align: left;
                    }
                    .has-sidebar-left .secondary {
                        padding-right: 40px;
                    }

                    .secondary .widget {
                        margin-bottom: 50px;
                        overflow: hidden;
                    }
                    .secondary .widget:last-of-type {
                        margin-bottom: 0px;
                    }
                    .secondary .widget> h3 {
                        font-size: 14px;
                        text-transform: uppercase;
                        margin-bottom: 25px;
                        margin-top: 0;
                        color: #636467;
                    }
                    .secondary .widget-title {
                        position: relative;
                        padding-bottom: 15px;
                        margin-bottom: 15px;
                    }
                    .secondary .widget-title:after {
                        position: absolute;
                        content: "";
                        bottom: 0;
                        left: 0;
                        height: 2px;
                        width: 40px;
                        background: #a161bf;
                    }
                    ul.menu-social-items, .secondary .widget .social-icons {
                        margin-bottom: 0;
                    }
                    .secondary .widget .post-content a {
                        font-style: italic;
                        font-size: 16px;
                    }
                    @media (max-width: 767px) {
                        .secondary {
                            clear: both;
                        }
                    }
                `}
            />
           
            <Head>
                {/* <link href="/static/css/css.css" rel="stylesheet" /> */}
                <link rel="stylesheet" href="/static/fonts/fontawesome/css/all.min.css"></link>
                <link rel="stylesheet" href="/static/fonts/themify-icons/themify-icons.css"></link>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
                {/* <link rel="stylesheet" href="/static/css/bootstrap.min.css" /> */}

                <title>Blog Ecovegano</title>

            </Head>
            
            <div>
                
                <Header />

                {props.children}

                <Footer />

            </div>
        </>
    );
}
 
export default Layout;