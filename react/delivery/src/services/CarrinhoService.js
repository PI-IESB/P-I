class cardapio {
    getAll() {
      let carrinho =  JSON.parse(localStorage.getItem('carrinho'))
      return  carrinho ? carrinho : []
    }
    get(id) {
       console.log(id)
    }
    create(data) {
      let carrinho = this.getAll()
      carrinho.push(data)
      localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
  
    update(data) {
      console.log(data)
    }
    delete(id) {
      let carrinho = this.getAll()
      carrinho.splice(id, 1)
      localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }

    
}
export default new cardapio()