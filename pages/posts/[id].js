import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import ReactHtmlParser from 'react-html-parser';

import Layout from '../../components/layout/Layout.component'
import Sidebar from '../../components/sidebar/Sidebar.component'
import Spinner from '../../components/spinner/Spinner.component'
import Link from 'next/link'
import { FirebaseContext } from '../../firebase';
import Error404 from '../../components/404/404.component';


/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { Campo, InputSubmit } from '../../components/ui/Formulario';
import Boton from '../../components/ui/Boton';

const ContenedorProducto = styled.div`
    @media (min-width:768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const CreadorProducto = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;

const Post = () => {

    // State del componente
    const [ post, setPost ] = useState({});
    const [ error, setError ] = useState(false);
    const [ comment, setComment ] = useState({});
    const [ querydb, setQueryDB] = useState(true)

    // Routing para obtener el id actual
    const router = useRouter();
    const { query: { id }} = router;
    console.log(router)
    console.log(id)

    // Context de firebase
    const { firebase, user } = useContext(FirebaseContext);

    useEffect(() => {
        if(id && querydb){
            const getPost = async () => {
                const postQuery = await firebase.db.collection('posts').doc(id);
                const post = await postQuery.get();
                if(post.exists){
                    setPost(post.data());
                }else{
                    setError(true);
                }
                setQueryDB(false)
            }
            getPost();
        }
    }, [id]);

    if(Object.keys(post).length === 0 && !error) return <Spinner />;

    const { comments, created_at, subtitle, category, description, title, imageurl, votes, content, author, hasVoted } = post;

    // Administrar y validar los votos
    const votePost = () => {
        if(!user){
            return router.push('/login');
        }

        // Obtener y sumar un nuevo voto
        const newTotal = (votes + 1);

        // Verificar si el usuario actual ha votado
        if(hasVoted.includes(user.uid)){
            return;
        }

        // Guardar el id del usuario que ha votado
        const newHasVoted = [...hasVoted, user.uid];
        
        // Actualizar en la BD
        firebase.db.collection('posts').doc(id).update({ votes: newTotal, hasVoted: newHasVoted });
        

        // Actualizar en el state
        setPost({
            ...post,
            votes: newTotal,
            hasVoted: newHasVoted 
        });
    }

    // Funciones para crear comentarios
    const commentChange = e => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    // Identifica si el comentario es del creador del post
    const isAuthor = id => {
        if(author.id === id){
            return true;
        }
    }

    const addComment = e => {
        e.preventDefault();

        if(!user){
            return router.push('/login');
        }

        // Información extra al comentario
        comment.userId = user.uid;
        comment.userName = user.displayName;

        // Tomar copia de comentarios y agregarlos al arreglo
        const newComments = [
            ...comments, 
            comment
        ];

        // Actualizar la BD
        firebase.db.collection('posts').doc(id).update({
            comments: newComments
        });

        // Actualizar el state
        setPost({
            ...post,
            comments: newComments
        });

    }

    // Función que revisa que el creador del post sea el autenticado
    const canDelete = () => {
        if(!user) return false;

        if(author.id === user.uid) return true;        
    }
    
    const canEdit = () => {
        return true
        if(!user) return false;

        if(author.id === user.uid) return true;        
    }

    // Elimina un post de la BD
    const deletePost = async () => {
        if(!user){
            return router.push('/login');
        }
        if(author.id !== user.uid) {
            return router.push('/login');        
        }

        try {
            await firebase.db.collection('posts').doc(id).delete();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <Layout>
            { error ? <Error404 msg="Post no existe" /> : (
                <>

                    <div className="cat-title">
                        <ul className="post-categories">
                            <li>
                                <Link href="/category/[slug]" as={`/category/${category.slug}`}>
                                    <a title={category.name}>{category.name}</a>
                                </Link>
                            </li>
                        </ul> 
                    </div>
                    <div className="container main-content-area">         

                        <main className="site-main single" role="main">
                            <article className="post">
                                <div className="post-inner-content">
                                    <header className="entry-header page-header">
                                        <h1 className="entry-title">{title}</h1>
                                        <div className="entry-meta">
                                            <span className="author vcard"><a className="url fn n" href="https://colorlib.com/activello/author/aigars-silkalns/">{author.nombre}</a></span>
                                        </div>
                                    </header>

                                    <img width="1170" height="550" src={imageurl} className="single-featured wp-post-image" alt="post" /> 

                                    <div className="entry-content">
                                        {subtitle && (
                                            <blockquote>
                                                { ReactHtmlParser(subtitle) }
                                            </blockquote>
                                        )}
                                        
                                        { ReactHtmlParser(content) }
                                    </div>
                                    
                                    <div className="entry-footer">
                                        <div className="tagcloud">
                                            <a href="#">ficción</a> 
                                            <a href="#">fantástico</a>
                                        </div>
                                    </div>

                                    <div
                                        css={css`
                                            margin-top: 5rem;
                                        `}
                                    >
                                        <p
                                            css={css`
                                                text-align: center;
                                            `}
                                        >{votes} votos</p>

                                        { user && (
                                            <Boton
                                                onClick={votePost}
                                            >Votar</Boton>
                                        )}
                                    </div>

                                </div>

                                { user && (
                                    <>
                                        <h2>Agrega tu comentario</h2>

                                        <form
                                            onSubmit={addComment}
                                        >
                                            <Campo>
                                                <input 
                                                    type="text"
                                                    name="mensaje"
                                                    onChange={commentChange}
                                                />
                                            </Campo>
                                            <InputSubmit
                                                type="submit"
                                                value="Agregar Comentario"
                                            />
                                        </form>
                                    </>
                                )}

                                <h2
                                    css={css`
                                        margin: 2rem 0;
                                    `}
                                >Comentarios</h2>

                                {comments.length === 0 ? "Aún no hay comentarios" : (
                                    <ul>
                                        { comments.map((comment, i) => (
                                            <li
                                                key={`${comment.userId}-${i}`}
                                                css={css`
                                                    border: 1px solid #e1e1e1;
                                                    padding: 2rem;
                                                `}
                                            >
                                                <p>{comment.mensaje}</p>
                                                <p>Escrito por
                                                    <span
                                                        css={css`
                                                            font-weight: bold;
                                                        `}
                                                    >
                                                        {''} {comment.userName}
                                                    </span>        
                                                </p>
                                                { isAuthor(comment.userId) && <CreadorProducto>Es Creador</CreadorProducto> }
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                { canEdit() && 
                                    <Link href={{ pathname: '/edit-post', query: { id: id } }}>
                                        <Boton>Editar</Boton>
                                    </Link>
                                }

                                { canDelete() && 
                                    <Boton
                                        bgColor
                                        onClick={deletePost}
                                    >Eliminar</Boton>
                                }
                            

                            </article>

                            {/* <nav className="navigation post-navigation" role="navigation">
                                <h1 className="screen-reader-text">Post navigation</h1>
                                <div className="nav-links">
                                    <div className="nav-previous">
                                        <a href="https://colorlib.com/activello/post-format-chat/" rel="prev"><i className="fa fa-chevron-left"></i> Post Format: Chat</a></div><div className="nav-next"><a href="https://colorlib.com/activello/post-format-link/" rel="next">Post Format: Link <i className="fa fa-chevron-right"></i></a>
                                    </div> 
                                </div>
                            </nav> */}
                        </main>
            
                        <Sidebar />          
        
                    </div>

                </>
            ) }
        
        </Layout>
    );
}
 
export default Post;