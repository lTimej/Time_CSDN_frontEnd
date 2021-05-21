<template>
    <div class="more-comment">

        <nav-bar class="more-comment-nav">
            <div slot="left" @click="cancel"><i class="el-icon-close"></i></div>
            <div slot="center" class="title"><span>全部203条评论</span></div>
        </nav-bar>
        <scroll
            class="content1"
            :pull-upload="true"
            :pull-down-refresh="true"
            @pullingUp="loadMore"
            @pullingDown="pullingMore"
            ref="scrollTo1"
        >
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
        </scroll>
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "MoreComment",
        props:{

        },
        data() {
          return {

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
        },
        activated() {
            console.log(1111111115551111)
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
        height: calc(100% - 40px);
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
</style>