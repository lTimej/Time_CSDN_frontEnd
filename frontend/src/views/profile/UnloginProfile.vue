<template>
    <div class="profile">
        <nav-bar class="profile-nav">
            <img slot="left" src="~assets/img/tabbar/download.png">
            <img src="~assets/img/tabbar/icon-wap-toolbar-menu.png" slot="right">
        </nav-bar>
        <login-button />
        <collections />
        <more-serve />
    </div>
</template>

<script>
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
            MoreServe
        }
    }
</script>

<style scoped>
    .profile{
        top: 44px;
        bottom: 49px;
        height: 100vh;
        position: absolute;
        background-color: rgb(243, 243, 243);
    }
</style>