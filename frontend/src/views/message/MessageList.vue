<template>
    <div class="msg-list">
        <div class="msg-item" @click="chat">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item" @click="chat">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
        <div class="msg-item">
            <div class="tx">
                <img src="~assets/img/my.jpg">
            </div>
            <div class="info">
                <div class="info-name">谢勇1号</div>
                <div class="info-introduce">我是帅哥</div>
            </div>
        </div>
    </div>
</template>

<script>
    import{getUserChatList} from "network/im/im";
    export default {
        name: "MessageList",
        methods:{
            chat(){
                this.$router.push('/chat');
            },
            get_chat_list(){
                getUserChatList().then(res=>{
                    if (res.status===201){
                        console.log("===========")
                        console.log(res.data.data)
                    }else{
                        console.log("获取聊天列表失败")
                    }
                })
            }
        },
        created(){
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
        text-align: center;
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
    .info .info-introduce{
        /* float: left; */
        font-size: 13px;
        color: #666666;
    }
</style>