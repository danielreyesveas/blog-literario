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

                    .container {
                        max-width: 1090px;
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
                    *> p:last-child {
                        margin-bottom: 0;
                    }
                    


                    .wrapper {                        
                        display: grid;
                        grid-gap: 10px;
                    }

                    a {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 12px;
                        font-weight: bold;
                        padding: 20px 0;
                        line-height: 2.6;
                        letter-spacing: 1px;
                        color: #1c202a;
                        text-transform: uppercase;
                    }

                    .nav-links {
                        display: none;
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
                        /* ul{
                            margin: 0;
                            padding: 0;
                            display: flex;
                        } */

                        li{
                            font-size: 3vh;
                        }
                        a {                                
                            padding: 2vw;
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

                        .wrapper {
                            grid-template-columns: 2fr 1fr;
                        }
                        
                        .header, .footer {
                            grid-column: 1 / -1;
                            clear: both;
                        }

                    }


                    .sidebar, .content {
                        border: 1px solid black;
                    }

                    .wrapper > * {                    
                        border-radius: 5px;
                    }

                    @supports (display: grid) {
                        .wrapper > * {
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
                        margin: 0;
                        padding: 0;
                        display: flex;
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
                    .footer p {
                        font-size: 1.25rem;
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
            
            <div className="wrapper">
                
                <Header />

                {props.children}

                <Footer />

            </div>
        </>
    );
}
 
export default Layout;