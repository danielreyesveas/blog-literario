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

    const { id, title, subtitle, content, imageurl, description, comments, created_at, votes, author, category } = post;

    return (

        <article key={post.id} className="post">
            <div className="post-inner-content">
                
                <header className="entry-header page-header">
                    <ul className="single-category"> 
                        <li className="cat-item">
                            <a href="https://colorlib.com/activello/category/post-formats/" title="Posts in this category test post formats.">{category.name}</a>
                        </li>
                    </ul> 
                    <h2 className="entry-title">
                        <Link href="/posts/[id]" as={`/posts/${id}`}>
                            <a title={title}>{title}</a>                            
                        </Link>
                    </h2>
                    <div className="entry-meta">
                        {/* <span className="posted-on">
                            Publicado hace: 
                            <a href="https://colorlib.com/activello/post-format-standard/" rel="bookmark">
                                <time className="entry-date published" dateTime="2016-10-05T00:27:25+00:00"> {formatDistanceToNow(new Date(created_at), {locale: es})}</time>
                                <time className="updated" dateTime="2017-05-17T13:17:36+00:00"></time>
                            </a>
                        </span>
                        by  */}
                        <span className="author vcard">
                            <a href="#"> {author.nombre}</a>
                        </span>
                    </div>                    
                </header>

                <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a title={title}>
                        <img width="710" height="335" src={imageurl} /> 
                        {/* <img width="710" height="335" src="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/photo-1438109491414-7198515b166b-710x335.jpg" className="single-featured wp-post-image" alt="" srcSet="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/photo-1438109491414-7198515b166b-710x335.jpg 710w, https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/photo-1438109491414-7198515b166b-1170x550.jpg 1170w" sizes="(max-width: 710px) 100vw, 710px" />  */}
                    </a>                            
                </Link>                
                
                <div className="entry-content">
                    <p>{description}</p>
                    <div className="read-more">
                        <Link href="/posts/[id]" as={`/posts/${id}`}>
                            <a title="more">Leer</a>                            
                        </Link>
                    </div>
                </div>

            </div>
        </article>

        // <Producto>
        //     <Descripcion>                
               
        //         <Link href="/posts/[id]" as={`/posts/${id}`}>
        //             <Imagen src={imageurl} alt="image"/>
        //         </Link>
                    
        //         <Link href="/posts/[id]" as={`/posts/${id}`}>
        //             <Titulo>{title}</Titulo>
        //         </Link>
                
        //         <Titulo>{content}</Titulo>

        //         <TextoDescripcion>{description}</TextoDescripcion>

        //             <Comentarios>
        //                 <div>
        //                     <img src="/static/img/comentario.png" alt="comentarios"/>
        //                     <p>{comments.length} comentarios</p>
        //                 </div>
        //             </Comentarios>

        //             <p>Publicado hace: {formatDistanceToNow(new Date(created_at), {locale: es})}</p>
                
        //     </Descripcion>

        //     <Votos>
        //         <div> &#9650; </div>
        //         <p>{votes}</p>
        //     </Votos>

        // </Producto>
    );
}
 
export default Post;