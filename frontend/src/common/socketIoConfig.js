import VueSocketIO from 'vue-socket.io'

let SocketIOConfig = new VueSocketIO({
    debug: false,
    // SocketIO 服务器端地址，这里直接使用/代表使用当前地址
    connection: 'http://172.20.16.20:8890?userId=1391913700415242240'  + "&token=" + window.localStorage.getItem('token'),
    vuex: {},
    options: {
        autoConnect: false,
        path:"/v1/im/user/chat",
        transports: ['polling'],
        extraHeaders:{
            "Upgrade": "websocket",
            "Connection":"Upgrade",
            // "":"",
        },
    }
})

export default SocketIOConfig