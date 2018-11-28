export function  orderstatus(type){
    let arr = ['未支付','已支付','已完成']
    return arr[type]
}
export function getTime(times){
    return new Date(parseInt(time) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ").substr(0, 10); 
}