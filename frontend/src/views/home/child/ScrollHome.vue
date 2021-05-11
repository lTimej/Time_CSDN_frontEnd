<template>
        <div class="a">
            <div class="b" :class="{'cat_active':isActive}" v-for="channel in channels">
                <span>{{channel.channel_name}}</span>
                <span class="heng" v-show="isActive"></span>
            </div>
        </div>
</template>

<script>
    import ScrollX from "components/common/scroll/ScrollX";
    import {mapGetters} from 'vuex'

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

        },
        computed:{
            ...mapGetters({
                channels:'get_all_channels'
            })

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
        width: 100px;
        text-align: center;
        /*border-bottom: 3px solid #333;*/
    }
    .heng{
        display: block;
        width: 25px;
        height: 3px;
        margin: 0 35px;
        background-color: #333;
    }
    .cat_active{
        color: #000000;
    }
</style>