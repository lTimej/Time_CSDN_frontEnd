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
            <scroll-home @changeChannel="changeChannel" />
        </scroll-x>
        <div class="c" @click="editChannel">
                <i class="el-icon-menu"></i>
        </div>
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
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import ScrollX from "components/common/scroll/ScrollX";
    import ScrollHome from "./child/ScrollHome";
    import ArticleList from "./articles/ArticleList";

    import {allChannels,defaultChannels,UserChannel} from "network/articles/channels";
    import {mapActions} from 'vuex'
    import {getChannelArticle} from "network/articles/articles";

    export default {
        name: "Home",
        data(){
            return{
                search:"",
                articles:[],
                channel_id:1,
                page:0,
                isPull:true,
                pullContent:"",
                isBottom:false,
                isPullDown:false
            }
        },
        components:{
            NavBar,
            ScrollHome,
            Scroll,
            ScrollX,
            ArticleList
        },
        mounted() {

        },
        created() {
            this.getChannels();
        },
        methods:{
            //获取频道信息
            getChannels(){
                UserChannel().then(res=>{
                    this.$store.dispatch("SaveUserChannels",res.data.data.channels)
                });
                defaultChannels().then(res=>{
                    this.$store.dispatch('SaveDefaultChannels',res.data.data.default_channel)
                })
            },
            //切换频道
            changeChannel(id){
                //切换频道，数据归零
                if (id !== this.channel_id){
                    this.articles = [];
                    this.page = 0;
                     this.isPull = true;
                     this.isPullDown = false
                }
                this.channel_id = id;
                //页数
                this.page += 1;
                if(id>0){
                    //获取该频道文章信息
                    getChannelArticle(id,this.page,10).then(res=>{
                        for(let n of res.data.data.articles){
                            this.articles.push(n);
                        }
                        //上拉加载更多后，立即刷新
                        this.$refs.scrollTo.refresh();
                        //数据加载完成，不在继续请求
                        if(res.data.data.articles.length ===0){
                            this.isPull = false;
                            this.pullContent = "~~~~~~到底了~~~~~~"
                        }
                    })
                }
            },
            //上拉加载更多
            loadMore(){
                this.isBottom = true;
                //可下上拉，架请求
                if (this.isPull){
                    this.pullContent = "加载更多！！！";
                    setTimeout(()=>{
                        this.changeChannel(this.channel_id);
                        this.isBottom = false;
                    },1000)
                }else{
                    setTimeout(()=>{
                        this.isBottom = false;
                    },1000)
                }
                //可继续上拉操作
                this.$refs.scrollTo.finishPullUp();
            },
            //下拉刷新
            pullingMore(){
                this.isPullDown = true;
                setTimeout(()=>{
                    this.isPullDown = false
                },2000);
                this.$refs.scrollTo.finishPullDown();
            },
            //编辑频道
            editChannel(){
                this.$router.push('/channel/list')
            },
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
        width: 360px;
        border-radius: 30px;
        height: 44px;
    }
    >>> .contents-x{
        width: 1890px;
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