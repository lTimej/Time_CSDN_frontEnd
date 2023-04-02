<template>
    <div class="article-detail" v-cloak>
        <nav-bar class="article-detail-nav" v-show="!isShowInfo">
            <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
            <div slot="right"><i class="el-icon-search"></i></div>
        </nav-bar>
        <nav-bar class="article-detail-nav-copy" v-show="isShowInfo">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left" style="font-size: 32px;color: #333;"></i>
                <img :src="head_photo" @click="toUser(user_id)">
                <span >{{user_name}}</span>
            </div>
            <div slot="right">
                <div class="focus" @click="focus(user_id)">
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
            <detail-base-info :article="article[this.$route.query.aid]" @focus="focus(user_id)" :isFocus="isFocus" ref="baseInfo" :read_num="status.read_num" @toUser="toUser(user_id)"/>
            <detail-content :article="article[this.$route.query.aid]" />
            <article-like
                :likers="likers"
                @toLike="toLike"
                :status="status"
                :aid="aid"
            />
            <article-comment
                    @showMore="showMore"
                    :article="article[this.$route.query.aid]"
                    :comments="comments"
                    :comment_num="comment_num"
            />
            <similar-article />
        </scroll>
        <more-comment
                v-if="moreComment"
                @cancel="cancel"
                :article="article[this.$route.query.aid]"
                :comments="comments"
                @loadMore="loadMore1"
                :comment_num="comment_num"
                @getComment="getComment"
        />
        <detail-bottom-bar
                @writeComment="writeComment"
                :status="status"
                @toCollection="toCollection"
                @toLike="toLike"
                :comment_num="comment_num"
                @toMoreComment="toMoreComment"
        />
        <auth :drawers="drawers" @cancelAuth="cancelAuth" @changeLogin="changeLogin"/>
        <collection-toast
                :isShow="isShow"
                @cancelShow="cancelShow"
                @qxCollection="qxCollection"
        />
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
    import CollectionToast from "components/contents/collectionToast/CollectionToast";

    import DetailBottomBar from "./DetailBottomBar";
    import Auth from "components/contents/login/Auth";

    import {mapGetters} from 'vuex'
    import {clickFocus} from "common/mixins";
    import {userArticleCollection,cancelUserArticleCollection} from "network/articles/collection";
    import {getArticleStatus} from "network/articles/articles";
    import {userArticleLike,cancelUserArticleLike,articleLike} from "network/articles/like";
    import {getuserArticleSectorComment,getuserArticleCommentComment} from "network/articles/comments";

    export default {
        name: "AllArticleDetail",
        mixins:[clickFocus],
        data(){
            return{
                isShow:false,
                moreComment:false,
                isShowInfo:false,
                head_photo:"",
                user_name:"",
                isFocus:"关注",
                user_id:0,
                baseInfo_Y:0,
                status:{},
                comments:[],
                commentss:[],
                comment_num:0,
                comment2_id:0,
                limit:0,
                f:true,
                len:0,
                likers:[],
                aid:0
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
            DetailBottomBar,
            Auth,
            CollectionToast
        },
        methods:{
            back(){
                this.drawers = false;
                this.moreComment = false;
                this.$router.back();
            },
            showMore(){
                this.moreComment = true

            },
            cancel(){
                this.moreComment = false;
                this.getSectorComment()
            },
            writeComment(){
                this.moreComment = true
            },
            loadMore(){
                this.$refs.scrollTo.finishPullDown();
                this.$refs.scrollTo.refresh();
            },
            myscroll(pos){
                console.log(pos.y,"********************",this.baseInfo_Y)
                this.isShowInfo = pos.y < this.baseInfo_Y;
                this.drawers = true;
                this.drawers = false;
            },
            //取消登录认证
            cancelAuth(){
                this.drawers = false
            },
            //切换认证登录方式
            changeLogin(){
                this.drawers = !this.drawers;
                this.$router.push('/login/account')
            },
            //收藏
            toCollection(aid){
                //判断是否登录
                if (!window.localStorage.getItem('token')){
                    this.drawers = false;
                    this.drawers = true;
                    return
                }
                //如果已收藏则直接返回
                if(this.status.iscollection){
                    this.isShow = true;
                    return;
                }
                userArticleCollection(aid).then(res=>{
                    if (res.status === 201){
                        this.$toast.show("收藏成功",3000);
                        this.getArticleStatus()
                    }
                })
            },
            toLike(aid){
                //判断是否登录
                if (!window.localStorage.getItem('token')){
                    this.drawers = false;
                    this.drawers = true;
                    return
                }
                //如果已点赞则直接返回
                if(this.status.islike){
                    cancelUserArticleLike(aid).then(res=>{
                        if (res.status === 201){
                            this.$toast.show("取消点赞",3000);
                            this.getArticleStatus();
                            this.getArticleLikeNum()
                        }else{
                            this.$toast.show("取消失败",3000)
                        }
                    });
                    return
                }
                userArticleLike(aid).then(res=>{
                    if (res.status === 201){
                        this.$toast.show("点赞成功",3000)
                        this.getArticleStatus()
                        this.getArticleLikeNum()
                    }else{
                        this.$toast.show("点赞失败",3000)
                    }
                })
            },
            //获取当前用户对当前文章的一种动作
            getArticleStatus(){
                let aid = this.article[this.$route.query.aid].art_id;
                let uid = this.article[this.$route.query.aid].user_id;
                
                getArticleStatus(aid,uid).then(res=>{
                    this.status = res.data.data
                })
            },
            //不显示是否取消收藏页面
            cancelShow(){
                this.isShow = false
            },
            //取消收藏
            qxCollection(){
                cancelUserArticleCollection(this.status.aid).then(res=>{
                    if (res.status === 201){
                        this.isShow = false;
                        this.getArticleStatus();
                        this.$toast.show("取消收藏",5000)
                    }
                })
            },
            getSectorComment(){
                if(!this.f){
                    return
                }
                this.limit += 5;
                let time1 = Date.parse(new Date())/1000;
                let article_id = this.article[this.$route.query.aid].art_id;
                getuserArticleSectorComment('a',article_id,time1,this.limit).then(res=>{
                    this.f= true;
                    this.comments = res.data.data.comments;
                    this.comment_num = res.data.data.total_num;
                    if(res.status === 201){
                        if(res.data.data.comments.length === this.len){
                            this.f = false;
                            return;
                        }
                        this.len = res.data.data.comments.length;
                    }
                })
            },
            getComment(){
                this.f = true;
                this.limit = 0;
                this.getSectorComment();
            },
            loadMore1(){
                this.getSectorComment()
            },
            toMoreComment(){
                this.moreComment = true
            },
            getArticleLikeNum(){
                let aid = this.article[this.$route.query.aid].art_id;
                articleLike(aid).then(res=>{
                    this.likers = res.data.data.users_info
                })
            },
            toUser(user_id){
                console.log("跳转到用户信息页面")
                this.$router.push('/myAccount')
            }
        },
        activated() {
            this.head_photo = this.article[this.$route.query.aid].head_photo;
            this.user_name = this.article[this.$route.query.aid].user_name;
            this.user_id = this.article[this.$route.query.aid].user_id;
            this.aid =this.article[this.$route.query.aid].art_id;
            this.getfocusinfo(this.user_id);
            this.drawers = false;
            this.baseInfo_Y = this.$refs.baseInfo.$el.offsetTop - 180 - 44;
            this.getArticleStatus();
            this.$refs.scrollTo.refresh();
            this.getComment();
            this.getArticleLikeNum()
        },
    }
</script>

<style scoped>
    .article-detail{

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
        /* width: 60px; */
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