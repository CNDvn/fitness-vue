import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    config.headers.set('Authorization', localStorage.getItem('jwt-token'))
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

axios.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  },
)

export const baseUrl = 'https://fitfuel-be.cndvn.cloud'

export const fetchAPI = () => {
  return axios
}
