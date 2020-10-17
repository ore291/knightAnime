import axios from 'axios'

export default axios.create({
    baseURL: 'https://kitsu.io/api/edge',
    timeout: 5000,
    headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
    },
  })