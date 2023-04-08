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

export function getSkuBySpuId(spu_id) {
    return requests({
        url:'/v1/shop/product/desc',
        method:'get',
        params:{
           spu_id:spu_id,
        }
    })
}

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