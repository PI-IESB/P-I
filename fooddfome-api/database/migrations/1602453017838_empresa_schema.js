'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table.string('nome', 50).notNullable().unique()
      table.string('telefone', 15).notNullable()
      table.string('endereco', 100).notNullable()
      table.string('email', 50).notNullable()
      table.string('cnpj', 18).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
