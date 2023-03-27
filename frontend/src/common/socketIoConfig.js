import VueSocketIO from 'vue-socket.io'

let SocketIOConfig = new VueSocketIO({
    debug: false,
    // SocketIO 服务器端地址，这里直接使用/代表使用当前地址
    connection: 'http://172.20.16.20:8000/csdn',
    vuex: {},
    options: {
        autoConnect: false,
    }
})

export default SocketIOConfig