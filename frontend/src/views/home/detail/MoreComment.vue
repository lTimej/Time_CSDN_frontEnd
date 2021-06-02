<template>
    <div class="more-comment">

        <nav-bar class="more-comment-nav">
            <div slot="left" @click="cancel"><i class="el-icon-close"></i></div>
            <div slot="center" class="title"><span>全部{{comment_num}}条评论</span></div>
        </nav-bar>
        <scroll
            class="content1"
            :pull-upload="true"
            :pull-down-refresh="true"
            @pullingUp="loadMore"
            @pullingDown="pullingMore"
            ref="scrollTo1"
        >
        <div class="article-comment-item" v-for="comment in comments" @click="innerComment(comment.comment_id)">
            <div class="first">
                <img :src="comment.head_photo">
                <span class="name">{{comment.user_name}}</span>
                <span><i class="el-icon-s-opportunity" style="color: red"></i></span>
                <span class="code-year">码龄{{comment.code_year}}年</span>
                <div class="like">
                    <i class="el-icon-thumb"></i>
                    <span>{{comment.like_num}}</span>
                </div>
            </div>
            <div class="second">
                <span>
                    {{comment.content}}
                </span>
            </div>
            <div class="third">
                <span>{{comment.ctime}}</span>
            </div>
        </div   >
        </scroll>
        <div class="input-frame">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 2}"
              placeholder="写评论"
              @focus="ifLogin"
              v-model="textarea">
            </el-input>
            <button @click="toComment">发送</button>
        </div>
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import NavBar from "components/common/navbar/NavBar";
    import {userArticleComment} from "network/articles/comments";

    export default {
        name: "MoreComment",
        props:{
            article:{
                type:Object,
                default:function () {
                    return {}
                }
            },
            comments:{
                type:Array,
                default:[]
            },
            comment_num:{
                type:Number,
                default:0
            }
        },
        data() {
          return {
            textarea: ''
          };
        },
        components:{
            Scroll,
            NavBar
        },
        methods: {
            cancel(){
                this.$emit('cancel')
            },
             //上拉加载更多
            loadMore(){
                this.$refs.scrollTo1.refresh()
                //可继续上拉操作
                this.$refs.scrollTo1.finishPullUp();
            },
            //下拉刷新
            pullingMore(){
                this.$emit('cancel')
                this.$refs.scrollTo1.finishPullDown();
            },
            ifLogin(){
                if(!window.localStorage.getItem('token')){
                    this.$router.push('/login/account')
                }
            },
            toComment(){
                if (this.textarea === ""){
                    this.$toast.show("评论内容不为空",3000)
                    return;
                }
                let article_id = this.article.art_id
                userArticleComment(article_id,this.textarea).then(res=>{
                    if (res.status==201){
                        this.$toast.show("评论成功",3000)
                        this.textarea = ""
                        this.$emit("getComment")
                    }
                })

            },
            innerComment(comment_id){
                console.log(comment_id);
            }

        },
        activated() {
            this.$refs.scrollTo1.refresh()
        }

    }
</script>

<style scoped>
    .more-comment{
        position: fixed;
        height: calc(100% - 40px);
        width: 100%;
        background-color: #ffffff;
        bottom: 0;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        z-index: 98;
        transition: all 7s ease;
         animation: fadeBottom_out 0.5s linear forwards;
    }
     .more-comment .content1{
        position: relative;
        overflow: hidden;
        top: 44px;
        left: 0;
        right: 0;
        height: calc(100% - 40px - 89px);
        z-index: 99;
    }
    .more-comment-nav{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }
    .more-comment-nav i{
       font-weight: 600;
        font-size: 26px;
    }
    .more-comment-nav .title{
        font-size: 18px;
        color: #000000;
        font-weight: 600;
    }

    .article-comment-item{
        margin: 10px 10px;
    }
    .article-comment-item .first .name{
        padding: 0 10px;
    }
    .article-comment-item .first .code-year{
        padding: 0 10px;
        color: lightgray;
    }
    .article-comment-item .first img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        float: left;
    }
    .article-comment-item .first {
        margin: 5px 0;
    }
    .article-comment-item .first .like{
        float: right;
        padding-right: 10px;
    }
    .article-comment-item .second {
        margin: 5px 30px;
    }
    .article-comment-item .third {
        margin: 5px 30px;
        border-bottom: 1px solid lightgray;
        padding-bottom: 10px;
    }
    .more-comment .input-frame{
        position: fixed;
        border-top: 1px solid #000000;
        height: 89px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 99;
    }
    .more-comment .input-frame button{
        position: fixed;
        margin: 3px 10px;
        left: 350px;
        top: 700px;
        height: 30px;
    }
    .more-comment .input-frame >>> .el-textarea__inner{
        background-color: #f6f6f6;
    }
</style>