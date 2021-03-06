'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Caixa extends Model {
  static getCamposCadastro(){
    return['data', 'valor_total', 'taxa_entrega']
  }
}

module.exports = Caixa
