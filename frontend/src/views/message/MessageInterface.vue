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
            <div class="chat-item">
                <div class="chat-item-left">
                    <div>
                        <div class="tx">
                            <img src="~assets/img/my.jpg">
                        </div>
                        <div class="info">
                            <span>skfskdfkjsfksdfjskfksfjfdsadfsfsfsfsfsfsfgertwerfrsdfwefsjfskfjksfsdkjs</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-item">
                <div class="chat-item-right">
                    <div>
                        <div class="tx">
                            <img src="~assets/img/my.jpg">
                        </div>
                        <div class="info">
                            <input>
                        </div>
                    </div>
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
        top: 88px;
        bottom: 49px;
        left: 0;
        right: 0;
        background-color: white;
    }
    .chat-item{
        position: relative;
        /* height: 60px; */
    }
    .chat-item-left{
        width: 215px;
        /* height: 60px; */
        /* background-color: red; */
        float: left;
    }
    .chat-item-right{
        width: 215px;
        /* height: 60px; */
        /* background-color: blue; */
        float: right;
    }
    .chat-item-left .tx{
        float: left;
    }
    .chat-item-left .info{
        position: relative;
        
    }
    .chat-item-left .tx img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .chat-item-left .info span{
        height: 100px;
        width: 160px;
    }

    .chat-item-right .tx{
        float: right;
    }
    .chat-item-right .info{
        float: left;
    }
    .chat-item-right .tx img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .chat-item-right .info input{
        width: 160px;
    }
</style>