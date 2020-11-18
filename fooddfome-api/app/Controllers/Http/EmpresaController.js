'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Empresa = use('App/Models/Empresa')

/**
 * Resourceful controller for interacting with empresas
 */
class EmpresaController {
  /**
   * Show a list of all empresas.
   * GET empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Empresa.all()
  }

  /**
   * Create/save a new empresa.
   * POST empresas
   *
   * @param {object} ctx
    * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = Empresa.getCamposCadastro();
    const dados = request.only(camposCadastro);
    return await Empresa.create(dados);
  }

  /**
   * Display a single empresa.
   * GET empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update empresa details.
   * PUT or PATCH empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = Empresa.getCamposCadastro()
    return request.only(camposCadastro)

  }

  /**
   * Delete a empresa with id.
   * DELETE empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = EmpresaController
