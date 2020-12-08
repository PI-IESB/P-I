class perfilService {
    getAll() {
      let perfil =  JSON.parse(localStorage.getItem('perfil'))
      return  perfil ? perfil : []
    }
    get(id) {
      let perfil = this.getAll()
      return perfil[id] ? perfil[id] : {}
    }
    create(data) {
      let perfil = this.getAll()
      perfil.push(data)
      localStorage.setItem('perfil', JSON.stringify(perfil))
    }
  
    update(id, data) {
      let perfil = this.getAll()
      perfil.splice(id, 1, data)
      localStorage.setItem('perfil', JSON.stringify(perfil))
      console.log(data)
    }
    delete(id) {
      let perfil = this.getAll()
      perfil.splice(id, 1)
      localStorage.setItem('perfil', JSON.stringify(perfil))
    }

    
}
export default new perfilService()