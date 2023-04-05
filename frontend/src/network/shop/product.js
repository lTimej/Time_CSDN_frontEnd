import {requests} from "../requests";


export function getProductCategory() {
    return requests({
        url:'/v1/shop/product/category',
        method:'get',
    })
}


export function getProductSpu(category_id) {
    return requests({
        url:'/v1/shop/product/spu',
        method:'get',
        params:{
            category_id:category_id,
        }
    })
}
