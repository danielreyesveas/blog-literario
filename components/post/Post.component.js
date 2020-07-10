import React from 'react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import Link from 'next/link';

const Producto = styled.li`
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
`;

const Descripcion = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
`;

const Titulo = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;

    :hover {
        cursor: pointer;
    }
`;

const TextoDescripcion = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #888;
`;

const Comentarios = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem 1rem;
        margin-right: 2rem;
    }
    img {
        width: 2rem;
        margin-right: 2rem;
    }
    p {
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type {
            margin: 0;
        }
    }
`;

const Imagen = styled.img`
    width: 200px;
    :hover {
        cursor: pointer;
    }
`;

const Votos = styled.div`
    flex: 0 0 auto;
    text-align: center;
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;
    
    div {
        font-size: 2rem;
    }
    p {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;


const Post = ({post}) => {

    const { id, title, content, urlimagen, description, comments, created_at, votes } = post;

    return (
        <Producto>
            <Descripcion>                
               
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <Imagen src={urlimagen} alt="image"/>
                </Link>
                    
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <Titulo>{title}</Titulo>
                </Link>
                
                <Titulo>{content}</Titulo>

                <TextoDescripcion>{description}</TextoDescripcion>

                    <Comentarios>
                        <div>
                            <img src="/static/img/comentario.png" alt="comentarios"/>
                            <p>{comments.length} comentarios</p>
                        </div>
                    </Comentarios>

                    <p>Publicado hace: {formatDistanceToNow(new Date(created_at), {locale: es})}</p>
                
            </Descripcion>

            <Votos>
                <div> &#9650; </div>
                <p>{votes}</p>
            </Votos>

        </Producto>
    );
}
 
export default Post;