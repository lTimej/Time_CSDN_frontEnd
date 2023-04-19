import {requests} from "../requests";

//添加用户地址
export function addAddress(receiver,phone,province,city,district,place,email) {
    return requests({
        url:'/v1/user/focus',
        method:'post',
        data:{
            receiver: receiver,
            phone: phone,
            province: province,
            city: city,
            district: district,
            place: place,
            email: email,
        }
    })
}

