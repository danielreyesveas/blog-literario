import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario'
import Router from 'next/router'

import useValidation from '../hooks/useValidation'
import createAccountValidation from '../validation/createAccountValidation'

import firebase from '../firebase'

const CreateAccount = () => {

    const [ error, setError ] = useState(false)

    const INITIAL_STATE = {
        name: '',
        email: '',
        password: ''
    }

    const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(INITIAL_STATE, createAccountValidation, createAccount)

    const { name, email, password } = values

    async function createAccount() {
        try {
            await firebase.register(name, email, password)   
            Router.push('/')     
        } catch(error) {
            console.error('Hubo un error al crear el usuario', error.message)
            setError(error.message)
        }
    }

    return (
        <Layout>
            <h1>Create Account</h1>

            <Formulario
                onSubmit={handleSubmit}
                noValidate
            >
                <Campo>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </Campo>

                { errors.name && <Error>{ errors.name }</Error>}

                <Campo>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </Campo>

                { errors.email && <Error>{ errors.email }</Error>}

                <Campo>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Your password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </Campo>

                { errors.password && <Error>{ errors.password }</Error>}

                { error && <Error>{ error }</Error>}
                            
                <InputSubmit
                    type="submit"
                    value="Create Account"
                />
            </Formulario>
        </Layout>
    );
}
 
export default CreateAccount;