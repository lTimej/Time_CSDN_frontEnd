<template>
    <div class="msg-list">
        <div class="msg-item" @click="tochat(index)" v-for="(chat,index) in chat_list">
            <div class="tx">
                <img src="http://172.20.16.20:9000/csdn/head-photo/tx.jpg">
                <div class="msg-count" v-show="chat.msg_count != 0"><span>{{ chat.msg_count }}</span></div>
            </div>
            <div class="info">
                <div class="info-name"><spn>{{ chat.user_name }}</spn></div>
                <div class="info-msg info-msg-text" v-if="chat.media == 1"><span>{{ chat.msg }}</span></div>
                <div class="info-msg" v-if="chat.media == 4"><img :src="chat.msg"></div>
                <div class="info-msg" v-if="chat.media == 5"><span>[图片]</span></div>
            </div>
            <div class="info-item">
                <div class="msg-time"><span>{{chat.create_time}}</span></div>
            </div>
        </div>
        <div class="msg-item" @click="tochat1">
            <div class="tx">
                <img src="http://172.20.16.20:9000/csdn/head-photo/tx.jpg">
                <div class="msg-count"><span>10</span></div>
            </div>
            <div class="info">
                <div class="info-name">谢勇</div>
                <div class="info-msg info-msg-text">haha</div>
            </div>
            <div class="info-item">
                <div class="msg-time"><span>2020-03-03</span></div>
            </div>
        </div>
        <div class="msg-item" @click="tochat1">
            <div class="tx">
                <img src="http://172.20.16.20:9000/csdn/head-photo/tx.jpg">
                <div class="msg-count"><span>10</span></div>
            </div>
            <div class="info">
                <div class="info-name">谢勇</div>
                <div class="info-msg info-msg-text">锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦！</div>
            </div>
            <div class="info-item">
                <div class="msg-time"><span>2020-03-03</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import{getUserChatList} from "network/im/im";
    export default {
        name: "MessageList",
        data(){
            return{
                chat_list:[],
            }
        },
        methods:{
            tochat1(){
                this.$router.push({
                    path:'/chat',
                    query:{
                        user_name:"谢勇",
                        user_id:1001,
                    }
                })
            },
            tochat(index){
                console.log(this.chat_list[index].user_name,"------------")
                this.$router.push({
                    path:'/chat',
                    query:{
                        user_name:this.chat_list[index].user_name,
                        user_id:this.chat_list[index].user_id,
                        msg_count:this.chat_list[index].msg_count,
                    }
                })
            },
            get_chat_list(){
                getUserChatList().then(res=>{
                    if (res.status===201){
                        console.log("===========")
                        console.log(res.data.data)
                        this.chat_list = res.data.data.user_infos;
                    }else{
                        console.log("获取聊天列表失败")
                    }
                })
            }
        },
        activated(){
            this.get_chat_list()
        }
        // components:{
        //     Scroll,
        // }
    }
</script>

<style scoped>
    .msg-list{
        margin-top: 20px;
    }
    .msg-item{
        margin-top: 10px;
        margin-left: 10px;
        height: 40px;
        
    }
    .tx , .info{
        float: left;
        /* text-align: center; */
        margin-right: 10px;

    }
    .tx img{
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .info .info-name{
        /* float: left; */
        font-size: 16px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    .info .info-msg{
        /* float: left; */
        font-size: 13px;
        color: #666666;
    }
    .info .info-msg-text{
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:1;
        -webkit-box-orient: vertical;
        width: 200px;
        overflow: hidden;
    }
    .info-item{
        float:right;
        text-align: center;
    margin-right: 10px;
    }
    .tx .msg-count{
        background-color: red;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position:relative;
        left: 30px;
    }
    .tx .msg-count span{
        font-size: 11px;
        display: block;
        position: relative;
        color: #fff;
        bottom: 42px;
        text-align: center;
    }
    .info-item .msg-time{
        font-size: 13px;
    }
</style>