<template>
        <div class="a">
            <div class="b" :class="{'cat_active':channel.id==currIndex}" v-for="channel in channels" @click="changeChannel(channel.id)">
                <span>{{channel.channel_name}}</span>
                <span class="heng" v-show="channel.id==currIndex"></span>
            </div>
        </div>
</template>

<script>
    import ScrollX from "components/common/scroll/ScrollX";

    export default {
        name: "SwipperHome",
        props:{
            channels:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                currIndex:-1
            }
        },
        components:{
            ScrollX
        },
        mounted() {

        },
        methods:{
            changeChannel(id){
                this.currIndex = id;
                this.$emit('changeChannel',id)
            }
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
        margin: 5px 0;
        overflow: hidden;
        width: 100px;
        text-align: center;
        right: 50px;
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