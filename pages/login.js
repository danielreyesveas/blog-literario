import React, { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Router from 'next/router';
import Layout from '../components/layout/Layout.component';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import firebase from '../firebase';

// validaciones
import useValidation from '../hooks/useValidation';
import loginValidation from '../validation/loginValidation';

const INITIAL_STATE = {
  email: '',
  password: ''
}


const Login = () => {

  const [ error, setError ] = useState(false);

  const { values, errors, handleSubmit, handleChange } = useValidation(INITIAL_STATE, loginValidation, login);

  const { email, password } = values;

  async function login(){
    try {
      const user = await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario', error.message);
      setError(error.message);
    }
  }


  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Iniciar Sesión</h1>
          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >

              <Campo>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email"
                      id="email"
                      placeholder="Tu Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                  />
              </Campo>

              { errors.email && <Error>{ errors.email }</Error>}
  
              <Campo>
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      id="password"
                      placeholder="Tu Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                  />
              </Campo>

              { errors.password && <Error>{ errors.password }</Error>}
              
              { error && <Error>{ error }</Error>}
  
              <InputSubmit 
                type="submit"
                value="Iniciar Sesión"
              />
          </Formulario>
        </>
      </Layout>
    </div>
  )
}

export default Login;