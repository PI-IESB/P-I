'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.decimal('valor_total', 10).notNullable()
      table.date('data').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidoSchema
