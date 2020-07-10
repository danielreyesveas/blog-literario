export default function validarCrearProducto(valores) {

    let errores = {};

    // Validar el nombre
    if(!valores.title) {
        errores.title = "El title es obligatorio";
    }

    // Validar el empresa
    if(!valores.subtitle) {
        errores.subtitle = "Nombre de subtitle es obligatorio";
    }
    
    if(!valores.content) {
        errores.content = "Nombre de content es obligatorio";
    }

    // Validar el descripcion
    if(!valores.description) {
        errores.description = "Agrega una descripción de tu producto";
    }

    return errores;
}