<template>
        <div class="a" style="touch-action: none;">
            <div class="b">
                <span>全部</span>
                <span class="heng"></span>
            </div>
            <div class="b">
                <span>博客</span>
                <span class="heng"></span>
            </div>
            <div class="b">
                <span>下载</span>
                <span class="heng"></span>
            </div>
            <div class="b">
                <span>电子书</span>
                <span class="heng"></span>
            </div>
            <div class="b">
                <span>用户</span>
                <span class="heng"></span>
            </div>
            <div class="b">
                <span>课程</span>
                <span class="heng"></span>
            </div>
            <div class="b">
                <span>问答</span>
                <span class="heng"></span>
            </div>
            <div class="b">
                <span>VIP</span>
                <span class="heng"></span>
            </div>
        </div>
</template>

<script>

    export default {
        name: "SearchHome",
        props:{

        },
        data(){
            return{
                currIndex:-1
            }
        },
        components:{
        },
        mounted() {

        },
        methods:{

        },
        computed:{

        }
    }
</script>

<style scoped>
    .a{
       height: 42px;
        line-height: 42px;
        font-size: 18px;
        color: #a4a4a4;
        white-space: nowrap;
        list-style: none;
        /*text-align: center;*/
        margin-left: 50px;
    }
    .b{
        position: relative;
        display: inline-block;
        margin: 2px 0;
        overflow: hidden;
        width: 70px;
        text-align: center;
        right: 50px;
    }
    .heng{
        display: block;
        width: 25px;
        height: 2px;
        margin: 0 20px;
        background-color: #333;
    }
    .cat_active{
        color: #000000;
    }
</style>