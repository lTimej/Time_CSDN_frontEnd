<template>
    <div class="tabbar-item" @click="changeRouter">
        <div v-if="!isActive"><slot name="icon"></slot></div>
        <div v-else><slot name="active_icon"></slot></div>
        <div :style="ActiveStyle"><slot name="title"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TarBarItem",
        props:{
            path:{
                type:String
            },
            ActiveColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{
                // isActive:false
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1;
            },
            ActiveStyle(){
                return this.isActive ?{color:this.ActiveColor}:{}
            }
        },
        methods:{
            changeRouter(){
                this.$router.replace(this.path).catch(()=>{

                })
            }
        }
    }
</script>

<style scoped>
    .tabbar-item{
        flex: 1;
        height: 49px;
        font-size: 14px;
        text-align: center;
    }
    .tabbar-item img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: 2px;
        margin-bottom: 3px;
    }
    .ActiveColor{
    color: red;
  }
</style>