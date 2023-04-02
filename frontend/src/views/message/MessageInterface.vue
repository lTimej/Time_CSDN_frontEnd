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
            @scroll="myscroll"
            ref="scroll" 
        >
        <div class="chat-item" @click="cancel_emoj" >
            <div class="dialog-text-box"  ref="container">
                <div class="text-item" :class="{'text-item-right':target_id==record.target_id}" v-for="record in chat_records">
                    <template v-if="target_id==record.target_id">
                        <div v-if="record.media==1" class="chat-box">{{record.content}}</div>
                        <div v-if="record.media==4" class="chat-box"><img :src="record.url"></div> 
                        <div v-if="record.media==5" class="chat-box"><img :src="record.url" class="picture"></div> 
                        <div class="chat-name"><img src="~assets/img/my.jpg"></div>
                    </template>
                    <template v-else>
                        <div class="chat-name"><img src="~assets/img/xy.jpg"></div>
                        <div v-if="record.media==1" class="chat-box">{{record.content}}</div>
                        <div v-if="record.media==4" class="chat-box"><img :src="record.url"></div>
                        <div v-if="record.media==5" class="chat-box"><img :src="record.url" class="picture"></div>
                    </template>
                </div>
            </div>
        </div>
        </scroll>
        <emoj v-show="isShow" :image_list="image_list" @send_emoj="send_emoj" />
        <more v-show="showMore" @send_photo="send_photo" />
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
            <svg class="icon" v-show="info==''" @click="toMore">
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
    import More from "views/message/More"
    import{getUserChatRecord} from "network/im/im";
    import {mapGetters} from "vuex";
    export default {
        name: "MessageInterface",
        data(){
            return{
                isShow:false,
                showMore:false,
                info:"",
                user_name:this.$route.query.user_name ,
                target_id:this.$route.query.user_id ,
                chat_records:[],
                image_list:[],
            }
        },
        components:{
            NavBar,
            TabBar,
            Scroll,
            Emoj,
            More,
        },
        mounted(){
            let imgList = []
            const files = require.context("@/assets/doutu/emoj",true,/\.*\.jpg|jpeg|png|gif$/).keys();
            files.forEach((e)=> {
                imgList.push(require("../../assets/doutu/emoj" + e.slice(1)));
            });
            this.image_list = imgList;
            console.log(this.image_list,"**9999999990000000**")
            // this.$nextTick(() => {
			//     console.log("首次进入")
            //     var Lis = document.querySelectorAll(".text-item dev");
            //     console.log(Lis,"***************",Lis.length)
            //     var l = document.querySelectorAll(".text-item")[0];
            //     console.log(l,"####################")
			//     // this.$refs.scroll.scrollToElement( Lis[Lis.length - 1], 300 );  // 滑动到指定元素,设置动画300ms
		    // });
        },
        computed:{
            ...mapGetters({
                individuleInfo:'get_user_info'
            })
        },
        methods:{
            back(){
                this.$router.back();
            },
            show_emoj(){
                console.log("emoj")
                this.isShow = !this.isShow;
            },
            toMore(){
                console.log(this.showMore,"查看更多")
                this.showMore = !this.showMore;
            },
            cancel_emoj(){
                this.isShow = false;
                this.showMore = false;
            },
            send_msg(){
                console.log(this.info)
                console.log("*********",this.$ws.ws)
                var t = Date.parse(new Date()) / 1000;
                let data = {
                    "content":this.info,
                    "target_id":String(this.$route.query.user_id),
                    "type":1,
                    "user_id":this.individuleInfo.user_id,
                    "media":1,
                    "create_time":t,
                }
                console.log(data)
                this.chat_records.push(data)
                this.$ws.ws.send(JSON.stringify(data))
                this.info = ""
            },
            send_emoj(index){
                console.log(index,"有有有有有有有有有")
                var t = Date.parse(new Date()) / 1000;
                let data = {
                    "url":this.image_list[index],
                    "target_id":String(this.$route.query.user_id),
                    "type":1,
                    "user_id":this.individuleInfo.user_id,
                    "media":4,
                    "create_time":t,
                }
                console.log(data)
                this.chat_records.push(data)
                this.$ws.ws.send(JSON.stringify(data))
                this.isShow = false;
            },
            send_photo(picture){
                var t = Date.parse(new Date()) / 1000;
                let data = {
                    "url":"http://172.20.16.20:9000/" + picture,
                    "target_id":String(this.$route.query.user_id),
                    "type":1,
                    "user_id":this.individuleInfo.user_id,
                    "media":5,
                    "create_time":t,
                }
                console.log(data,"this is a picture!!!!!!!!!!!!")
                this.chat_records.push(data)
                this.$ws.ws.send(JSON.stringify(data))
            },
            get_chat_records(){
                var target_user_id = this.$route.query.user_id;
                var page = 0;
                var page_num = -1;
                console.log(target_user_id,"**********")
                getUserChatRecord(target_user_id,page,page_num).then(res=>{
                    if (res.status===201){
                        console.log("===========")
                        console.log(res.data.data)
                        if(!res.data.data.chat_records){
                            this.chat_records = []
                        }else{
                            this.chat_records = res.data.data.chat_records
                        }
                        console.log(this.chat_records,"哈哈哈哈哈哈哈")
                    }else{
                        console.log("获取聊天记录失败")
                    }
                })
            },
            wsOnopen() {
                console.log('connect success')
            },
            wsOnMessage(e) {
                console.log('收到一条新的消息',e.data,typeof(JSON.parse(e.data)),"====",typeof(this.chat_records[0]))
                
                this.chat_records.push(JSON.parse(e.data))
                // this.showData += '<span style="float:right">'+ e.data + ' : say server' + '</span><br />'
                // console.log(e.data)
                // console.log(this.showData)
            },
            wsOnClose(e) {
                console.log("======closed=========")
                this.$ws.ws.close()
            },
            // myscroll(pos){
            //     console.log(pos.y,"********************")
            // },
            // scrollToBottom(){
            //     this.$nextTick(()=>{
            //     let chat = document.getElementById("#chat")
            //     chat.scrollTop = chat.scrollHeight
            //     })
            // },
        },
        created() {
            console.log("获取聊天记录")
            if(!this.$ws.ws){
                var connectInfo = 'ws://' + "172.20.16.20:8890" + '/v1/im/user/chat?token=' + "Bearer " + window.localStorage.getItem('token')
                this.$ws.ws = new WebSocket(connectInfo)
            }
            this.$ws.ws.onopen = this.wsOnopen
            this.$ws.ws.onmessage = this.wsOnMessage
            this.$ws.ws.onclose = this.wsOnClose
            this.get_chat_records()
        },
        updated:function(){
            var Lis = document.querySelectorAll(".text-item");
            console.log(Lis,"***************",Lis.length)
            this.$refs.scroll.scrollToElement( Lis[Lis.length - 1], 300 );
        },
        // created: function(){ // 这里数据请求方法写在created和mounted中均可以。
        //     this.getAPs().then(()=>{
        //     let str_id = this.currentEqu.device_id;
        //     let currentEquEle = document.getElementById(str_id);
        //     document.getElementById('equList').scrollTop = currentEquEle.offsetTop - 130;
        //     });

        // },
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
    /* >>> .contents{
        height: 100%;
    } */
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
    .chat-box .picture{
        width: 60px;
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