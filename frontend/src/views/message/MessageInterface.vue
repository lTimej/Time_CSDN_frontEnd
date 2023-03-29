<template>
    <div class="chat">
        <nav-bar class="chat-nav">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center">
                <src>谢勇1号</src>
            </div>
            <div slot="right"><i class="el-icon-place"></i></div>
        </nav-bar>
        <scroll 
            class="content"
            ref="scroll"
        >
        <div class="dialog-text-box">
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
        
        </scroll>
        <tab-bar class="chat-tarbar">
            <input type="text">
            <i class="el-icon-place"></i>
            <i class="el-icon-place"></i>
        </tab-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabBar from "components/common/tabbar/TabBar";
    import Scroll from "components/common/scroll/Scroll";
    export default {
        name: "Message",
        components:{
            NavBar,
            TabBar,
            Scroll
        },
        methods:{
            back(){
                this.$router.back()
            },
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
        height: 36px;
    }
    .chat-tarbar input{
        height: 20px;
        width: 280px;
        margin-top: 6px;
        border: 1 solid black;
    }
    .chat-tarbar i{
        font-size: 24px;
        line-height: 36px;
        padding-left: 10px;
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 36px;
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
        align-items: center;
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
</style>