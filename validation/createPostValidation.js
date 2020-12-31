export default function createPostValidation(values) {

    let errores = {};

    // Validar el nombre
    if(!values.title) {
        errores.title = "El título es obligatorio";
    }

    // Validar el empresa
    if(!values.subtitle) {
        errores.subtitle = "El exergo es obligatorio";
    }
    
    
    if(!values.content) {
        errores.content = "El contenido es obligatorio";
    }

    // Validar el descripcion
    if(!values.description) {
        errores.description = "Agrega un fragmento para mostrar";
    }

    return errores;
}