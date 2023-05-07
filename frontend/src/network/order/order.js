import {requests} from "../requests";

export function addOrder(total_count,total_price,address_id,sku) {
    return requests({
        url:'/v1/order/add',
        method:'post',
        data:{
            "address_id": address_id,
            "total_count": total_count,
            "total_price": total_price,
            "sku":sku,
        }
    })
}

export function getOrder(pay_status) {
    return requests({
        url:'/v1/order/get',
        method:'get',
        params:{
            "pay_status":pay_status,
        }
    })
}

export function getOrderAddress(address_id) {
    return requests({
        url:'/v1/user/order/address',
        method:'get',
        params:{
            "address_id": address_id,
        }
    })
}