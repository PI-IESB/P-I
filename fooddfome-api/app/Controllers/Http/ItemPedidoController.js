'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ItemPedido = use('App/Models/ItemPedido')

/**
 * Resourceful controller for interacting with itempedidos
 */
class ItemPedidoController {
  /**
   * Show a list of all itempedidos.
   * GET itempedidos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return ItemPedido.all()
  }

  /**
   * Render a form to be used for creating a new itempedido.
   * GET itempedidos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new itempedido.
   * POST itempedidos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = ItemPedido.getCamposCadastro();
    const dados = request.only(camposCadastro);
    return await ItemPedido.create(dados);
  }

  /**
   * Display a single itempedido.
   * GET itempedidos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing itempedido.
   * GET itempedidos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update itempedido details.
   * PUT or PATCH itempedidos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = ItemPedido.getCamposCadastro()
    const dados = request.only(camposCadastro)

    const itempedido = await ItemPedido.findOrFail(params.id)
    itempedido.merge(dados)
    itempedido.save()

    return itempedido
  }

  /**
   * Delete a itempedido with id.
   * DELETE itempedidos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const itempedido = await ItemPedido.findOrFail(params.id)

    itempedido.delete()
  }
}

module.exports = ItemPedidoController
