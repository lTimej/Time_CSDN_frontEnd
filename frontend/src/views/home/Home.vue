<template>
    <div class="home">
        <nav-bar class="home-nav">
            <div slot="left">
                <el-input
                    placeholder="推荐内容"
                    prefix-icon="el-icon-search"
                    v-model="search">
                </el-input>
            </div>
            <div slot="right"><i class="el-icon-circle-plus" style="color: red;font-size: 32px;padding: 10px 10px 10px 5px"></i></div>
        </nav-bar>
        <scroll-x class="content-x">
            <scroll-home />
        </scroll-x>
        <scroll class="content">
            <article-list />

        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import ScrollX from "components/common/scroll/ScrollX";
    import ScrollHome from "./child/ScrollHome";
    import ArticleList from "./articles/ArticleList";
    export default {
        name: "Home",
        data(){
            return{
                search:""
            }
        },
        components:{
            NavBar,
            ScrollHome,
            Scroll,
            ScrollX,
            ArticleList
        }
    }
</script>

<style scoped>
    .home{
        /*height: 100vh;*/
        /*position: relative;*/
    }
    .home-nav{
        color: #fff;
        position: fixed;
        /*height: 59px;*/
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    >>> .el-input__inner{
        width: 360px;
        border-radius: 30px;
        height: 44px;
    }
    >>> .contents-x{
        width: 1000px;
    }
    .content-x{
        position: absolute;
        overflow: hidden;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 650px;
        height: 50px;
    }
    .content{
        margin-top: 20px;
        position: absolute;
        overflow: hidden;
        top: 86px;
        left: 0;
        right: 0;
        bottom: 49px;
    }
</style>