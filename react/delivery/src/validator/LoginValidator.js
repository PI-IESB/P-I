import mensagens from "./mensagens"

export default {
    usuario: {
        required: mensagens.required,
        minLength: {value: 2, message:  mensagens.minLength + '(Mínimo de 2 caracteres.)'},
        maxLength: {value: 50, message:  mensagens.maxLength + '(Máximo de 50 caracteres.)'},
    },
    senha: {
        required: mensagens.required,
        minLength: {value: 4, message:  mensagens.minLength + '(Mínimo de 4 caracteres.)'},
        maxLength: {value: 8, message:  mensagens.maxLength + '(Máximo de 8 caracteres.)'},
    },
}