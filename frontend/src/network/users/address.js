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