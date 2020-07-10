import styled from '@emotion/styled'

const EnlaceHome = styled.a`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Open Sans', 'sans-serif';
        color: #696969;
        background-color: #FFFFFF;
        word-wrap: break-word;
        line-height: 2;
        font-size: 14px;
    }

    ul {
    list-style-type: none;
    }

    h1, p {
        margin: 0 0 1em 0;
    }

    .wrapper {                        
        display: grid;
        grid-gap: 10px;
    }

    a {
        display: block;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        font-size: 12px;
        font-weight: bold;
        padding: 20px 0;
        line-height: 2.6;
        letter-spacing: 1px;
        color: #1c202a;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 500px) {
        button{
            display: none;
        }
        ul{
            flex-direction: column;
        }
        
        li{
            margin: 0;
        }
        a{
            display: block;
        }
        
    }

    @media screen and (min-width: 768px) {
        button{
            display: block;
            
            padding: 2vw;
            font-size: 3vh;                            
            border: none;
            
            outline: none;
            
            cursor: pointer;
            align-self: flex-start;
        }
        .navbar-collapse {
            width: auto;
            border-top: 0;
            box-shadow: none;
        }
        .navbar {                            
            width: 90vw;
            margin: 0 auto;
            width: 100vw;
            
            ul{
                margin: 0;
                display: flex;
                padding-left: 0;
            }

            li{
                list-style-type: none;  
                margin-right: 25px;
                font-size: 3vh;
            }
            a {                                
                padding: 2vw;
            }
            a:hover{
                background-color: #C6E9FF;
            }
        }

        

        .sidebar {
            float: right;
            width: 20%;
            border: 1px solid black;
        }

        .content {
            float: left;
            width: 80%;
            border: 1px solid black;
        }

        .wrapper {
            grid-template-columns: 2fr 1fr;
        }
        

    }

    .navbar {
        height: 200px;
        border: 1px solid black;
    }

    .header { 
        border: 1px solid black;
        grid-column: 1 / -1;
        clear: both;
    }

    .footer {
        border: 1px solid black;
        grid-column: 1 / -1;
        clear: both;
    }

    .wrapper > * {                    
        border-radius: 5px;
        padding: 20px;
        font-size: 150%;
        /* needed for the floated layout*/
    }

    @supports (display: grid) {
        .wrapper > * {
            width: auto;
        }
    }
    .navbar-collapse {
        float: left;
        padding: 0;
    }
    .nav-search {
        float: right;
        padding: 18px 0;
        input {
            border: 0;
            border-radius: 3px;
            line-height: inherit;
        }                    
    }
`;
