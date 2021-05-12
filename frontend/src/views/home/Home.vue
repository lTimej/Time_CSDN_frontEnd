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
            <scroll-home :channels="channels" @changeChannel="changeChannel" />
        </scroll-x>
        <div class="c">
                <i class="el-icon-menu"></i>
            </div>
        <scroll
            class="content"
            :pull-upload="true"
            @pullingUp="loadMore"
            ref="scrollTo"
        >
            <article-list :articles="articles" />

        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import ScrollX from "components/common/scroll/ScrollX";
    import ScrollHome from "./child/ScrollHome";
    import ArticleList from "./articles/ArticleList";

    import {allChannels} from "network/articles/channels";
    import {mapActions} from 'vuex'
    import {getChannelArticle} from "network/articles/articles";

    export default {
        name: "Home",
        data(){
            return{
                search:"",
                channels:[],
                articles:[],
                channel_id:1,
                page:0
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
            getChannels(){
                allChannels().then(res=>{
                    console.log(3333,res);
                    this.channels = res.data.data.channels;
                })
            },
            changeChannel(id){
                if (id !== this.channel_id){
                    this.articles = []
                    this.page = 0
                }
                this.channel_id = id;
                console.log(88888,this.channel_id);
                this.page += 1;
                if(id>0){
                    getChannelArticle(id,this.page,10).then(res=>{
                        // console.log(res);
                        console.log("------------->>>",this.channel_id,id)
                        for(let n of res.data.data.articles){
                            this.articles.push(n);
                        }

                        this.$refs.scrollTo.finishPullUp()
                        this.$refs.scrollTo.refresh()

                    })
                }
            },
            loadMore(){
                console.log("加载成功")
                this.changeChannel(this.channel_id);
            },
            activated() {//再次进来就回到上次记录的位置
              this.$refs.scrollTo.refresh()
            },
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
        margin: 15px 0;
        width: 30px;
        height: 30px;
        top: 44px;
        right: 0;
        background-color: #fff;
    }
    .c i{
        font-size: 32px;
    }
</style>