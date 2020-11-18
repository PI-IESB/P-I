'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pedido extends Model {
  static getCamposCadastro(){
    return['nome', 'valor_total', 'data']
  }
}

module.exports = Pedido
