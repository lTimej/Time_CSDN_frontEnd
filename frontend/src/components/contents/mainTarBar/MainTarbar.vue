<template>
    <tab-bar>
        <tab-bar-item path="/home" ActiveColor="deeppink" @get_chat_count="get_chat_count">
          <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/home_active.svg" alt="">
          <div slot="title">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/study" ActiveColor="deeppink" @get_chat_count="get_chat_count">
          <img slot="icon" src="~assets/img/tabbar/ask.png" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/ask.png" alt="">
          <div slot="title">学习</div>
        </tab-bar-item>
        <tab-bar-item path="/blog" ActiveColor="deeppink" @get_chat_count="get_chat_count">
          <img slot="icon" src="~assets/img/tabbar/bbs.png" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/bbs.png" alt="">
          <div slot="title">博客</div>
        </tab-bar-item>
        <tab-bar-item path="/message" ActiveColor="deeppink" @get_chat_count="get_chat_count" :class="{'message':msg_count!=0}">
          <img slot="icon" src="~assets/img/tabbar/ask.png" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/ask.png" alt="">
          <div slot="title">消息</div>
          <div slot="records"><span>{{ msg_count }}</span></div>
        </tab-bar-item>
        <tab-bar-item :path="dynamic_path" ActiveColor="deeppink" @get_chat_count="get_chat_count">
          <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/profile_active.svg" alt="">
          <div slot="title">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBarItem from "components/common/tabbar/TabBarItem";
    import {getUserChatCount} from "network/im/im"

    export default {
        name: "MainTarbar",
        data(){
            return{
              msg_count:0,
            }
        },
        components:{
            TabBar,
            TabBarItem,
        },
        computed:{
            dynamic_path(){
                let token =window.localStorage.getItem('token')
                if(token){
                    return '/profile'
                }else{
                    return '/unloginprofile'
                }
            }
        },
        methods:{
          get_chat_count(){
            console.log("获取聊天未读取总数???????????????")
            getUserChatCount().then(res =>{
              console.log(res.data.data)
              this.msg_count = res.data.data.count;
            })

          }
        }

    }
</script>

<style scoped>
  
</style>