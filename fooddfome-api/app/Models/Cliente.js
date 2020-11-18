'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
  static getCamposCadastro(){
    return['nome', 'endereco', 'telefone', 'email', 'sexo', 'data_nascimento', 'cpf', 'cep']
  }
}

module.exports = Cliente
