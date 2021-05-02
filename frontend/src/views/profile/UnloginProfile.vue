<template>
    <div class="profile">
        <nav-bar class="profile-nav">
            <img slot="left" src="~assets/img/tabbar/download.png">
            <img src="~assets/img/tabbar/icon-wap-toolbar-menu.png" slot="right" @click="account_setting">
        </nav-bar>
        <scroll class="content"
        >
            <login-button />
            <collections />
            <more-serve />
            <div class="la"></div>

        </scroll>
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";

    import NavBar from "components/common/navbar/NavBar";
    import LoginButton from "components/contents/profile/LoginButton";
    import MoreServe from "./children/MoreServe";

    import Collections from "components/contents/profile/Collections";
    export default {
        name: "UnloginProfile",
        components:{
            NavBar,
            LoginButton,
            Collections,
            MoreServe,
            Scroll
        },
        methods:{
            account_setting(){
                this.$router.push('/account/setting').catch(()=>{})
            }
        }
    }
</script>

<style scoped>
    .profile-nav{
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
        background-color: rgb(243, 243, 243);
    }
    .profile{
        height: 100vh;
        background-color: rgb(243, 243, 243);
        position: relative;
    }
    .content{
       overflow: hidden;
       position: absolute;
       top: 44px;
       bottom: 49px;
       left: 0;
       right: 0;
    }
    .la{
        height: 100px;
    }
</style>