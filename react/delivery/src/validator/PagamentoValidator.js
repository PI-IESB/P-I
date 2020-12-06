import mensagens from "./mensagens"

export default {
    nome: {
        required: mensagens.required,
        minLength: {value: 2, message:  mensagens.minLength + '(Mínimo de 2 caracteres.)'},
        maxLength: {value: 50, message:  mensagens.maxLength + '(Máximo de 50 caracteres.)'},
    },
    numeroCartao: {
        required: mensagens.required,
        minLength: {value: 19, message:  mensagens.minLength + '(Mínimo de 16 caracteres.)'},
    },
    validade: {
        required: mensagens.required,
        minLength: {value: 5, message:  mensagens.minLength + '(Mínimo de 5 caracteres.)'},

    },
    codigo: {
        required: mensagens.required,
        minLength: {value: 3, message:  mensagens.minLength + '(Mínimo de 3 caracteres.)'},

    },
}    
