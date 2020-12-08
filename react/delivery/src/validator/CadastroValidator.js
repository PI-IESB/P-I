import mensagens from "./mensagens"

export default {
    nome: {
        required: mensagens.required,
        minLength: {value: 2, message:  mensagens.minLength + '(Mínimo de 2 caracteres.)'},
        maxLength: {value: 50, message:  mensagens.maxLength + '(Máximo de 50 caracteres.)'},
    },
    endereco: {
        required: mensagens.required,
        minLength: {value: 10, message:  mensagens.minLength + '(Mínimo de 10 caracteres.)'},
        maxLength: {value: 100, message:  mensagens.maxLength + '(Máximo de 100 caracteres.)'},
    },
    telefone: {
        required: mensagens.required,
        minLength: {value: 14, message:  mensagens.minLength + '(Mínimo de 17 caracteres.)'},
        maxLength: {value: 17, message:  mensagens.maxLength + '(Máximo de 14 caracteres.)'},
    },
    email: {
        required: mensagens.required,
        minLength: {value: 5, message:  mensagens.minLength + '(Mínimo de 5 caracteres.)'},
        maxLength: {value: 50, message:  mensagens.maxLength + '(Máximo de 50 caracteres.)'},
    },
    sexo: {
        required: mensagens.required,
        // minLength: {value: 1, message:  mensagens.minLength + '(Mínimo de 1 caracteres.)'},
        maxLength: {value: 1, message:  mensagens.maxLength + '(Máximo de 1 caracteres.)'},
    },
    data_nascimento: {
        required: mensagens.required,
        minLength: {value: 8, message:  mensagens.minLength + '(Mínimo de 8 caracteres.)'},
        maxLength: {value: 10, message:  mensagens.maxLength + '(Máximo de 10 caracteres.)'},
    },
    cpf: {
        required: mensagens.required,
        // minLength: {value: 13, message:  mensagens.minLength + '(Mínimo de 13 caracteres.)'},
        maxLength: {value: 14, message:  mensagens.maxLength + '(Máximo de 50 caracteres.)'},
    },
    cep: {
        required: mensagens.required,
        minLength: {value: 8, message:  mensagens.minLength + '(Mínimo de 8 caracteres.)'},
        maxLength: {value: 10, message:  mensagens.maxLength + '(Máximo de 10 caracteres.)'},
    },
    senha: {
        required: mensagens.required,
        minLength: {value: 6, message:  mensagens.minLength + '(Mínimo de 6 caracteres.)'},
        maxLength: {value: 10, message:  mensagens.maxLength + '(Máximo de 10 caracteres.)'},
    },
}    
