<template>
    <div class="detail-content" @load="finishLoad">
        <div v-html="article.content">
            {{article.content}}
        </div>
        <div class="aticle-create-time">
            <span>文章最后发布于{{article.create_time}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailContent",
        props:{
            article:{
                type:Object,
                default:function () {
                    return {}
                }
            }
        },
        data(){
            return{
                counter:0,
                contentLength:this.article.content.length
            }
        },
        methods:{
            finishLoad(){
                if(++this.counter===this.contentLength){
                    this.$emit('finishLoad')
                }
            }
        },
    }
</script>

<style scoped>
    .detail-content{
        margin: 10px;
    }
    .aticle-create-time{
        margin-left: 200px;
        font-size: 14px;
        color: lightgray;
    }
</style>