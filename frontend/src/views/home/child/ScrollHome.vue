<template>
        <div class="a">
            <div class="b" :class="{'cat_active':isActive}">
                <span>Python</span>
                <span class="heng" v-show="isActive"></span>
            </div>
            <div class="b">
                <span>java</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>c++</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>c#</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>web</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>docker</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>python</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>java</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>c++</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>c#</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>web</span>
                <div class="heng"></div>
            </div>
            <div class="b">
                <span>docker</span>
                <div class="heng"></div>
            </div>
        </div>

</template>

<script>
    import ScrollX from "components/common/scroll/ScrollX";
    export default {
        name: "SwipperHome",
        data(){
            return{
                isActive:true
            }
        },
        components:{
            ScrollX
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .a{
       height: 42px;
        line-height: 42px;
        font-size: 20px;
        color: #a4a4a4;
        white-space: nowrap;
        list-style: none;
        text-align: center;
    }
    .b{
        position: relative;
        display: inline-block;
        margin: 5px 5px;
        overflow: hidden;
        width: 70px;
        text-align: center;
        /*border-bottom: 3px solid #333;*/
    }
    .heng{
        display: block;
        width: 25px;
        height: 3px;
        margin: 0 21px;
        background-color: #333;
    }
    .cat_active{
        color: #000000;
    }
</style>