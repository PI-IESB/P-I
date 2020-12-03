class cadastroService {
    getAll() {
      let cadastro =  JSON.parse(localStorage.getItem('cadastro'))
      return  cadastro ? cadastro : []
    }
    get(id) {
       console.log(id)
    }
    create(data) {
      let cadastro = this.getAll()
      cadastro.push(data)
      localStorage.setItem('cadastro', JSON.stringify(cadastro))
    }
  
    update(data) {
      console.log(data)
    }
    delete(id) {
      let cadastro = this.getAll()
      cadastro.splice(id, 1)
      localStorage.setItem('cadastro', JSON.stringify(cadastro))
    }

    
}
export default new cadastroService()