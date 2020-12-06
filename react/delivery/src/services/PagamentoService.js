class pagamentoService {
    getAll() {
      let pagamento =  JSON.parse(localStorage.getItem('pagamento'))
      return  pagamento ? pagamento : []
    }
    get(id) {
       console.log(id)
    }
    create(data) {
      let pagamento = this.getAll()
      pagamento.push(data)
      localStorage.setItem('pagamento', JSON.stringify(pagamento))
    }
  
    update(data) {
      console.log(data)
    }
    delete(id) {
      let pagamento = this.getAll()
      pagamento.splice(id, 1)
      localStorage.setItem('pagamento', JSON.stringify(pagamento))
    }

    
}
export default new pagamentoService()