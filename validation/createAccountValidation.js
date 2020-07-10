export default function createAccountValidation(values) {

    let errors = {};

    if(!values.name) {
        errors.name = "El nombre es obligatorio";
    }

    if(!values.email) {
        errors.email = "El Email es Obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = "Email no válido"
    }

    if(!values.password) {
        errors.password = "El password es obligatorio";
    } else if( values.password.length < 6 ) {
        errors.password = 'El password debe ser de al menos 6 caracteres'
    }

    return errors;
}