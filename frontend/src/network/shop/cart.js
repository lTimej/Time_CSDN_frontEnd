import {requests} from "../requests";

export function addCart(sku_id,count) {
    return requests({
        url:'/v1/shop/add/cart',
        method:'post',
        data:{
            sku_id:sku_id,
            count:count,
        }
    })
}
export function getCart() {
    return requests({
        url:'/v1/shop/get/cart',
        method:'get'
    })
}