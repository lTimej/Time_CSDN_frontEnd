<template>
    <div class="article-like">
        <div class="user-photo">
            <span v-for="liker in likers">
                <img :src="liker.head_photo">
            </span>
        </div>
        <div class="text">
            <span>{{likers.length}}人表示赞同博主</span>
        </div>
        <div class="article-like-item" @click="toLike" :class="{isActiveLike:status.islike}">
            <i class="el-icon-thumb" v-if="!status.islike" style="color: lightgray;"></i>
            <i class="el-icon-thumb" v-else style="color: white;"></i>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ArticleLike",
        props:{
            likers:{
                type:Array,
                default:[]
            },
            status:{
                type:Object,
                default:function (){
                    return {}
                }
            },
            aid:{
                type:Number,
                default:0
            }
        },
        data(){
            return{
                len:this.likers.length
            }
        },
        methods:{
            toLike(){
                this.$emit('toLike',this.aid)
            },
        }
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
    .isActiveLike{
        background-color: rgba(255, 0, 0, 0.93);
    }
</style>