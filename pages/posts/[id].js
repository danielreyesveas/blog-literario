import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

import Layout from '../../components/layout/Layout.component';
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
    const [ querydb, setQueryDB ] = useState(true);

    // Routing para obtener el id actual
    const router = useRouter();
    const { query: { id }} = router;

    // Context de firebase
    const { firebase, user } = useContext(FirebaseContext);

    useEffect(() => {
        if(id && querydb){
            const getPost = async () => {
                const postQuery = await firebase.db.collection('posts').doc(id);
                const post = await postQuery.get();
                if(post.exists){
                    setPost(post.data());
                    setQueryDB(false);
                }else{
                    setError(true);
                    setQueryDB(false);
                }
            }
            getPost();
        }
    }, [id]);

    if(Object.keys(post).length === 0 && !error) return 'Cargando...';

    const { comments, created_at, subtitle, description, title, imageurl, votes, content, author, hasVoted } = post;

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

        setQueryDB(true); // Hay un voto, por lo tanto consultar a la BD
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

        setQueryDB(true); // Hay un comentario, por lo tanto consultar a la BD
    }

    // Función que revisa que el creador del post sea el autenticado
    const canDelete = () => {
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
                <Fragment>
                    
                    <div className="contenedor">
                        <h1
                            css={css`
                                text-align: center;
                                margin-top: 5rem;
                            `}
                        >{title}</h1>
                        <h1>{subtitle}</h1>
                        
                        <ContenedorProducto>
                            <div>
                                <p>Publicado hace: {formatDistanceToNow(new Date(created_at), {locale: es})}</p>

                                <p>Por: {author.nombre}</p>

                                <img src={imageurl} alt="imagen" />
                                <p>{description}</p>
                                <p>{content}</p>

                                { user && (
                                    <Fragment>
                                        <h2>Agrega tu comentario</h2>

                                        <form
                                            onSubmit={addComment}
                                        >
                                            <Campo>
                                                <input 
                                                    type="text"
                                                    name="message"
                                                    onChange={commentChange}
                                                />
                                            </Campo>
                                            <InputSubmit
                                                type="submit"
                                                value="Agregar Comentario"
                                            />
                                        </form>
                                    </Fragment>
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
                                                <p>{comment.message}</p>
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
                                
                            </div>

                            <aside>
                                
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
                            </aside>
                        </ContenedorProducto>

                        { canDelete() && 
                            <Boton
                                onClick={deletePost}
                            >Eliminar</Boton>
                        }

                    </div>
                </Fragment>
            ) }
        
        </Layout>
    );
}
 
export default Post;