'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const FormaPagamento = use('App/Models/FormaPagamento')

/**
 * Resourceful controller for interacting with formapagamentos
 */
class FormaPagamentoController {
  /**
   * Show a list of all formapagamentos.
   * GET formapagamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return FormaPagamento.all()
  }

  /**
   * Render a form to be used for creating a new formapagamento.
   * GET formapagamentos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new formapagamento.
   * POST formapagamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = FormaPagamento.getCamposCadastro();
    const dados = request.only(camposCadastro);
    return await FormaPagamento.create(dados);
  }

  /**
   * Display a single formapagamento.
   * GET formapagamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing formapagamento.
   * GET formapagamentos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update formapagamento details.
   * PUT or PATCH formapagamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = FormaPagamento.getCamposCadastro()
    return request.only(camposCadastro)
  }

  /**
   * Delete a formapagamento with id.
   * DELETE formapagamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = FormaPagamentoController
