<template>
    <div :class="{'veil':value}">
        <div class="settings">
            <nav-bar class="settings-nav">
                <div slot="left" @click="back"><i class="el-icon-arrow-left" style="font-size: 24px"></i></div>
                <div slot="center">设置</div>
            </nav-bar>
            <scroll class="content">
                <slot></slot>
            </scroll>
        </div>
<!--                <div class="veil" v-if="value">-->

<!--            </div>-->
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import MessageSetting from "./children/AccountAdmin";

    export default {
        name: "Settings",
        props:{
            value:{
                type:Boolean,
                default:false
            }
        },
        components:{
            NavBar,
            Scroll,
            MessageSetting
        },
        methods:{
            //返回上一页
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .settings{
        position: relative;
        /*z-index: 99;*/
        /*background-color: gray;*/
        height: 100vh;
    }
    .settings-nav{
        /*color: #fff;*/
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        /*z-index: 98;*/
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        /*bottom: 49px;*/
        height: calc(100% - 44px);
        left: 0;
        right: 0;
        background-color: #f6f6f6;
        /*z-index: 97;*/
    }
    .veil{
        /*position: absolute;*/
        width: 100%;
        height: 100%;
        /*background-color: red;*/
        opacity: .5;
        z-index: 100;
    }
</style>