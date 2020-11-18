'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/empresas', 'EmpresaController').apiOnly()
Route.resource('/caixa', 'CaixaController').apiOnly()
Route.resource('/cliente', 'ClienteController').apiOnly()
Route.resource('/formapagamento', 'FormaPagamentoController').apiOnly()
Route.resource('/ingrediente', 'IngredienteController').apiOnly()
Route.resource('/itempedido', 'ItemPedidoController').apiOnly()
Route.resource('/pedido', 'PedidoController ').apiOnly()
Route.resource('/produto', 'ProdutoController').apiOnly()
Route.resource('/tipoproduto', 'TipoProdutoController').apiOnly()
