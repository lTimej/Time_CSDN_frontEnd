<template>
    <tab-bar>
        <tab-bar-item path="/home" ActiveColor="deeppink">
          <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/home_active.svg" alt="">
          <div slot="title">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/study" ActiveColor="deeppink">
          <img slot="icon" src="~assets/img/tabbar/ask.png" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/ask.png" alt="">
          <div slot="title">学习</div>
        </tab-bar-item>
        <tab-bar-item path="/blog" ActiveColor="deeppink">
          <img slot="icon" src="~assets/img/tabbar/bbs.png" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/bbs.png" alt="">
          <div slot="title">博客</div>
        </tab-bar-item>
        <tab-bar-item path="/message" ActiveColor="deeppink">
          <img slot="icon" src="~assets/img/tabbar/ask.png" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/ask.png" alt="">
          <div slot="title">消息</div>
        </tab-bar-item>
        <tab-bar-item path="/unloginprofile" ActiveColor="deeppink">
          <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
          <img slot="active_icon" src="~assets/img/tabbar/profile_active.svg" alt="">
          <div slot="title">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBarItem from "components/common/tabbar/TabBarItem";


    export default {
        name: "MainTarbar",
        data(){
            return{

            }
        },
        components:{
            TabBar,
            TabBarItem,
        },
        // computed:{
        //     dynamic_path(){
        //         let token =window.localStorage.getItem('token')
        //         console.log(444444444444,token)
        //         if(token === null){
        //             return '/unloginprofile'
        //         }else{
        //             return '/profile'
        //         }
        //     }
        // }

    }
</script>

<style scoped>

</style>