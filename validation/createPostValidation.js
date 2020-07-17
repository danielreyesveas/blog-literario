export default function createPostValidation(values) {

    let errores = {};

    // Validar el nombre
    if(!values.title) {
        errores.title = "El title es obligatorio";
    }

    // Validar el empresa
    if(!values.subtitle) {
        errores.subtitle = "Nombre de subtitle es obligatorio";
    }
    
    
    if(!values.content) {
        errores.content = "Nombre de content es obligatorio";
    }

    // Validar el descripcion
    if(!values.description) {
        errores.description = "Agrega una descripción de tu producto";
    }

    return errores;
}