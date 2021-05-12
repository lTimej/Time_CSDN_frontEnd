<template>
    <div class="article-list">
        <div v-for="article in articles">
            <div class="article-list-item">
                <h3 class="article-title">{{article.title}}</h3>
                <div class="article-intro">
                    TIOBE头条TIOBE 5月编程语言排行榜心线出路。前十榜单中，C、Python、Java三大鳌头仍占据前三榜单。去年11月份
                </div>
                <div class="article-info">
                    <span class="article-c">{{article.user_name}}</span>
                    <span class="article-c">26942阅读.</span>
                    <span class="article-c">18评论</span>
                    <i class="el-icon-more"></i>
                </div>
            </div>
            <div class="bbr"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
        props:{
            articles:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style scoped>
    .article-list{
        margin: 5px 0;
    }
    .article-list .article-list-item{
        margin: 10px 15px;
    }
    .article-list .article-list-item .article-title{
        margin: 0 0 5px 0;
    }
    .article-list .article-list-item .article-intro{
        margin: 5px 0;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        line-clamp:2;
        overflow: hidden;
        font-size: 16px;
    }
    .article-list .article-list-item .article-info{
        margin: 5px 0;
        color: #aaaaaa;
    }
    .article-list .article-list-item .article-info i{
        float: right;
        right: 10px;
    }
    .article-list .article-list-item .article-info .article-c{
        margin-right: 12px;
    }
    .bbr{

        height: 8px;
        background-color: lightgray;
    }
</style>