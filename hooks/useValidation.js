import React, { useState, useEffect } from 'react';

const useValidation = (initialState, validate, fn) => {

    const [ values, setValues ] = useState(initialState);
    const [ errors, setErrors ] = useState({});
    const [ submitForm, setSubmitForm ] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrors = Object.keys(errors).length === 0;

            if(noErrors) {
                fn(); // Fn = Función que se ejecuta en el componente
            }
            setSubmitForm(false);
        }
    }, [errors]);

    // Función que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    
    const handleEditorChange = e => {
        console.log(e)
        setValues({
            ...values,
            [e.target.id] : e.target.getContent()
        })
    }

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitForm(true);
    }

    // Cuando se realiza el evento blur
    const handleBlur = () => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    return {
        values, 
        errors, 
        handleSubmit,
        handleChange,
        handleBlur,
        handleEditorChange
    }
}
 
export default useValidation;