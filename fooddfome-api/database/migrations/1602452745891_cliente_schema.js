'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.string('endereco', 100).notNullable()
      table.string('telefone', 15).notNullable()
      table.string('email', 50).notNullable()
      table.string('sexo', 1).notNullable()
      table.date('data_nascimento').notNullable()
      table.string('cpf', 14).notNullable()
      table.string('cep', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
