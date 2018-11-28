import axios from 'axios'
import qs from 'qs'
import config from './config'

const service = axios.create(config)

//请求参数格式化 
service.interceptors.request.use(
  config =>{
    if (config.method === 'post') config.data = qs.stringify(config.data)
    return config
  }
)
//响应数据格式化
service.interceptors.response.use(
  res => {
    if(res.status === 200) return res.data
  }, error => {
    return Promise.reject(error)
  }
)

export default {
  // post function
  post (url, data) {
    return service({
      method:'post',
      url,
      data
    })
  },
  // get function
  get (url, data) {
    return service({
      method:'get',
      url,
      data
    })
  },
  // delete function
  delete (url, data) {
    return service({
      method:'delete',
      url,
      data
    })
  }
}