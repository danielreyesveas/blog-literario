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
                        -webkit-box-sizing: border-box; 
                        -moz-box-sizing: border-box; 
                        box-sizing: border-box;
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
                        cursor: pointer;
                    }
                    a:focus {
                        outline: thin dotted;
                        outline: 5px auto -webkit-focus-ring-color;
                        outline-offset: -2px;
                    }

                    button, input, select, textarea {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 100%;
                        /* Corrects font size not being inherited in all browsers */
                        margin: 0;
                        /* Addresses margins set differently in IE6/7, F3/4, S5, Chrome */
                        vertical-align: baseline;
                        /* Improves appearance and consistency in all browsers */
                        *vertical-align: middle;
                        /* Improves appearance and consistency in all browsers */
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
                        padding-right: 10px;
                        padding-left: 10px;
                        margin-right: auto;
                        margin-left: auto;
                    }
                    .row {
                        margin-right: -15px;
                        margin-left: -15px;
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

                    blockquote {
                        position: relative;
                        border: 0;
                        padding: 0 0 0 50px;
                        font-style: italic;
                        line-height: 1.6;
                        font-size: 17.5px;
                        margin: 0 0 20px;
                    }
                    blockquote:before {
                        content: open-quote; 
                        color: #a161bf;
                        font-size: 80px;
                        position: absolute;
                        left: 5px;
                        top: 0;
                        line-height: 1;
                    }
                    blockquote p {
                        margin: 0;
                    }
                    

                    .main-content-area {
                        margin-top: 40px;
                        margin-bottom: 40px;
                        display: grid;
                    }
                    .main-content-inner-container {
                        margin-right: -15px;
                        margin-left: -15px;
                    }
                    .main-content-inner {
                        margin-right: 15px;
                        margin-left: 15px;
                        margin-bottom: 30px;
                        min-height: 1px;
                        padding-right: 15px;
                        padding-left: 15px;
                    }

                    .navbar.navbar-default {
                        display: block;
                        background-color: #ffffff;
                        font-family: 'Montserrat', sans-serif;
                        margin-bottom: 0;
                        font-weight: 400;
                        min-height: auto;
                        padding: 0;
                        box-shadow: 0 0 2px #e3e3e3;
                    }
                    .navbar-default .navbar-nav> li {
                        margin-right: 25px;
                    }
                    .navbar-default .navbar-nav> li> a {
                        color: #1c202a;
                        text-transform: uppercase;
                        font-size: 12px;
                        font-weight: bold;
                        padding: 20px 0;
                        line-height: 2.6;
                        letter-spacing: 1px;
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

                    .header-search-icon {
                        -webkit-transition: all 0.3s;
                        -moz-transition: all 0.3s;
                        -o-transition: all 0.3s;
                        transition: all 0.3s;
                    }
                    .header-search-icon {
                        background: transparent;
                        color: #696969;
                        border-color: transparent;
                        display: inline-block;
                        font-family: "Montserrat", sans-serif;
                        font-size: 12px;
                        text-transform: uppercase;
                        -webkit-transition: background-color 0.3s linear;
                        -moz-transition: background-color 0.3s linear;
                        -o-transition: background-color 0.3s linear;
                        transition: background-color 0.3s linear;
                    }
                    .header-search-icon:hover,
                    .header-search-icon:focus {
                        background: transparent;
                        cursor: pointer;
                        color: #a161bf;
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
                        .container {
                            width: 1090px;
                        }
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
                            grid-gap: 40px;
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
                    .navbar-default .navbar-toggle {
                        float: left;
                        margin-top: 18px;
                    }
                    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
                        background-color: transparent;
                    }
                    .navbar-default .navbar-toggle:focus span {
                        background-color: #a161bf;
                    }
                    .navbar-collapse {
                        float: left;
                        padding: 0;
                    }
                    .navbar-default .navbar-nav .current-menu-ancestor a.dropdown-toggle {
                        color: #a161bf;
                        background-color: transparent;
                    }
                    .navbar-default .navbar-nav .open .dropdown-menu> li.active> a {
                        color: #fff;
                    }
                    .navbar-default .navbar-nav .open .dropdown-menu> li> a {
                        color: #DADADA;
                    }
                    @media (max-width: 768px) {
                        .site-main {
                            width: 100% !important;
                        }
                        .navbar-collapse {
                            background: #ffffff;
                            float: none;
                            position: absolute;
                            top: 70px;
                            left: 0;
                            padding: 0 15px;
                            width: 100% !important;
                            z-index: 99999;
                        }
                        .navbar-default .navbar-nav .open .dropdown-menu>.active>a, .navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus, .navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover {
                            color: #fff;
                            background-color: #a161bf;
                        }
                        .navbar-nav {
                            margin: 0;
                        }
                        .secondary {
                            padding: 30px 15px 0!important;
                        }
                        .site-info, .copyright {
                            text-align: center;
                        }
                        .footer-nav.nav, .copyright {
                            float: none;
                        }
                        .navbar-header {
                            float: left;
                        }
                        .navbar-toggle {
                            display: block;
                            border: 0;
                            border-radius: 0;
                            margin: 0;
                        }
                        .navbar-default .navbar-toggle .icon-bar {
                            background-color: #888;
                        }
                        .navbar-toggle .icon-bar {
                            display: block;
                            width: 22px;
                            height: 2px;
                            border-radius: 1px;
                        }
                        .navbar-toggle .icon-bar+.icon-bar {
                            margin-top: 4px;
                        }
                        .navbar-collapse.collapse {
                            display: none !important;
                        }
                        .navbar-collapse.collapse.in {
                            display: block !important;
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
                    .entry-footer a:hover,
                    .entry-footer a:focus,
                    .entry-title a:hover,
                    .entry-title a:focus {
                        color: #a161bf;
                    }
                    .post-inner-content {
                        padding: 50px 0;
                    }
                    article.post .post-categories, .post-inner-content .cat-item {
                        position: relative;
                        font-size: 12px;
                        margin: 0 0 15px 0;
                        padding: 0 0 8px 0;
                        list-style: none;
                    }
                    article.post .post-categories:after, .post-inner-content .cat-item:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        height: 2px;
                        width: 40px;
                        margin-left: -20px;
                        background: #a161bf;
                    }
                    article.post .post-categories a, .post-inner-content .cat-item a {
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

                    .cats-widget ul li span {
                        float: right;
                    }
                    .widget_search .search-submit {
                        display: none;
                    }
                    .widget input[type="text"].search-query {
                        width: 100%;
                    }
                    .widget ul li {
                        list-style: none;
                        border-bottom: 1px solid #F2F2F2;
                        margin-bottom: 10px;
                        padding-bottom: 10px;
                    }
                    .widget ul {
                        padding: 0;
                        line-height: 18px;
                        font-size: 14px;
                    }
                    .widget ul.nav.nav-tabs {
                        padding: 0;
                    }
                    .widget ul ul {
                        padding: 10px;
                    }

                    .scroll-to-top {
                        cursor: pointer;
                        position: fixed;
                        right: 20px;
                        z-index: 999;
                        font-size: 16px;
                        text-align: center;
                        height: 35px;
                        width: 35px;
                        border-radius: 50%;

                        bottom: 20px;
                        align-items: center;
                        justify-content: center;
                        opacity: 0.5;
                    }
                    .scroll-to-top:hover,
                    .scroll-to-top:focus {
                        background: #a161bf;
                        opacity: .8;
                    }



                    .post-navigation a, .paging-navigation a {
                        font-family: "Montserrat", sans-serif;
                        font-size: 12px;
                        display: block;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                    }
                    .post-navigation a:hover,
                    .post-navigation a:focus,
                    .paging-navigation a:hover,
                    .paging-navigation a:focus {
                        text-decoration: none;
                    }
                    .paging-navigation {
                        margin-top: 1.5em;
                        text-transform: uppercase;
                    }
                    .post-navigation .nav-previous, .paging-navigation .nav-previous {
                        float: left;
                    }
                    .post-navigation .nav-next, .paging-navigation .nav-next {
                        float: right;
                        text-align: right;
                    }

                    .title-logo {
                        font-family: 'Julius Sans One', sans-serif;
                        color: #a161bf;
                        line-height: 2;
                        font-weight: 500;
                        font-size: 6em;
                        letter-spacing: 10px;
                    }
                    
                    .title-logo-container {
                        margin: 60px;
                    }

                    /* Post Detail */
                    .cat-title {
                        border-bottom: 1px solid #dedede;
                        border-top: 1px solid #dedede;
                        margin: 30px 0 50px 0;
                        padding-bottom: 20px;
                        padding-top: 20px;
                        text-align: center;
                    }
                    .cat-title ul {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    .cat-title ul li {
                        display: inline;
                    }
                    .cat-title a {
                        color: #8e6193;
                        font-family: "Montserrat", sans-serif;
                        text-transform: uppercase;
                    }
                    article.post .post-categories, .post-inner-content .cat-item {
                        position: relative;
                        font-size: 12px;
                        margin: 0 0 15px 0;
                        padding: 0 0 8px 0;
                        list-style: none;
                    }
                    article.post .post-categories:after, .post-inner-content .cat-item:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        height: 2px;
                        width: 40px;
                        margin-left: -20px;
                        background: #a161bf;
                    }
                    article.post .post-categories a, .post-inner-content .cat-item a {
                        color: #696969;
                        font-family: 'Montserrat', sans-serif;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                    }
                    article.post {
                        width: 100%;
                        margin: 0;
                        padding-right: 10px;
                    }
                    article.grid {
                        padding: 0;
                        width: 325px;
                    }
                    article.grid .post-inner-content {
                        border: 0;
                        padding-bottom: 0;
                    }
                    article.grid iframe {
                        max-width: 325px;
                        max-height: 164px;
                        width: 100%;
                    }
                    .single article.post {
                        margin-bottom: 50px;
                    }
                    .single .entry-content a {
                        color: #a161bf;
                    }
                    .single .entry-content a:hover,
                    .single .entry-content a:focus {
                        background: #a161bf;
                        color: #fff;
                    }
                    .single .entry-content .page-links a:hover,
                    .single .entry-content .page-links a:focus {
                        background-color: transparent;
                    }
                    article.post:first-of-type .post-inner-content {
                        padding-top: 0;
                    }
                    .entry-footer {
                        margin-top: 20px;
                        text-align: center;
                    }
                    .entry-footer> *, .entry-footer a {
                        color: #696969;
                        margin: 0 6px;
                    }
                    .tagcloud {
                        margin-top: 25px;
                    }
                    .tagcloud a {
                        padding: 6px 8px;
                        margin-right: 0;
                        margin-bottom: 4px;
                        line-height: 100%;
                        display: inline-block;
                        background-color: #f2f2f2;
                        letter-spacing: 1px;
                        font-family: "Montserrat", sans-serif;
                        font-size: 10px !important;
                        text-transform: uppercase;
                    }
                    .tagcloud a:hover,
                    .tagcloud a:focus {
                        color: #ffffff!important;
                        background-color: #a161bf;
                        border-color: #a161bf;
                    }

                    /* Recent Post widgets */

                    .recent-posts-wrapper .post {
                        float: left;
                        clear: both;
                        margin-bottom: 20px;
                    }
                    .recent-posts-wrapper .post .post-image {
                        width: 80px;
                        height: 80px;
                        float: left;
                        display: block;
                        background-position: center center;
                        background-repeat: no-repeat;
                        overflow: hidden;
                    }
                    .recent-posts-wrapper .post .post-image img:hover,
                    .recent-posts-wrapper .post .post-image img:focus-within {
                        opacity: 0.6 !important;
                    }
                    .recent-posts-wrapper .post .post-content {
                        margin-left: 100px;
                    }
                    .widget .post-content> span {
                        display: block;
                    }
                    .secondary .widget .post-content a {
                        font-style: italic;
                        font-size: 16px;
                    }
                    .secondary .widget .post-content a:hover {}
                    .widget .post-content span {
                        font-size: 12px;
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
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" rel="stylesheet" />

                {/* <link rel="stylesheet" href="/static/css/bootstrap.min.css" /> */}

                <title>Cuenteros</title>

            </Head>
            
            <div>

                <Header />

                {props.children}

                <Footer />
                
                {/* <div className="title-logo-container">
                    <p className="title-logo">Cuenteros</p>
                </div> */}

            </div>
        </>
    );
}
 
export default Layout;