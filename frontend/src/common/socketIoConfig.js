import VueSocketIO from 'vue-socket.io'

let SocketIOConfig = new VueSocketIO({
    debug: false,
    // SocketIO 服务器端地址，这里直接使用/代表使用当前地址
    connection: 'http://192.168.153.132:8000/csdn',
    vuex: {},
    options: {
        autoConnect: false,
    }
})

export default SocketIOConfig