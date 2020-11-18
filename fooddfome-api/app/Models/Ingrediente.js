'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ingrediente extends Model {
  static getCamposCadastro(){
    return['descricao']
  }
}

module.exports = Ingrediente
