import request from '@/utils/request'

// 获取首页数据
export function indexData(){
    return request({
        url:'/users/index',
        method:'get'
    })
}
// 查询当前库存
export function GoodStock(query){
    return request({
        url:'/users/goodstock/'+query.id,
        method:'get'
    })
}