<template>
    <div class="home">
        <nav-bar class="home-nav">
            <div slot="left" @click="cancelSearch">
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
                <div class="to-bottom" v-show="isRefresh"><span>{{pullContent}}</span></div>
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
    import {userSearch} from "network/search/search";

    export default {
        name: "AllSearch",
        data(){
            return{
                search:"",
                articles:[],
                channel_id:1,
                page:0,
                pullContent:"",
                isBottom:false,
                isPullDown:false,
                is_search_history:false,
                keyword:"",
                isRefresh:false
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
                this.isRefresh = true
                if (!this.isBottom){//没加载到底，可以继续上拉
                    this.pullContent = "加载更多！！！";
                    setTimeout(()=>{
                        this.getSearchContent(true)
                        this.isRefresh = false
                    },1000)
                }else{//加载完成奴在上拉
                    this.pullContent = "已到底部";
                    setTimeout(()=>{
                        this.isRefresh = false
                    },1000)
                }
                //可无限上拉
                this.$refs.scrollTo.finishPullUp();
                //刷新页面
                this.$refs.scrollTo.refresh()
            },
            //下拉刷新
            pullingMore(){
                //可下上拉，架请求
                this.isPullDown = true;
                setTimeout(()=>{
                    this.isPullDown = false
                },2000);
                this.$refs.scrollTo.finishPullDown();

            },
            //返回上页
            cancelSearch(){
                this.$router.back()
            },
            //获取搜索文章列表
            getSearchContent(isRefresh=false){
                if(!isRefresh){//判断是否是上拉加载，搜索加载的，重置文章数组，和页数
                    this.articles = [];
                    this.page = 0;
                }
                //加载到底部不在请求
                if(this.isBottom){
                    return;
                }
                //加载一次，页面+1
                this.page += 1;
                //请求后端，获取文章列表
                userSearch(this.keyword,this.page,10).then(res=>{
                    this.articles.push(...res.data.articles);
                    //
                    if(this.articles.length === res.data.total_num){
                        this.isBottom = true
                    }
                    this.$refs.scrollTo.refresh()
                })
            }
        },
        activated() {
            this.keyword = this.$route.query.ky;
            this.search = this.keyword;
            this.getSearchContent();
        }
    }
</script>

<style scoped>
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
        height: calc(100% - 106px);
        /*bottom: 49px;*/
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