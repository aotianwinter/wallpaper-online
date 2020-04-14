import axios from 'axios'
// import { notification } from 'antd'

axios.defaults.baseURL = 'http://120.26.51.81:3000' // 本机3000端口
// axios.defaults.baseURL = 'http://192.168.0.77:3000' // 本机3000端口

export default async (method, url, data, config) => {
  method = method.toLowerCase()
  // 根据method实现对应请求方式
  switch (method) {
    case 'get':
      return axios({ method: 'get', url, params: data })
    case 'post':
      return axios({ method: 'post', url, data })
    default:
      // openNotification('error', 'Error', '请检查请求方式!')
      return false
  }
}

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // openNotification('error')
  return Promise.reject(error)
})
// 二、响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // openNotification('error')
  return Promise.reject(error)
})

// const openNotification = (type, msg, desc) => {
//   notification[type]({
//     message: msg || 'Error',
//     description: desc || '服务器连接失败！'
//   })
// }