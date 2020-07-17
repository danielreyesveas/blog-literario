import React, { useState, useContext, Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled'

import Router, { useRouter } from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/layout/Layout.component';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';
import Boton from '../components/ui/Boton';

import { FirebaseContext } from '../firebase';

import useCategories from '../hooks/useCategories';

import Error404 from '../components/404/404.component';
import useValidation from '../hooks/useValidation';
import createPostValidation from '../validation/createPostValidation';
import { ca } from 'date-fns/locale';

// validaciones

const STATE_INICIAL = {
  category: '',
  title: '',
  subtitle: '',
  imagen: '',
  description: '',
  content: '',
  urlimagen: ''
}
 
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border:none;
  font-size: 1rem;
`;

const createPost = () => {

  const { categories } = useCategories('name');

  // State de las imágenes
  const [ imagename, setImageName ] = useState('');
  const [ imageurl, setImageUrl ] = useState('');
  const [ isuploading, setIsUploading ] = useState(false);
  const [ progress, setProgress ] = useState(0);

  const [ selectedCategory, setCategory ] = useState({})

  const [ error, setError ] = useState(false);

  const { values, errors, handleSubmit, handleChange } = useValidation(STATE_INICIAL, createPostValidation, createPost);
  const { title, subtitle, description, content, imagen, category } = values;

  // Hook de routing para redireccionar
  const router = useRouter();

  // Context con las operaciones CRUD de firebase
  const { user, firebase } = useContext(FirebaseContext);

  async function createPost() {

    if(!user){
      return router.push('/login');
    }

    const post = {
      title,
      subtitle,
      description,
      imageurl,
      content,
      category: selectedCategory,
      votes: 0,
      comments: [],
      created_at: Date.now(),
      author: {
        id: user.uid,
        nombre: user.displayName
      },
      hasVoted: []
    }

    firebase.db.collection('posts').add(post);

    return router.push('/')
  }

  const handleCategoryChange = id => {
    const selected = categories.find(category => category.id === id)
    setCategory(selected) 
  }

  const handleUploadStart = () => {
    setProgress(0)
    setIsUploading(true)
  }

  const handleProgress = progress => {
    setProgress(progress)
  };

  const handleUploadError = error => {
    setIsUploading(false)
    setError(error)
  };

  const handleUploadSuccess = name => {
    setProgress(100)
    setIsUploading(false)
    setImageName(name)
    firebase
        .storage
        .ref("posts")
        .child(name)
        .getDownloadURL()
        .then(url => {
          console.log(url);
          setImageUrl(url);
        });
  };

  const handleSelect = e => {
    handleChange(e)
    handleCategoryChange(e.target.value)
  }


  return (
    <div>
      <Layout>

        { !user && false ? <Error404 msg="Contenido restringido" /> : (
          <Fragment>
            <h1
              css={css`
                text-align: center;
                margin-top: 3rem;
              `}
            >Nuevo Post</h1>
            <Formulario
              onSubmit={handleSubmit}
              noValidate
            >
              <fieldset>

                  <Campo>
                    <label htmlFor="category">Categoría</label>
                    <Select
                      id="category"
                      name="category"
                      
                      onChange={handleSelect}
                      value={category}
                    >
                      <option value="">-- Seleccione --</option>
                      { categories.map(category => (
                        <option 
                          key={category.id}
                          value={category.id}
                        >{category.name}</option>
                      ))}
                    </Select>
                  </Campo>

                  <Campo>
                      <label htmlFor="title">Título</label>
                      <input 
                          type="text"
                          id="title"
                          placeholder="título"
                          name="title"
                          value={title}
                          onChange={handleChange}
                          //onBlur={handleBlur}
                      />
                  </Campo>
                  
                  { errors.title && <Error>{ errors.title }</Error>}

                  <Campo>
                      <label htmlFor="subtitle">Exergo</label>
                      <input 
                          type="text"
                          id="subtitle"
                          placeholder="exergo"
                          name="subtitle"
                          value={subtitle}
                          onChange={handleChange}
                          //onBlur={handleBlur}
                      />
                  </Campo>
                  
                  { errors.subtitle && <Error>{ errors.subtitle }</Error>}
                                    
                  <Campo>
                      <label htmlFor="description">Fragmento</label>
                      <textarea 
                          id="description"
                          name="description"
                          value={description}
                          onChange={handleChange}
                      ></textarea>
                  </Campo>
                  
                  { errors.description && <Error>{ errors.description }</Error>}
                  
                </fieldset>

                <fieldset>
                  
                  <Campo>
                      <label htmlFor="image">Imagen</label>
                      
                      {imageurl ?
                        (
                          <img 
                            css={css`
                              max-width: 150px;
                            `}
                            src={imageurl} 
                          />                          
                        ) : ( 
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
                        )
                      }
                  </Campo>
                  
                  
                  <Campo>
                      <label htmlFor="content">Contenido</label>
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
    
                {!isuploading && 
                  <InputSubmit 
                    type="submit"
                    value="Crear Post"
                  />
                }
            </Formulario>
          </Fragment>
        ) }

        
      </Layout>
    </div>
  )
}

export default createPost;