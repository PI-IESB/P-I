'use strict'

/*
|--------------------------------------------------------------------------
| TipoProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const TipoProduto = use('App/Models/TipoProduto')

class TipoProdutoSeeder {
  async run () {
    await TipoProduto.creareMany([
      {nome: 'Hamburguer'},
      {nome: 'Suco'},
      {nome: 'Creme'},
      {nome: 'Refrigerante'},
      {nome: 'Cerveja'},
      {nome: 'Combo'},
    ])
  }
}

module.exports = TipoProdutoSeeder
