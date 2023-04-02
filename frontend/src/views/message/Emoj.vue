<template>
    <div class="emoj">
        <div class="emoj-item">
            <div class="res" v-for="(item, index) in image_list" :key="index" @click="send_emoj(index)"><img :src="item" class="small"></div>
            <!-- <div class="res"><img src="~assets/doutu/emoj/0.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/1.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/2.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/3.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/4.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/5.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/6.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/7.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/8.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/9.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/10.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/11.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/12.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/13.gif" class="small"></div> -->
        </div>
    </div>
</template>

<script>
    
    export default {
        name: "Emoj",
        props:{
            image_list:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                index:0,
            }
        },
        components:{
            
        },
        mounted(){
            // let imgList = []
            // const files = require.context("@/assets/doutu/emoj",true,/\.*\.jpg|jpeg|png|gif$/).keys();
            // files.forEach((e)=> {
            //     imgList.push(require("../../assets/doutu/emoj" + e.slice(1)));
            // });
            // this.image_list = imgList;
            // console.log(this.image_list,"**9999999990000000**")
        },
        methods:{
            send_emoj(index){
                console.log(index,"************")
                this.$emit("send_emoj",index);
            }
        }
        
    }
</script>

<style scoped>
    .emoj{
        background-color: #FFFFFF;
        display: flex;
        position: fixed;
        bottom: 50px;
    }
    .emoj-item{
        flex-direction: row;
        flex-wrap: wrap;
        display: flex;
    }
    .emoj-item img{
        margin:10px
    }
    .emoj-item .small{
        width: 32px;
        height: 32px;
    }
</style>