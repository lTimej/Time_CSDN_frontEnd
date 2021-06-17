<template>
    <div class="article-comment">
        <div class="article-comment-item" v-for="(comment,index) in comments.slice(0,5)">
            <div class="first">
                <img :src="comment.head_photo">
                <span class="name">{{comment.user_name}}</span>
                <span><i class="el-icon-s-opportunity" style="color: red"></i></span>
                <span class="code-year">码龄{{comment.code_year}}年</span>
                <div class="like" @click="toCommentLike(comment.comment_id,index)">
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
        </div>
        <div class="see-more" >
            <span @click="showMore">查看全部评论({{comment_num}})</span>
        </div>

    </div>
</template>

<script>
    import {commentLike,commentDislike} from "network/articles/like";
    export default {
        name: "ArticleComment",
        props:{
            article:{
                type:Object,
                default :function () {
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
        data(){
            return{
                // isHowMoreComment:true

            }
        },
        methods:{
            showMore(){
                this.$emit('showMore')
            },
            toCommentLike(cid,index){
                console.log(cid);
                if (!this.comments[index].comment_is_like){
                        commentLike(cid).then(res=>{
                            console.log("===add===>>",res);
                            // this.$emit("getComment");
                            this.comments[index].comment_is_like = true
                            this.comments[index].like_num += 1
                        })
                    }else{
                        commentDislike(cid).then(res=>{
                            console.log("===sub===>>",res);
                            // this.$emit("getComment");
                            this.comments[index].comment_is_like = false
                            this.comments[index].like_num -= 1
                        })
                    }
            }
        },
    }
</script>

<style scoped>
    .article-comment{
        border-top: 10px solid #e3e3e3;
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
    .see-more{
        color: dodgerblue;
        text-align: center;
        margin: 10px 0 20px 0;
        font-size: 16px;
    }
    .more-comment{
        position: fixed;
    }
    /*.comment1{*/
    /*    position: absolute;*/
    /*    bottom: 0;*/
    /*    right: 0;*/
    /*    left: 0;*/
    /*}*/
    .page_fixed{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
</style>