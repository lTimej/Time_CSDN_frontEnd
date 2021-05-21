<template>
    <div class="article-comment">
        <div class="article-comment-item">
            <div class="first">
                <img src="~assets/img/my.jpg">
                <span class="name">lTimej</span>
                <span><i class="el-icon-s-opportunity" style="color: red"></i></span>
                <span class="code-year">码龄1年</span>
                <div class="like">
                    <i class="el-icon-thumb"></i>
                    <span>100</span>
                </div>
            </div>
            <div class="second">
                <span>
                    介绍的很棒，感谢作者提供的分享，我的博客中也有很多计算机专业知识
                </span>
            </div>
            <div class="third">
                <span>昨天 11:49</span>
            </div>
        </div>
        <div class="article-comment-item">
            <div class="first">
                <img src="~assets/img/my.jpg">
                <span class="name">lTimej</span>
                <span><i class="el-icon-s-opportunity" style="color: red"></i></span>
                <span class="code-year">码龄1年</span>
                <div class="like">
                    <i class="el-icon-thumb"></i>
                    <span>100</span>
                </div>
            </div>
            <div class="second">
                <span>
                    介绍的很棒，感谢作者提供的分享，我的博客中也有很多计算机专业知识
                </span>
            </div>
            <div class="third">
                <span>昨天 11:49</span>
            </div>
        </div>
        <div class="article-comment-item">
            <div class="first">
                <img src="~assets/img/my.jpg">
                <span class="name">lTimej</span>
                <span><i class="el-icon-s-opportunity" style="color: red"></i></span>
                <span class="code-year">码龄1年</span>
                <div class="like">
                    <i class="el-icon-thumb"></i>
                    <span>100</span>
                </div>
            </div>
            <div class="second">
                <span>
                    介绍的很棒，感谢作者提供的分享，我的博客中也有很多计算机专业知识
                </span>
            </div>
            <div class="third">
                <span>昨天 11:49</span>
            </div>
        </div>
        <div class="article-comment-item">
            <div class="first">
                <img src="~assets/img/my.jpg">
                <span class="name">lTimej</span>
                <span><i class="el-icon-s-opportunity" style="color: red"></i></span>
                <span class="code-year">码龄1年</span>
                <div class="like">
                    <i class="el-icon-thumb"></i>
                    <span>100</span>
                </div>
            </div>
            <div class="second">
                <span>
                    介绍的很棒，感谢作者提供的分享，我的博客中也有很多计算机专业知识
                </span>
            </div>
            <div class="third">
                <span>昨天 11:49</span>
            </div>
        </div>
        <div class="article-comment-item">
            <div class="first">
                <img src="~assets/img/my.jpg">
                <span class="name">lTimej</span>
                <span><i class="el-icon-s-opportunity" style="color: red"></i></span>
                <span class="code-year">码龄1年</span>
                <div class="like">
                    <i class="el-icon-thumb"></i>
                    <span>100</span>
                </div>
            </div>
            <div class="second">
                <span>
                    介绍的很棒，感谢作者提供的分享，我的博客中也有很多计算机专业知识
                </span>
            </div>
            <div class="third">
                <span>昨天 11:49</span>
            </div>
        </div>
        <div class="see-more" >
            <span @click="showMore">查看全部评论(203)</span>
        </div>

    </div>
</template>

<script>


    export default {
        name: "ArticleComment",
        data(){
            return{
                // isHowMoreComment:true

            }
        },
        components:{

            // Scroll
        },
        methods:{
            showMore(){
                this.$emit('showMore')

            }
        }
    }
</script>

<style scoped>
    .article-comment{
        border-top: 10px solid #e3e3e3;
        /*position: relative;*/

        /*height: 100px;*/
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