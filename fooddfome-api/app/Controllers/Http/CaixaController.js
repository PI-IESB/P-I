'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Caixa = use('App/Models/Caixa')

/**
 * Resourceful controller for interacting with caixas
 */
class CaixaController {
  /**
   * Show a list of all caixas.
   * GET caixas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Caixa.all()
  }

  /**
   * Render a form to be used for creating a new caixa.
   * GET caixas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new caixa.
   * POST caixas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = Caixa.getCamposCadastro();
    const dados = request.only(camposCadastro);
    return await Caixa.create(dados);
  }

  /**
   * Display a single caixa.
   * GET caixas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing caixa.
   * GET caixas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update caixa details.
   * PUT or PATCH caixas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = Caixa.getCamposCadastro();
    return request.only(camposCadastro)
  }

  /**
   * Delete a caixa with id.
   * DELETE caixas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CaixaController
