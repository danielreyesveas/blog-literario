import React, { useState, useContext, Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Router, { useRouter } from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout.component';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import { FirebaseContext } from '../firebase';

import Error404 from '../components/404/404.component';
import useValidation from '../hooks/useValidation';
import createPostValidation from '../validation/createPostValidation';

// validaciones

const STATE_INICIAL = {
  title: '',
  subtitle: '',
  imagen: '',
  description: '',
  content: '',
  urlimagen: ''
}
 

const newPost = () => {

  // State de las imágenes
  const [ nombreimagen, setImageName ] = useState('');
  const [ subiendo, setUploading ] = useState(false);
  const [ progreso, setProgress ] = useState(0);
  const [ urlimagen, setImageUrl ] = useState('');

  const [ error, guardarError ] = useState(false);

  const { values, errors, handleSubmit, handleChange } = useValidation(STATE_INICIAL, createPostValidation, newPost);
  const { title, subtitle, description, content, imagen } = values;

  // Hook de routing para redireccionar
  const router = useRouter();

  // Context con las operaciones CRUD de firebase
  const { user, firebase } = useContext(FirebaseContext);

  async function newPost() {console.log('asfd')

    if(!user){
      return router.push('/login');
    }

    const post = {
      title,
      subtitle,
      description,
      urlimagen,
      content,
      votes: 0,
      comments: [],
      created_at: Date.now(),
      author: {
        id: user.uid,
        nombre: user.displayName
      },
      hasVoted: []
    }
console.log(post)
    firebase.db.collection('posts').add(post);

    return router.push('/posts');
  }

  const handleUploadStart = () => {
      setProgress(0);
      setUploading(true);
  }

  const handleProgress = progress => setProgress({ progress });

  const handleUploadError = error => {
      setUploading(error);
      console.error(error);
  };

  const handleUploadSuccess = name => {
      setProgress(100);
      setUploading(false);
      setImageName(name)
      firebase
          .storage
          .ref("posts")
          .child(name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setImageUrl(url);
          } );
  };


  console.log(user)
  return (
    <div>
      <Layout>

        { !user && false ? <Error404 msg="Contenido restringido" /> : (
          <Fragment>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >Nuevo Post</h1>
            <Formulario
              onSubmit={handleSubmit}
              noValidate
            >
              <fieldset>
                <legend>Información General</legend>

        
                  <Campo>
                      <label htmlFor="title">title</label>
                      <input 
                          type="text"
                          id="title"
                          placeholder="title producto"
                          name="title"
                          value={title}
                          onChange={handleChange}
                          //onBlur={handleBlur}
                      />
                  </Campo>
                  
                  { errors.title && <Error>{ errors.title }</Error>}

                  <Campo>
                      <label htmlFor="subtitle">subtitle</label>
                      <input 
                          type="text"
                          id="subtitle"
                          placeholder="nombre subtitle o compañía"
                          name="subtitle"
                          value={subtitle}
                          onChange={handleChange}
                          //onBlur={handleBlur}
                      />
                  </Campo>
                  
                  { errors.subtitle && <Error>{ errors.subtitle }</Error>}
                  

                  <Campo>
                      <label htmlFor="image">Image</label>
                      <FileUploader 
                          accept="image/*"
                          id="image"
                          name="image"
                          randomizeFilename
                          storageRef={firebase.storage.ref("posts")}
                          onUploadStart={handleUploadStart}
                          onUploadError={handleUploadError}
                          onUploadSuccess={handleUploadSuccess}
                          onProgress={handleProgress}
                      />
                  </Campo>


                </fieldset>

                <fieldset>
                  <legend>Sobre tu Producto</legend>

                  <Campo>
                      <label htmlFor="description">Description</label>
                      <textarea 
                          id="description"
                          name="description"
                          value={description}
                          onChange={handleChange}
                      ></textarea>
                  </Campo>
                  
                  { errors.description && <Error>{ errors.description }</Error>}
                  
                  
                  <Campo>
                      <label htmlFor="content">Content</label>
                      <textarea 
                          id="content"
                          name="content"
                          value={content}
                          onChange={handleChange}
                      ></textarea>
                  </Campo>
                  
                  { errors.content && <Error>{ errors.content }</Error>}

                </fieldset>
    
                
                { error && <Error>{ error }</Error>}
    
                <InputSubmit 
                  type="submit"
                  value="Crear Post"
                />
            </Formulario>
          </Fragment>
        ) }

        
      </Layout>
    </div>
  )
}

export default newPost;