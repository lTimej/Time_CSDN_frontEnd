<template>
    <div class="msg">
        <nav-bar class="msg-nav">
            <div slot="left">
                <i class="el-icon-setting"></i>
            </div>
            <div slot="center">
                <src>消息</src>
            </div>
            <div slot="right"><i class="el-icon-place"></i></div>
        </nav-bar>
        <nav-bar class="msg-item-nav">
            <div class="item" slot="left">
                <i class="el-icon-chat-dot-square"></i>
                <src>评论和@</src>
            </div>
            <div class="item" slot="center" >
                <i class="el-icon-thumb"></i>
                <src>赞和收藏</src>
            </div>
            <div class="item" slot="right">
                <i class="el-icon-user"></i>
                <src>新增粉丝</src>
            </div>
        </nav-bar>
        <scroll 
            class="content"
            ref="scroll"
        >
            <message-list />
        </scroll>
        
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import MessageList from "views/message/MessageList"
    import Scroll from "components/common/scroll/Scroll";
    export default {
        name: "Message",
        data(){
            return{
                showData:"",
                // ws:null,
            }
        },
        components:{
            NavBar,
            MessageList,
            Scroll,
        },
        mounted(){
            this.defaultWs();
        },
        // sockets: {
        //     connect() {
        //         console.log(111111111111)

        //         // this.$lib.logInfo("连接socket io服务器成功");
        //     },
        //     message(msg) {
        //         console.log(msg)
        //         this.$lib.logInfo("接收到服务端的消息：" + msg);
        //     },
        //     // focus:data=>{
        //     //     console.log(data);
        //     // }
        // },
        methods:{
            defaultWs() {
                console.log('try to connect webSocket')
                if ("WebSocket" in window) {
                    console.log('support webSocket')
                    console.log(this.$ws,"=============")
                    var connectInfo = 'ws://' + "172.20.16.20:8890" + '/v1/im/user/chat?token=' + "Bearer " + window.localStorage.getItem('token')
                    this.$ws.ws = new WebSocket(connectInfo)
                    // this.$ws.ws.onopen = this.wsOnopen
                    // this.$ws.ws.onmessage = this.wsOnMessage
                    // this.$ws.ws.onclose = this.wsOnClose
                }
            },
            // wsOnopen() {
            //     console.log('connect success')
            // },
            // wsOnMessage(e) {
            //     console.log('receive data: ')
            //     this.showData += '<span style="float:right">'+ e.data + ' : say server' + '</span><br />'
            //     console.log(e.data)
            //     console.log(this.showData)
            // },
            // wsOnClose(e) {
            //     console.log("======closed=========")
            //     this.$ws.ws.close()
            // },
        },
        activated() {
            // if (this.$socket != null && !this.$socket.connected) {
            //     this.$socket.connect();
            // }
        },
    }
</script>

<style scoped>
    .msg-nav{
        position: fix;
        left: 0;
        right: 0;
        top: 0;
        font-size: 20px;
        color: #000000;
        height: 28px;
    }
    .msg-item-nav{
        position: fix;
        left: 0;
        right: 0;
        top: 0;
        font-size: 28px;
        height: 60px;
        color: #000000;
    }
    .msg-item-nav .item{
        font-size: 18px;
        padding-bottom: 15px;
        height: 40px;
    }
    .msg-item-nav .item i{
        font-size: 18px;
    }
    .msg-item-nav .item src{
        font-size: 14px;
        display: block;
        line-height: 0px;
        
    }
    .msg{
        height: 100vh;
        position: relative;
        background-color: rgb(243, 243, 243);
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 100px;
        bottom: 49px;
        left: 0;
        right: 0;
        background-color: white;
    }
</style>