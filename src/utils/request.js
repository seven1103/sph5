import axios from 'axios'
import { AlertModule } from 'vux'

let Tokens = {
    'X-Auth-Session-Id': '',
    'X-Auth-Sign': '',
    'safe_seed': ''
}

const service = axios.create({
    baseURL: '/local',
    timeout: 5000 // request timeout
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error) // for debug
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        AlertModule.show({
            title: '返回错误',
            content: error.message,
            onShow () {
              //console.log('Module: I\'m showing')
            },
            onHide () {
              //console.log('Module: I\'m hiding now')
            }
        })
        return Promise.reject(error)
    }
)

export default service
