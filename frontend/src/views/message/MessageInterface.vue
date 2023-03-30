<template>
    <div class="chat">
        <nav-bar class="chat-nav">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center">
                <src>{{this.$route.query.user_name }}</src>
            </div>
            <div slot="right"><i class="el-icon-place"></i></div>
        </nav-bar>
        <scroll 
            class="content"
            ref="scroll"
            
        >
        <div class="chat-item" @click="cancel_emoj">
            <div class="dialog-text-box" >
                <div class="text-item">
                    <template>
                        <div class="chat-name"><img src="~assets/img/my.jpg"></div><div class="chat-box">哈哈哈</div>
                    </template>
                </div>
                <div class="text-item text-item-right">
                    <template>
                        <div class="chat-box">哈哈哈</div> <div class="chat-name"><img src="~assets/img/my.jpg"></div>
                    </template>
                </div>
                <div class="text-item">
                    <template>
                        <div class="chat-name"><img src="~assets/img/my.jpg"></div><div class="chat-box">哈哈sfdsf洒夫人双方围绕发生发生颠覆性的地方个人头是粉色法国v大哥vBert给对方VCD v不到十个斯蒂芬闰土股份人脱高峰日台风而他个死人头骨台风个人台风台风德国人的哈</div>
                    </template>
                </div>
                <div class="text-item text-item-right">
                    <template>
                        <div class="chat-box">哈哈哈</div> <div class="chat-name"><img src="~assets/img/my.jpg"></div>
                    </template>
                </div>
            </div>
        </div>
        </scroll>
        <emoj v-show="isShow"></emoj>
        <tab-bar class="chat-tarbar">
            <svg class="icon">
                <use xlink:href="#icon-yuyin" />
            </svg>
            <div class="text">
                <input type="text" v-model="info">
            </div>
            <svg class="icon" @click="show_emoj">
                <use xlink:href="#icon-7biaoqing-1" />
            </svg>
            <svg class="icon" v-show="info==''">
                <use xlink:href="#icon-jiahao"></use>
            </svg>
            <svg class="icon" v-show="info!=''" @click="send_msg">
                <use xlink:href="#icon-fasong"></use>
            </svg>
        </tab-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabBar from "components/common/tabbar/TabBar";
    import Scroll from "components/common/scroll/Scroll";
    import Emoj from "views/message/Emoj"
    import{getUserChatRecord} from "network/im/im";
    export default {
        name: "MessageInterface",
        data(){
            return{
                isShow:false,
                info:"",
                user_name:this.$route.query.user_name 
            }
        },
        components:{
            NavBar,
            TabBar,
            Scroll,
            Emoj,
        },
        methods:{
            back(){
                this.$router.back();
            },
            show_emoj(){
                console.log("emoj")
                this.isShow = !this.isShow;
            },
            cancel_emoj(){
                this.isShow = false;
            },
            send_msg(){
                console.log(this.info)
                console.log("*********",this.$ws.ws)
                let data = {
                    "content":this.info,
                    "target_id":String(this.$route.query.user_id),
                    "type":1,
                }
                console.log(data)
                this.$ws.ws.send(JSON.stringify(data))
            },
            get_chat_records(){
                var target_user_id = this.$route.query.user_id;
                var page = 1;
                var page_num = 2;
                console.log(target_user_id,"**********")
                getUserChatRecord(target_user_id,page,page_num).then(res=>{
                    if (res.status===201){
                        console.log("===========")
                        console.log(res.data.data)
                    }else{
                        console.log("获取聊天记录失败")
                    }
                })
            }
        },
        created() {
            console.log("获取聊天记录")
            if(!this.$ws.ws){
                var connectInfo = 'ws://' + "172.20.16.20:8890" + '/v1/im/user/chat?token=' + "Bearer " + window.localStorage.getItem('token')
                this.$ws.ws = new WebSocket(connectInfo)
            }
            this.get_chat_records()

        },
        activated(){
            this.user_name = this.$route.query.user_name; 
        }
        
    }
</script>

<style scoped>
    .chat-nav{
        position: fix;
        left: 0;
        right: 0;
        top: 0;
        font-size: 20px;
        color: #000000;
        height: 28px;
    }
    .chat-tarbar{
        height: 50px;
        display: flex;
        flex-direction: row;
        width: 100%;
        padding-top: 10px;
        position: fixed;
        bottom: 0px;
        background-color: #FFFFFF
    }
    /* .chat-tarbar input{
        height: 20px;
        width: 280px;
        margin-top: 6px;
        border: 1 solid black;
    } */
    /* .chat-tarbar i{
        font-size: 24px;
        line-height: 36px;
        padding-left: 10px;
    } */
    .chat-item{
        height: 100%;
    }
    >>> .contents{
        height: 100%;
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 50px;
        left: 0;
        right: 0;
        background-color: #F2F2F2;
    }
 
    .dialog-text-box::-webkit-scrollbar {
        display: none;
    }
    .text-item {
        display: flex;
        /* align-items: center; */
        margin: 10px 0;
    }
    .chat-name {
        /* width: 42px;
        height: 42px; */
        display: flex;
        /* align-items: center; */
        justify-content: center;
        font-weight: bold;
        /* border-radius: 50%;
        background-color: #3C8AFF;
        color: #Ffffff; */
        margin: 0px 6px 6px 6px;
    }
    .chat-name img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
    .chat-box {
        margin-left: 12px;
        padding: 8px;
        max-width: calc(100% - 168px);
        background: #FFFFFF;
        position: relative;
        border-radius:4px;
    }
    .chat-box:before {
        content:"";
        position: absolute;
        right: 100%;
        width: 0;
        height: 0;
        border-top: 9px solid transparent;
        border-right: 8px solid #FFFFFF;
        border-bottom: 9px solid transparent;
        transform: translateY(-50%);
    }
        
    .text-item-right {
        justify-content: flex-end;
    }
    .text-item-right .chat-box {
        margin-left: 0;
        margin-right: 15px;
    }
    .text-item-right .chat-box:before {
        right: -8px;
        border-left: 8px solid #FFFFFF;
        border-right: none;
    }
    .chat-tarbar .text{
        display: flex;
        align-items: center;
        margin-right: auto;
        height: 45px;
        width: 100%;
        line-height: 50px;
    }
    .chat-tarbar .text input{
        line-height: 50px;
        width: 100%;
        height: 40px;
        margin-bottom: 15px;
        padding: 10px 15px;
        -webkit-user-select: text;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 3px;
        outline: none;
        background-color: #fff;
        -webkit-appearance: none;
        font-size: 14px;
        /* margin-bottom: 0; */
    }
    .icon{
        width: 60px;
        height: 40px;
        font-size: 32px;
        color: #333;
        padding: 5px;
    }
    
</style>