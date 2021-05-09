<template>
    <div>
        <nav-bar class="account-admin-nav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left" style="font-size: 24px"></i></div>
            <div slot="center">账号与安全</div>
        </nav-bar>
        <scroll class="content">
            <settings-item>
                <div slot="left">修改手机号</div>
                <div slot="right"><span>199****1761</span><i class="el-icon-arrow-right" ></i></div>
            </settings-item>
            <settings-item>
                <div slot="left">修改密码</div>
                <div slot="right"><i class="el-icon-arrow-right" ></i></div>
            </settings-item>
            <settings-item>
                <div slot="left">邮箱</div>
                <div slot="right"><span>未绑定</span><i class="el-icon-arrow-right" ></i></div>
            </settings-item>
            <settings-item>
                <div slot="left">微信</div>
                <div slot="right"><span>未绑定</span><i class="el-icon-arrow-right" ></i></div>
            </settings-item>
            <settings-item>
                <div slot="left">qq号</div>
                <div slot="right"><span>未绑定</span><i class="el-icon-arrow-right" ></i></div>
            </settings-item>
            <settings-item>
                <div slot="left">删除账号</div>
                <div slot="right"><i class="el-icon-arrow-right" ></i></div>
            </settings-item>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Settings from "../Settings";
    import SettingsItem from "../SettingsItem";
    import Scroll from "components/common/scroll/Scroll";
    export default {
        name: "AccountAdmin",
        components:{
            NavBar,
            Settings,
            SettingsItem,Scroll
        },
        methods:{
            back(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .account-admin-nav{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;
    }
    .content{
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        height: calc(100% - 44px);
    }
</style>