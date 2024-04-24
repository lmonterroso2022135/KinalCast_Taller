export const validateDescription = (descripcion) => {
    return descripcion.length >= 10 && descripcion.length <=200
}

export const descriptionValidationMessage = 'La descripcion debe tener entre 10 y 200 caracteres'