<template>
    <div class="all-search">
        <nav-bar class="search-nav">
            <div slot="left" @click="toSearch">
                <el-input
                    placeholder="推荐内容"
                    prefix-icon="el-icon-search"
                    v-model="search">
                </el-input>
                <i class="el-icon-error cancel-content" v-show="search!==''" @click="toCancelContent"></i>
            </div>
            <div slot="right" @click="cancelSearch"><span style="color: #333;font-size: 20px;margin-left: 1px">取消</span></div>
        </nav-bar>
        <scroll
                class="content"
                :pull-upload="true"
                :pull-down-refresh="true"
                @pullingUp="loadMore"
                @pullingDown="pullingMore"
                ref="scrollTo"
        >
            <div class="search-history" @click="canc">
                <div class="search-history-title">
                    <span class="title">历史搜索</span>
                    <div class="cl">
                        <span>清空全部历史</span>
                        <i class="el-icon-delete"></i>
                    </div>
                </div>
                <div class="search-content">
                    <span class="search-content-item">
                        <span>mysql</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教fgsdfsfsdfsfsd程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教fgsdfsfsdfsfsd程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教fgsdfsfsdfsfsd程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql</span>
                    </span>
                    <span class="search-content-item">
                        <span>mysql安装教fgsdfsfsdfsfsd程</span>
                    </span>
                    <span class="search-content-item">
                        <span>docker</span>
                    </span>
                </div>
            </div>
            <div class="search-recommend" @click="canc">
                <h3>热搜</h3>
                <div class="hot-search">
                    <div class="hot-search-item">
                        <span class="numb n1">1</span>
                        <span class="hot-title">神奇的浏览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n2">2</span>
                        <span class="hot-title">神奇的浏览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n3">3</span>
                        <span class="hot-title">神奇的sdadsdddwd浏览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n">4</span>
                        <span class="hot-title">神奇的浏dsasdasdasd览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n">5</span>
                        <span class="hot-title">神奇的浏dsasdasdasd览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n">6</span>
                        <span class="hot-title">神奇的浏dsasdasdasd览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n">7</span>
                        <span class="hot-title">神奇的浏dsasdasdasd览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n">8</span>
                        <span class="hot-title">神奇的浏dsasdasdasd览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n">9</span>
                        <span class="hot-title">神奇的浏dsasdasdasd览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n">10</span>
                        <span class="hot-title">神奇的浏dsasdasdasd览器插件</span>
                    </div>
                    <div class="hot-search-item">
                        <span class="numb n">11</span>
                        <span class="hot-title">神奇的浏dsasdasdasd览器插件</span>
                    </div>
                </div>
            </div>
        </scroll>
        <div class="btn" v-show="isBtn">
            <div @click="cSearch">确定</div>
        </div>
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "AllSearch",
        data(){
            return {
                search:"",
                isBtn:false
            }
        },
        components:{
            Scroll,
            NavBar
        },
        methods:{
            cancelSearch(){
                this.isBtn = false;
                this.$router.back()
            },
            toCancelContent(){
                console.log(1111111)
                this.search = ""
            },
            toSearch(){
                this.isBtn = true;
            },
            canc(){
                this.isBtn = false;
            },
            cSearch(){
                console.log(222222222,this.search)
                this.$router.push('/allsearch')
            },
            loadMore(){
                this.isBtn = false;
            },
            pullingMore(){
                this.isBtn = false;
            }
        }
    }
</script>

<style scoped>
    .search-nav{
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    >>> .el-input__inner{
        width: 340px;
        border-radius: 30px;
        height: 44px;
        background-color: #f2f2f2;
    }
    .all-search .content{
        position: absolute;
        overflow: hidden;
        top: 48px;
        left: 0;
        right: 0;
        height: calc(100% - 48px);
    }
    .search-history{

    }
    .search-history .search-history-title{
        margin-top: 50px;
        height: 30px;
        line-height: 30px;
    }
    .search-history .search-history-title .title{
        float: left;
        margin-left: 20px;
        font-size: 18px;
        font-weight: 600;
    }
    .search-history .search-history-title .cl{
        float: right;
        margin-right: 20px;
        font-size: 14px;
        color: #c6c6c6;
    }
    .search-history .search-history-title .cl span{
        margin-right: 10px;
    }
    .search-history .search-content{
        margin-top: 10px;
    }
    .search-history .search-content .search-content-item{
        display: inline-block;
        border: 1px solid #fbfbfb;
        border-radius: 30px;
        padding: 5px 15px;
        color: #333;
        background-color: rgba(239, 239, 239, 0.45);
        margin: 5px;
    }
    .search-recommend{
        margin-left: 10px;
    }
    .search-recommend .hot-search{
        display: flex;
        flex-wrap: wrap;
        /*justify-content: space-around;*/
    }
    .search-recommend .hot-search .hot-search-item{
        position: relative;
        width: 48%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 20px;
    }
    .search-recommend .hot-search .hot-search-item .numb{
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 2px;
        margin-right: 3px;
        color: #fff;
    }
    .n1{
        background-color: red;
    }
    .n2{
        background-color: orange;
    }
    .n3{
        background-color: yellow;
    }
    .n{
        background-color: lightgray;
    }
    .cancel-content{
        position: absolute;
        left: 320px;
        top: 17px;
        font-size: 20px;
        color: lightgray;
    }
    .btn{
        position: fixed;
        height: 50px;
        line-height: 50px;
        bottom: 0;
        right: 0;
        left: 0;
        text-align: center;
        font-size: 20px;
        background-color: #fff;
    }
</style>