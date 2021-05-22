<template>
    <div class="article-list" v-cloak>
        <div v-for="(article,index) in articles" @click="articleDetail(index)">
            <div class="article-list-item">
                <h3 class="article-title">{{article.title}}</h3>
                <div class="article-intro" >
                    {{article.content | qiepian}}
                </div>
                <div class="article-info">
                    <span class="article-c">{{article.user_name}}</span>
                    <span class="article-c">{{article.read_num}}</span>
                    <span class="article-c">{{article.comment_num}}</span>
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
        },
        activated() {

        },
        methods:{
            articleDetail(aid){
                console.log(aid);
                this.$router.push({
                    path:'/article/detail',
                    query:{
                        aid:aid
                    }
                })
            }
        },
        filters:{
            //详情信息的片段
            qiepian(value){
                let re = /<p>(.*)<\/p>/ig;
                let str = "";
                let v = "";
                let i = 1;
                while (v = re.exec(value)){
                    if(i===3) break;
                    str += v[1];
                    i++;
                }
                return str
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