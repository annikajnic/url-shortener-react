import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:2000/api', // will proxy if set up
  headers: {
    'Content-Type': 'application/json',
  },
})
