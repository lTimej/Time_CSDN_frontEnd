<template>
    <div >
        <div class="my-blog" v-for="(myblog,index) in myblogs" @click="getArticleDetail(index)">
            <div class="my-blog-first">
                <div class="title">
                    <span class="art-type">原创</span>
                    <span class="art-title">{{myblog.title}}</span>
                </div>
                <div class="art-edit"><i class="el-icon-edit"></i></div>
            </div>
            <div class="my-blog-second" >
                <span>
                    {{myblog.content | qiepian}}
                </span>
            </div>
            <div class="my-blog-third">
                <span class="date">{{myblog.create_time}}</span>
                <span class="like"><i class="el-icon-thumb"></i>{{myblog.like_num}} 赞</span>
                <span class="view"><i class="el-icon-view"></i> {{myblog.read_num}}</span>
                <span class="comment"><i class="el-icon-chat-square"></i> {{myblog.comment_num}}评论</span>
                <span class="more" @click="getMore"><i class="el-icon-more"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    import NavPhoto from "../NavPhoto";
    export default {
        name: "MyBloc",
        props:{
            myblogs:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{

            }
        },
        components:{
            NavPhoto,
        },
        methods:{
            getMore(){

            },
            getArticleDetail(art_id){
                this.$router.push({
                    path:'/user/article/detail',
                    query:{
                        aid:art_id
                    }
                })
            }
        },
        activated() {

        },
        filters:{//详情信息的片段
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
    .my-blog{
        background-color: #fff;
        margin: 20px 0;
        border-bottom: 1px solid lightgray;
    }
    .my-blog .my-blog-first{
        margin: 10px 20px;

    }
    .my-blog .my-blog-first .title{
        float: left;
        width: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

    }
    .my-blog .my-blog-first .art-type{
        width: 30px;
        height: 20px;
        line-height: 20px;
        padding: 3px 5px;
        font-size: 13px;
        background-color: lightgray;
        border-radius: 5px;
        margin-right: 10px;
    }
    .my-blog .my-blog-first .art-title{
        color: #000000;
        font-size: 20px;
        font-weight: 700;
    }
    .my-blog .my-blog-first .art-edit {
        float: right;
        font-size: 18px;
        
    }
    .my-blog .my-blog-second{
        margin: 0 20px;
        width: 350px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        /*white-space: nowrap;*/
        line-clamp:2;
        overflow: hidden;
        font-size: 18px;
        color: #848484;
    }
    .my-blog .my-blog-third{
        margin: 8px 0 10px 20px;
        font-size: 17px;
        color: #848484;
    }
    .my-blog .my-blog-third span{
        margin-right: 15px;
    }
    .my-blog .my-blog-third .more{
        float: right;
        margin:0 20px 0 0;
    }
</style>