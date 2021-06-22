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
            <div slot="right" @click="cancelSearch"><span style="color: #333;font-size: 20px;margin-left: 1px">取消</span></div>
        </nav-bar>
        <div>
            <scroll-x class="content-x">
                <search-home />
            </scroll-x>
            <scroll
                class="content"
                :pull-upload="true"
                :pull-down-refresh="true"
                @pullingUp="loadMore"
                @pullingDown="pullingMore"
                ref="scrollTo"
            >
                <div class="to-update" v-show="isPullDown"><i class="el-icon-loading"></i></div>
                    <article-list :articles="articles" />
                <div class="to-bottom" v-show="isBottom"><span>{{pullContent}}</span></div>
            </scroll>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import ScrollX from "components/common/scroll/ScrollX";
    import SearchHome from "./SearchHome";
    import ArticleList from "../home/articles/ArticleList";
    import AllSearch from "../search/Search";

    export default {
        name: "AllSearch",
        data(){
            return{
                search:"",
                articles:[],
                channel_id:1,
                page:0,
                isPull:true,
                pullContent:"",
                isBottom:false,
                isPullDown:false,
                is_search_history:false
            }
        },
        components:{
            NavBar,
            SearchHome,
            Scroll,
            ScrollX,
            ArticleList,
            AllSearch
        },
        mounted() {

        },
        created() {

        },
        methods:{
            //上拉加载更多
            loadMore(){

            },
            //下拉刷新
            pullingMore(){

            },
            cancelSearch(){
                this.$router.back()
            }
        },
        activated() {
            this.$refs.scrollTo.refresh()
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
        width: 340px;
        border-radius: 30px;
        height: 44px;
        background-color: #f2f2f2;
    }
    >>> .contents-x{
        width: 560px;
        /*width: 100vh;*/
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
    .c{
        position: fixed;
        /*display: inline-block;*/
        margin: 12px 0;
        width: 30px;
        height: 30px;
        top: 44px;
        right: 0;
        background-color: #fff;
    }
    .c i{
        font-size: 32px;
    }
    .to-bottom{
        font-size: 20px;
        color: #aeaeae;
        font-weight: 500;
        text-align: center;
        /*margin: 10px;*/
    }
    .to-update{
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
    }
</style>