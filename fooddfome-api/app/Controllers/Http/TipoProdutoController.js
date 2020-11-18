'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const TipoProduto = use('App/Models/TipoProduto')

/**
 * Resourceful controller for interacting with tipoprodutos
 */
class TipoProdutoController {
  /**
   * Show a list of all tipoprodutos.
   * GET tipoprodutos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return TipoProduto.all()
  }

  /**
   * Render a form to be used for creating a new tipoproduto.
   * GET tipoprodutos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new tipoproduto.
   * POST tipoprodutos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = TipoProduto.getCamposCadastro();
    const dados = request.only(camposCadastro);
    return await TipoProduto.create(dados);
  }

  /**
   * Display a single tipoproduto.
   * GET tipoprodutos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing tipoproduto.
   * GET tipoprodutos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update tipoproduto details.
   * PUT or PATCH tipoprodutos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = TipoProduto.getCamposCadastro()
    return request.only(camposCadastro)
  }

  /**
   * Delete a tipoproduto with id.
   * DELETE tipoprodutos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TipoProdutoController
