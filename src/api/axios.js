import axios from 'axios'

// axios.defaults.baseURL = 'https://bird.ioliu.cn/v1?url=' // 本机3000端口

// 请求超时时长
axios.defaults.timeout = 10000

export default async (method, url, data, config) => {
  method = method.toLowerCase()
  // 根据method实现对应请求方式
  switch (method) {
    case 'get':
      return axios({ method: 'get', url, params: data })
    case 'post':
      return axios({ method: 'post', url, data })
    default:
      console.error('请检查请求方式!')
      return false
  }
}

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
