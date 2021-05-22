<template>
    <div class="article-detail">
        <nav-bar class="article-detail-nav" v-show="!isShowInfo">
            <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
            <div slot="right"><i class="el-icon-search"></i></div>
        </nav-bar>
        <nav-bar class="article-detail-nav-copy" v-show="isShowInfo">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left" style="font-size: 32px;color: #333;"></i>
                <img :src="head_photo">
                <span >{{user_name}}</span>
            </div>
            <div slot="right">
                <div class="focus" @click="focus">
                    <span>{{isFocus}}</span>
                </div>
            </div>
        </nav-bar>
        <scroll
                class="content"
                @scroll="myscroll"
                :pull-upload="true"
                ref="scrollTo"
                @pullingUp="loadMore"
        >
            <detail-base-info :article="article[this.$route.query.aid]" @focus="focus" :isFocus="isFocus"/>
            <detail-content :article="article[this.$route.query.aid]" />
            <article-like />
            <article-comment @showMore="showMore"/>
            <similar-article />
        </scroll>
        <more-comment v-if="moreComment" @cancel="cancel"/>
        <detail-bottom-bar @writeComment="writeComment" :article="article[this.$route.query.aid]"/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import DetailBaseInfo from "components/contents/Detail/DetailBaseInfo";
    import DetailContent from "components/contents/Detail/DetailContent";
    import ArticleComment from "./ArticleComment";
    import ArticleLike from "./ArticleLike";
    import SimilarArticle from "./SimilarArticle";
    import MoreComment from "./MoreComment";
    import MoreCommentBak from "./MoreCommentBak";
    import {focusUser,cancelFocusUser,isFocusUser} from "network/users/focus";
    import DetailBottomBar from "./DetailBottomBar";
    import {mapGetters} from 'vuex'
    export default {
        name: "AllArticleDetail",
        data(){
            return{
                moreComment:false,
                isShowInfo:false,
                head_photo:"",
                user_name:"",
                isFocus:"关注"
            }
        },
        components:{
            NavBar,
            Scroll,
            DetailBaseInfo,
            DetailContent,
            ArticleLike,
            ArticleComment,
            SimilarArticle,
            MoreComment,
            MoreCommentBak,
            DetailBottomBar
        },
        computed:{
            ...mapGetters({
                article:'get_all_article_detail'
            })
        },
        methods:{
            back(){
                this.$router.back();
            },
            showMore(){
                this.moreComment = true

            },
            cancel(){
                this.moreComment = false
            },
            writeComment(){
                this.moreComment = true
            },
            loadMore(){
                this.$refs.scrollTo.refresh()
                this.$refs.scrollTo.finishPullDown();
            },
            myscroll(pos){
                this.isShowInfo = pos.y<-220
            },
            focus(){
                let target = this.article[this.$route.query.aid].user_id
                if(this.isFocus === "关注"){
                    focusUser(target).then(res=>{
                        if (res.status === 201){
                            this.isFocus = "已关注"
                            this.$store.state.focusList = []
                            this.$store.state.fansList = []
                        }
                    })
                }else{
                    cancelFocusUser(target).then(res=>{
                        if (res.status === 201){
                            this.isFocus = "关注"
                            this.$store.state.focusList = []
                            this.$store.state.fansList = []
                        }
                    })
                }
            },
            //判断是否关注
            getfocusinfo(user_id){
                isFocusUser(user_id).then(res=>{
                    if(res.data.isFocusUser) this.isFocus = "已关注"
                    else this.isFocus = "关注"
                })
            }
        },
        created() {

        },
        activated() {
            this.head_photo = this.article[this.$route.query.aid].head_photo;
            this.user_name = this.article[this.$route.query.aid].user_name;
            let user_id = this.article[this.$route.query.aid].user_id;
            this.getfocusinfo(user_id);
            this.$refs.scrollTo.refresh()
        }
    }
</script>

<style scoped>
    .article-detail{
        /*background-color: rgba(125, 125, 125, 0.8);*/
        /*position: relative;*/
    }
    .article-detail-nav{
        position: fixed;
         background-color: rgba(245, 245, 245, 0.8);
        left: 0;
        right: 0;
        top: 0;
        font-size: 24px;
        color: #333;
        font-weight: 600;
    }
    .article-detail-nav-copy{
        position: fixed;
         background-color: rgba(245, 245, 245, 0.8);
        left: 0;
        right: 0;
        top: 0;
        font-size: 18px;
        color: #333;
    }
    .article-detail-nav-copy img{
        border-radius: 50%;
        margin-right: 10px;
    }
    .article-detail-nav-copy .focus{
        height: 24px;
        width: 60px;
        border-radius: 30px;
        border: 1px solid lightgray;
        line-height: 24px;
        text-align: center;
        margin:8px 10px;
        padding: 2px 6px;
    }
    .content{
        position: absolute;
        overflow: hidden;
        top: 44px;
        left: 0;
        right: 0;
        height: calc(100% - 44px - 59px);
    }
    .like{
        height: 100px;
        background-color: red;
    }
</style>