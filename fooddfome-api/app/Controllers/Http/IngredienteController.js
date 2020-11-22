'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Ingrediente = use('App/Models/Ingrediente')

/**
 * Resourceful controller for interacting with ingredientes
 */
class IngredienteController {
  /**
   * Show a list of all ingredientes.
   * GET ingredientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Ingrediente.all()
  }

  /**
   * Render a form to be used for creating a new ingrediente.
   * GET ingredientes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new ingrediente.
   * POST ingredientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposCadastro = Ingrediente.getCamposCadastro();
    const dados = request.only(camposCadastro);
    return await Ingrediente.create(dados);
  }

  /**
   * Display a single ingrediente.
   * GET ingredientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing ingrediente.
   * GET ingredientes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update ingrediente details.
   * PUT or PATCH ingredientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposCadastro = Ingrediente.getCamposCadastro()
    const dados = request.only(camposCadastro)

    const ingrediente = await Ingrediente.findOrFail(params.id)
    ingrediente.merge(dados)
    ingrediente.save()

    return ingrediente

  }

  /**
   * Delete a ingrediente with id.
   * DELETE ingredientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const ingrediente = await Ingrediente.findOrFail(params.id)

    ingrediente.delete()
  }
}

module.exports = IngredienteController
