'use strict'

/*
|--------------------------------------------------------------------------
| EmpresaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Empresa = use('App/Models/Empresa')

class EmpresaSeeder {
  async run () {
await Empresa.creareMany([
  {nome: 'Food´d Fome',
  telefone: '955552135',
  endereco: 'Ceilândia Norte - DF',
  email: 'fooddfome@gmail.com',
  cnpj: '21.906.709/0000-9',
   }
  
])

  }
}

module.exports = EmpresaSeeder
