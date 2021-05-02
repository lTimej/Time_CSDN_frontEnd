<template>
    <div class="setting-item" @click="changeRouter">
        <div class="left"><slot name="left"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "SettingsItem",
        props:{
            path:{
                type:String
            }
        },
        methods:{
            //退出
            changeRouter(){
                this.$store.getters.delToken;
                this.$router.replace(this.path).catch(()=>{})

            }
        }
    }
</script>

<style scoped>
    .setting-item{
        height: 60px;
        line-height: 60px;
        /*margin: 0 10px;*/
        padding: 0 10px;
        font-size: 18px;
        background-color: #fff;
    }
    .setting-item .left{
        float: left;
    }
    .setting-item .right{
        float: right;
    }
</style>