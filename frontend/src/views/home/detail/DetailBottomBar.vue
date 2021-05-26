<template>
    <div class="bottom-bar">
        <div class="bottom-bar-left">
            <div class="input-frame" @click="writeComment">
                <i class="el-icon-edit"></i>
                <span>写评论</span>
            </div>
        </div>
        <div class="bottom-bar-right">
            <div class="comment c">
                <div class="icon"><i class="el-icon-chat-line-square"></i></div>
                <div class="text"><span>评论</span></div>
                <div class="number">
                    <span>0</span>
                </div>
            </div>
            <div class="collection c" @click="toCollection">
                <div class="icon">
                    <i class="el-icon-star-off" v-if="!status.iscollection"></i>
                    <i class="el-icon-star-on" v-else style="color: orange"></i>
                </div>
                <div class="text"><span>收藏</span></div>
                <div class="number" v-show="status.collection_num !== 0">
                    <span>{{status.collection_num}}</span>
                </div>
            </div>
            <div class="like c" @click="toLike">
                <div class="icon"><i class="el-icon-thumb"></i></div>
                <div class="text"><span>点赞</span></div>
                <div class="number">
                    <span>0</span>
                </div>
            </div>
            <div class="share c">
                <div class="icon"><i class="el-icon-link"></i></div>
                <div class="text"><span>分享</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
        props:{
            status:{
                type:Object,
                default:function (){
                    return {}
                }
            }
        },
        data(){
            return{
                collectionNum:this.status.collection_num,
                isZero:false ? this.status.collection_num === '0' : true
            }
        },
        methods:{
            writeComment(){
                this.$emit('writeComment')
            },
            toCollection(){
                this.$emit('toCollection',this.status.aid)
            },
            toLike(){
                this.$emit('toLike',this.status)
            }
        }
    }
</script>

<style scoped>
    .bottom-bar{
        border-top: 1px solid rgba(0, 0, 0, 0.48);
        height: 59px;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        background-color:#fff;
        display: flex;
        /*text-align: center;*/
      }
    .bottom-bar .bottom-bar-left{
        float: left;
    }
    .bottom-bar .bottom-bar-right{
        float: right;
        display: flex;
    }
    .bottom-bar .bottom-bar-left .input-frame{
        width: 200px;
        height: 39px;
        line-height: 39px;
        margin: 10px 10px;
        border: 1px solid lightgray;
        border-radius: 39px;
        background-color: lightgray;
        padding: 0 5px;
    }
    .bottom-bar .bottom-bar-right .c{
        flex:1;
        width: 39px;
        padding: 2px 3px;
        text-align: center;
        font-size: 13px;
        color: #000000;
    }
    .bottom-bar .bottom-bar-right .c .icon{
        font-size: 28px;
        padding: 0;
    }
    .bottom-bar .bottom-bar-right .c .number{
        position: relative;
        border: 1px solid red;
        background-color: red;
        width: 21px;
        height: 10px;
        border-radius: 8px;
        font-size: 7px;
        left: 20px;
        bottom: 49px;
        text-align: center;
        line-height: 10px;
        color: #fff;
        padding: 1px 2px;
    }
</style>