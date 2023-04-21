import {requests} from "../requests";

//添加用户地址
export function addAddress(receiver,phone,province,city,district,place,email) {
    return requests({
        url:'/v1/user/address',
        method:'post',
        data:{
            receiver: receiver,
            mobile: phone,
            province_id: province,
            city_id: city,
            district_id: district,
            place: place,
            email: email,
        }
    })
}

//获取用户地址
export function getAddress() {
    return requests({
        url:'/v1/user/address',
        method:'get'
    })
}

//修改用户地址
export function updateAddress(address,is_default) {
    return requests({
        url:'/v1/user/address',
        method:'patch',
        data:{
            address_id:address.address_id,
            receiver: address.receiver,
            mobile: address.mobile,
            province_id: address.province_id,
            city_id: address.city_id,
            district_id: address.district_id,
            place: address.place,
            email: address.email,
            is_default: is_default,
        }
    })
}