'use strict'

/*
|--------------------------------------------------------------------------
| IngredienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Ingrediente = use('App/Models/Ingrediente')

class IngredienteSeeder {
  async run () {

    await Ingrediente.creareMany([
      {nome: 'Hamburguer de Carne'},
      {nome: 'Hamburguer de Frango'},
      {nome: 'Pão Brioche'},
      {nome: 'Queijo Mussarela'},
      {nome: 'Queijo Cheddar'},
      {nome: 'Presunto'},
      {nome: 'Batata Palha'},
      {nome: 'Bacon'},
      {nome: 'Calabresa'},
      {nome: 'Milho'},
      {nome: 'Alface'},
      {nome: 'Tomate'},
      {nome: 'Bacon'},
      {nome: 'Bacon'},
    ])

  }
}

module.exports = IngredienteSeeder
