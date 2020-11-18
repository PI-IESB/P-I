'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaixaSchema extends Schema {
  up () {
    this.create('caixas', (table) => {
      table.increments()
      table.date('data').notNullable()
      table.decimal('valor_total').notNullable()
      table.integer('taxa_entrega', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('caixas')
  }
}

module.exports = CaixaSchema
