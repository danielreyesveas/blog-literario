export default function loginValidation(values) {

    let errors = {};

    if(!values.email) {
        errors.email = "El Email es Obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = "Email no válido"
    }

    if(!values.password) {
        errors.password = "El password es obligatorio";
    }

    return errors;
}