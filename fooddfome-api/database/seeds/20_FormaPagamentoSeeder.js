'use strict'

/*
|--------------------------------------------------------------------------
| FormaPagamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const FormaPagamento = use('App/Models/FormaPagamento')

class FormaPagamentoSeeder {
  async run () {

    await FormaPagamento.creareMany([
      {nome: 'Cartão de Débito'},
      {nome: 'Cartão de Crédito'},
      {nome: 'Dinheiro'},
      {nome: 'Ticket Refeição'},
      {nome: 'PicPay'},
      
    ])
  }
}

module.exports = FormaPagamentoSeeder
