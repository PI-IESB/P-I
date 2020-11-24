import axios from 'axios'

const apiFooddfome = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'content-type':'application/json;charset=utf-8',
  }
})

export default apiFooddfome