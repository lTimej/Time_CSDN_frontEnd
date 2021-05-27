<template>
    <div class="my-collection">
        <nav-bar class="my-collection-nav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
            <div slot="center"><span>收藏夹</span></div>
            <div slot="right"><i class="el-icon-search"></i><span>新建</span></div>
        </nav-bar>
        <scroll class="content">
            <div class="collection-num">
                <span>{{collection_num}}条内容</span>
            </div>
            <div class="my-collection-item" v-for="collection in collections" @click="toCollectionDetail(collection.art_id)">
                <div class="title">
                    <span>{{collection.title}}</span>
                </div>
                <div class="article-intro">
                    <span>文章目录数据库基础知识为什么要使用数据库什么是SQL</span>
                </div>
                <div class="author-name">
                    <span>博客</span>
                    <span class="dot">.</span>
                    <span>{{collection.user_name}}</span>
                    <i class="el-icon-more" @click="open(collection.art_id)"></i>
                </div>
            </div>
        </scroll>
        <collection-toast :isShow="isShow" @cancelShow="cancelShow" @qxCollection="qxCollection"/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import {getUserArticleCollection} from "network/articles/collection";
    import {mapGetters} from 'vuex'
    import CollectionToast from "components/contents/collectionToast/CollectionToast";
    import {cancelUserArticleCollection} from "network/articles/collection";

    export default {
        name: "MyCollection",
        data(){
            return{
                isShow:false,
                page:0,
                page_num:10,
                collections:[],
                collection_num:0,
                aid:-1
            }

        },
        components:{
            NavBar,
            Scroll,
            CollectionToast
        },
        methods: {
            //打开是否取消收藏页面
            open(aid){
                this.isShow = true
                this.aid = aid
            },
            //返回
            back(){
                this.$router.back()
            },
            //获取收藏信息
            getCollection(){
                this.page += 1;
                getUserArticleCollection(1,this.page_num).then(res=>{
                    this.collection_num = res.data.data.total_num
                    this.collections = res.data.data.collections
                })
            },
            //跳转收藏文章详情页
            toCollectionDetail(aid){
                console.log(778887,aid);
            },
            //不显示是否取消收藏页面
            cancelShow(){
                this.isShow= false
            },
            //取消收藏
            qxCollection(){
                console.log(3333,this.aid)
                cancelUserArticleCollection(this.aid).then(res=>{
                    if (res.status === 201){
                        this.isShow = false
                        this.getCollection();
                        this.$toast.show("取消收藏",5000)
                    }
                })
            }
        },
        activated() {
            this.getCollection();

        },
        computed:{
            ...mapGetters({
                allArticleDetail:'get_all_article_detail'
            })
        }
    }
</script>

<style scoped>
    .my-collection{

    }
    .my-collection .my-collection-nav{
        position: fixed;
        background-color: #fff;
        top: 0;
        right: 0;
        left: 0;
        font-size: 20px;
        font-weight: 600;
        z-index: 9;
    }
    .my-collection .my-collection-nav i{
        font-size: 24px;
        font-weight: 600;
    }
    .my-collection .content{
        position: absolute;
        overflow: hidden;
        top: 44px;
        right: 0;
        left: 0;
        height: calc(100% - 44px);
    }
    .my-collection-item{
        /*margin: 10px;*/
        border-top: 1px solid lightgray;
        border-bottom: 6px solid lightgray;
    }
    .my-collection-item .title{
        margin: 10px;
        color: #000000;
        font-weight: 500;
    }
    .my-collection-item .article-intro{
        margin: 10px;
        width: 394px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #afafaf;
    }
    .my-collection-item .author-name{
        margin: 10px;
        color: #afafaf;
    }
    .my-collection-item .author-name span:first-child{
        padding-right: 10px;
    }
    .my-collection-item .author-name .dot{
        padding-right: 10px;
    }
    .my-collection-item .author-name i{
        float: right;
    }
    .my-collection .content .collection-num{
        margin: 10px;
        font-size: 18px;
        font-weight: 600;
    }

</style>