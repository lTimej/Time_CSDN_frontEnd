<template>
    <div class="base-info" v-cloak>
        <h2>{{article.title}}</h2>
        <div class="article-time">
            <span>{{article.create_time}}</span>
            <span>|</span>
            <span>预计阅读{{len | readTime}}分钟</span>
            <span>|</span>
            <span>{{read_num}}阅读</span>
        </div>
        <div class="author-info">
            <div class="head-photo" @click="toUser">
                <img :src="article.head_photo">
            </div>
            <div class="name">
                <div>{{article.user_name}}</div>
                <div>码龄{{article.code_year}}年</div>
            </div>
            <div class="focus" @click="focus">
                <span>{{isFocus}}</span>
            </div>
            <div class="private-letter" @click="to_chat">
                <span>私信</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props:{
            article:{
                type:Object,
                default:function () {
                    return {}
                }
            },
            isFocus:{
                type:String,
                default:function () {
                    return "关注"
                }
            },
            read_num:{
                type:Number,
                default:function () {
                    return 0
                }
            }
        },
        data(){
            return {
                read_time : 0,
                len:0,
            }
        },
        activated() {
            this.len = this.article.content.length
        },
        methods:{
            focus(){
                this.$emit('focus',this.article.user_id)
            },
            toUser(){
                this.$emit('toUser',this.article.user_id)
            },
            to_chat(){
                console.log(this.article.user_id,"&&&&&&&&&&&&&&")
                this.$router.push({
                    path:'/chat',
                    query:{
                        user_name:this.article.user_name,
                        user_id:this.article.user_id,
                        msg_count:0,
                    }
                })
            }
        },
        filters:{
            readTime(value){
                return Math.round(value/2000)
            }
        }
    }
</script>

<style scoped>
    .base-info{
        margin: 0 10px;
        height: 180px;
    }
    .article-time{
        color: #b0b0b0;
        font-size: 16px;
    }
    .article-time span{
        padding-right: 10px;
    }
    .author-info{
        margin-top: 10px;
        height: 59px;
        background-color: rgba(245, 245, 245, 0.78);
        line-height: 30px;
        border-radius: 8px;
        color: #000000;
    }
    .author-info .head-photo{
        float: left;
        padding:10px 10px;
    }
    .author-info .head-photo img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .author-info .name{
        float: left;
        padding:5px 10px;
        color: #333;
    }
    .author-info .name div{
        height: 20px;
    }
    .author-info .private-letter , .author-info .focus{
        float: right;
        height: 24px;
        /* width: 60px; */
        border-radius: 30px;
        border: 1px solid lightgray;
        line-height: 24px;
        text-align: center;
        margin:16px 10px;
        padding: 2px 6px;
    }

</style>