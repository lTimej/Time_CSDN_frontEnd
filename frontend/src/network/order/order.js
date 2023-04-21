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