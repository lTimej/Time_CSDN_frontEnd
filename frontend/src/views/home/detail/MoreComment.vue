<template>
    <div class="more-comment" v-cloak>
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
        <div v-for="comment in comments">
            <div class="article-comment-item" @click="secontComment(comment.comment_id)">
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
            <div class="second-comment" v-for="cComment in comment.cComments">
                <div class="article-comment-item" >
                    <div class="first">
                        <img :src="cComment.head_photo">
                        <span class="name">{{cComment.user_name}}</span>
                        <span><i class="el-icon-s-opportunity" style="color: red"></i></span>
                        <span class="code-year">码龄{{cComment.code_year}}年</span>
                        <div class="like">
                            <i class="el-icon-thumb"></i>
                            <span>{{cComment.like_num}}</span>
                        </div>
                    </div>
                    <div class="second">
                        <span>
                            {{cComment.content}}
                        </span>
                    </div>
                    <div class="third">
                        <span>{{cComment.ctime}}</span>
                    </div>
                </div   >
            </div>
        </div>
        </scroll>
        <div class="first-comment" v-show="!isComment" @click="firstComment">
            <el-input v-model="first_comment" placeholder="写评论"></el-input>
        </div>
        <div class="input-frame" v-show="isComment">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 2}"
              placeholder="写评论"
              @focus="ifLogin"
              v-model="textarea">
            </el-input>
            <button class="send" @click="toComment">发送</button>
            <button class="cancel" @click="toCancel">取消</button>
        </div>
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import NavBar from "components/common/navbar/NavBar";
    import {userArticleComment} from "network/articles/comments";
    import {mapGetters} from 'vuex'

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
            },
        },
        data() {
          return {
            textarea: '',
              first_comment:'',
              isComment:false,
              aid:0,
              cid:0,
              commentss:[]
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
                this.$emit('loadMore',);
                this.$refs.scrollTo1.refresh();
                //可继续上拉操作
                this.$refs.scrollTo1.finishPullUp();
            },
            //下拉刷新
            pullingMore(){
                this.$emit('cancel');
                this.$refs.scrollTo1.finishPullDown();
            },
            ifLogin(){
                if(!window.localStorage.getItem('token')){
                    this.$router.push('/login/account')
                }
            },
            toComment(){
                if (this.textarea === ""){
                    this.$toast.show("评论内容不为空",3000);
                    return;
                }
                userArticleComment(this.aid,this.cid,this.textarea).then(res=>{
                    if (res.status==201){
                        this.$toast.show("评论成功",3000);
                        this.textarea = "";
                        //刷新初始化数据
                        this.isComment = false;
                        this.aid = 0;
                        this.cid = 0;
                        this.$emit("getComment");
                    }else if(res.status === 400){
                        this.$toast.show("已评论过",5000)
                    }else if(res.status === 401){
                        this.$toast.show("已评论过",5000)
                    }
                })
            },
            firstComment(){
                this.aid  = this.article.art_id;
                this.cid = null;
                this.isComment = true;
            },
            secontComment(cid){
                this.aid  = this.article.art_id;
                this.cid = cid;
                this.isComment = true;
            },
            toCancel(){
                this.isComment = false;
                this.aid = 0;
                this.cid = 0;
            }
        },
        activated() {
            this.$refs.scrollTo1.refresh();
        },
    }
</script>

<style scoped>
    .more-comment{
        position: fixed;
        border-top: 1px solid lightgray;
        height: calc(100% - 80px);
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
        margin: 5px 40px;
    }
    .article-comment-item .third {
        margin: 5px 40px;
        /*border-bottom: 1px solid lightgray;*/
        padding-bottom: 10px;
        color: #b8b8b8;
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
    .more-comment .first-comment{
        position: fixed;
        width: 400px;
        left: 0;
        right: 0;
        bottom: 10px;
        /*background-color: #fff;*/
        margin-left: 5px;
        z-index: 99;
    }
    .more-comment .input-frame .send{
        position: fixed;
        margin: 3px 10px;
        left: 300px;
        top: 700px;
        height: 30px;
    }
    .more-comment .input-frame .cancel{
        position: fixed;
        margin: 3px 10px;
        left: 350px;
        top: 700px;
        height: 30px;
    }
    .more-comment .input-frame >>> .el-textarea__inner{
        background-color: #f6f6f6;
    }
    .second-comment{
        margin-left: 40px;
    }
</style>