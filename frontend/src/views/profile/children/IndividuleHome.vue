<template>
    <div class="indi-center">
        <div class="indi-home" @click="myCenter">
            <div class="indi-info">
                <div class="tx">
                    <img src="~assets/img/tabbar/tx.jpg">
                </div>
                <div class="info">
                    <div class="info-name">lTimej</div>
                    <i class="el-icon-male" style="color: blue;font-size: 20px"></i>
                </div>
            </div>
            <div class="indi">
                <span>个人主页</span><i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div class="indi-home-item">
            <div class="a"><p>12</p><span>关注</span></div>
            <div class="a"><p>1</p><span>粉丝</span></div>
            <div class="a"><p>117</p><span>访问</span></div>
            <div class="a"><p>85+</p><span>排名</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndividuleHome",
        methods:{
            myCenter(){
                this.$router.push('/account/tx');
            }
        }
    }
</script>

<style scoped>
    .indi-center{
        /*width: 92%;*/
        /*margin-left: auto;*/
    }
    .indi-home{
        height: 79px;
        vertical-align: middle;
    }
    .indi-info{
        float: left;
        margin-top: 13px;
        margin-left: 20px;
    }
    .tx , .info{
        float: left;
        text-align: center;
        margin-right: 10px;
    }
    .tx img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .info .info-name{
        font-size: 15px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    .indi{
        float: right;
        margin-top: 23px;
        margin-right: 20px;
        color: #b4b4b4;
        font-size: 18px;
    }
    .indi-home-item{
        width: 95%;
        display: flex;
        text-align: center;
        margin: auto;
    }
    .indi-home-item .a{
        flex: 1;
    }
    .indi-home-item .a p{
        margin: 5px 0;
    }
</style>