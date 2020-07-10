import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Error404 = ({msg}) => {
    return (
        <h1
            css={css`
                margin-top: 5rem;
                text-align: center;
            `}
        >{msg}</h1>
    );
}
 
export default Error404;