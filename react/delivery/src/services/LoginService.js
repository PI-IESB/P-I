class loginService {
    getAll() {
      let login =  JSON.parse(localStorage.getItem('login'))
      return  login ? login : []
    }
    get(id) {
       console.log(id)
    }
    create(data) {
      let login = this.getAll()
      login.push(data)
      localStorage.setItem('login', JSON.stringify(login))
    }
  
    update(data) {
      console.log(data)
    }
    delete(id) {
      let login = this.getAll()
      login.splice(id, 1)
      localStorage.setItem('login', JSON.stringify(login))
    }

    
}
export default new loginService()