<template>
    <div class="article-like">
        <div class="user-photo">
            <span>
                <img src="~assets/img/my.jpg">
            </span>
            <span>
                <img src="~assets/img/my.jpg">
            </span>
            <span>
                <img src="~assets/img/my.jpg">
            </span>
            <span>
                <img src="~assets/img/my.jpg">
            </span>
            <span>
                <img src="~assets/img/my.jpg">
            </span>
            <span>
                <img src="~assets/img/my.jpg">
            </span>
            <span>
                <img src="~assets/img/my.jpg">
            </span>
            <span>
                <img src="~assets/img/my.jpg">
            </span>
        </div>
        <div class="text">
            <span>39人表示赞同博主</span>
        </div>
        <div class="article-like-item">
            <i class="el-icon-thumb"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleLike"
    }
</script>

<style scoped>
    .article-like{
        height: 60px;
        /*line-height: 40px;*/
        text-align: center;
    }
    .article-like-item{
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid lightgray;
        border-radius: 50%;
        float: right;
        margin-right: 20px;
    }
    .article-like-item i{
        font-size: 24px;
    }
    .article-like .text{
        float: left;
        margin-top: 10px;
    }
    .article-like .user-photo{
        float: left;
        text-align: center;
        display: flex;
        margin: 10px 20px;
    }
    .article-like .user-photo img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        flex: 1;
    }
</style>