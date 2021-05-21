<template>
    <div class="article-detail">
        <nav-bar class="article-detail-nav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
            <div slot="right"><i class="el-icon-search"></i></div>
        </nav-bar>
        <scroll
                class="content"
                :pull-upload="true"
                ref="scrollTo"
                @pullingUp="loadMore"
        >
            <detail-base-info :article="article[this.$route.query.aid]" />
            <detail-content :article="article[this.$route.query.aid]" />
            <article-like />
            <article-comment @showMore="showMore"/>
            <similar-article />
        </scroll>
        <more-comment v-if="moreComment" @cancel="cancel"/>
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
    import {mapGetters} from 'vuex'
    export default {
        name: "AllArticleDetail",
        data(){
            return{
                moreComment:false
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
            MoreCommentBak
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
            loadMore(){
                console.log('上拉加载更多')
                this.$refs.scrollTo.refresh()
                this.$refs.scrollTo.finishPullDown();
            }
        },
        activated() {
            this.$refs.scrollTo.refresh()
        }
    }
</script>

<style scoped>
    .article-detail{
        /*background-color: rgba(125, 125, 125, 0.8);*/
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
    .content{
        position: absolute;
        overflow: hidden;
        top: 44px;
        left: 0;
        right: 0;
        height: calc(100% - 44px);
    }
    .like{
        height: 100px;
        background-color: red;
    }
</style>