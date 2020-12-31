import React, { useState, useContext, useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled'
import { Editor } from "@tinymce/tinymce-react";

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

 
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border:none;
  font-size: 1rem;
`;

const editPost = () => {

  const { categories } = useCategories('name');

  // State de las imágenes
  const [ imagename, setImageName ] = useState('');
  const [ imageurl, setImageUrl ] = useState('');
  const [ isuploading, setIsUploading ] = useState(false);
  const [ progress, setProgress ] = useState(0);
  const [ querydb, setQueryDB] = useState(true)

  const [ post, setPost ] = useState({
    title: '',
		category: '',
		subtitle: '',
		imagen: '',
		description: '',
		content: '',
		imageurl: '',
		urlimagen: ''
	});
  const [ error, setError ] = useState(false);
  const [ errors, setErrors ] = useState([]);

  const [ selectedCategory, setSelectedCategory ] = useState({})
  const [ category, setCategory ] = useState('')

	const { title, subtitle, description, content, imagen } = post;

  // Hook de routing para redireccionar
  const router = useRouter();
  const { query: { id }} = router;

  // Context con las operaciones CRUD de firebase
  const { user, firebase } = useContext(FirebaseContext);

  const handleChange = e => {
    console.log(e.target.name)
    console.log(e.target.value)
    setPost({
        ...post,
        [e.target.name] : e.target.value
    })
  }

  const handleEditorChange = e => {
    console.log(e)
    setPost({
        ...post,
        [e.target.id] : e.target.getContent()
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    editPost();
  }

  useEffect(() => {
	  if(id && querydb){
		  const getPost = async () => {
			  const query = await firebase.db.collection('posts').doc(id);
        const postQuery = await query.get().then(function (querySnapshot) {
          console.log(querySnapshot)
          if(querySnapshot.exists){
            const originalPost = querySnapshot.data()
            setPost(originalPost);
            console.log(originalPost.imageurl)
            setImageUrl(originalPost.imageurl)
            setCategory(originalPost.category.id)
          }else{
            setError(true);
          }
          setQueryDB(false)
        });
		  }
		  getPost();
	  }
  }, [id]);

  async function editPost() {

    if(!user){
      return router.push('/login');
    }
console.log(selectedCategory)
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

    var doc = await firebase.db.collection("posts").doc(id)

    // Set the "capital" field of the city 'DC'
    return await doc.update({
      title,
      subtitle,
      description,
      content,
      category: selectedCategory
    })
    .then(function() {
      return router.push('/')
    })
    .catch(function(error) {
      setError(error)
      console.error("Error updating document: ", error);
    });
  }

  const handleCategoryChange = id => {
    const selected = categories.find(category => category.id === id)
    setCategory(id)
    console.log(selected)
    setSelectedCategory(selected) 
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
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 3rem;
              `}
            >Editar Post</h1>
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
                      <label htmlFor="title">Título:</label>
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
                      <label htmlFor="subtitle">Exergo:</label>
                      <Editor
                        id="subtitle"
                        name="subtitle"
                        initialValue="<p>Tu post...</p>"
                        apiKey="efucd0nn9moqu7owqg8rboil0p77oi9tbg16yz2noiuhaeiy"
                        init={{
                          height: 150,
                          menubar: false,
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste imagetools wordcount"
                          ],
                          toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                          branding: false
                            
                        }}
                        onChange={handleEditorChange}
                        value={subtitle}
                      />
                  </Campo>
                  
                  { errors.subtitle && <Error>{ errors.subtitle }</Error>}
                                    
                  <Campo>
                      <label htmlFor="description">Fragmento:</label>
                      <Editor
                        id="description"
                        name="description"
                        initialValue="<p>Tu post...</p>"
                        apiKey="efucd0nn9moqu7owqg8rboil0p77oi9tbg16yz2noiuhaeiy"
                        init={{
                          height: 200,
                          menubar: false,
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste imagetools wordcount"
                          ],
                          toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                          branding: false,
                          content_style: "body {padding: 0}"
                        }}
                        onChange={handleEditorChange}
                        value={description}
                      />
                  </Campo>
                  
                  { errors.description && <Error>{ errors.description }</Error>}
                  
                </fieldset>

                <fieldset>
                  
                  <Campo>
                      <label htmlFor="image">Imagen:</label>
                      
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
                  
                  
                  <div>
                    <Editor
                      id="content"
                      name="content"
                      initialValue="<p>Tu post...</p>"
                      apiKey="efucd0nn9moqu7owqg8rboil0p77oi9tbg16yz2noiuhaeiy"
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          "advlist autolink lists link image charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste imagetools wordcount"
                        ],
                        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                        branding: false
                          
                      }}
                      onChange={handleEditorChange}
                      value={content}
                    />
                  </div>
                  
                  { errors.content && <Error>{ errors.content }</Error>}

                </fieldset>
    
                
                { error && <Error>{ error }</Error>}
    
                {!isuploading && 
                  <InputSubmit 
                    type="submit"
                    value="Editar Post"
                  />
                }
            </Formulario>
          </>
        ) }

        
      </Layout>
    </div>
  )
}

export default editPost;