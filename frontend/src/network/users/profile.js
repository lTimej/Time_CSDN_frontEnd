import {requests} from "../requests";

//获取当前用户信息
export function userProfile() {
    return requests({
        url:'/v1/user/curr/user',
        method:'get'
    })
}
//修该当前用户文件信息
export  function updateUserImgProfile(file) {
    return requests({
        url:'/v1/user/curr/user',
        method:'patch',
        // headers:{
        //     'Content-Type':'multipart/form-data'
        // },
        data:file
    })
}
export  function updateUserProfile(data) {
    return requests({
        url:'/v1/user/curr/user',
        method:'patch',
        // headers:{
        //     'Content-Type':'multipart/form-data'
        // },
        data:data
    })
}