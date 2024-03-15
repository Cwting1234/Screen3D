import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 15000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.resolve(error.response)
  }
)

export default options => {
  return new Promise((resolve, reject) => {
    service(options)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
