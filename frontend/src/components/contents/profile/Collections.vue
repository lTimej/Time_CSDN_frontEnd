<template>
    <div class="indi-collection">
        <div class="indi-collection-item">
            <div class="b" @click="clickCollection"><i class="el-icon-star-off"></i><p>收藏</p></div>
            <div class="b"><i class="el-icon-time"></i><p>浏览历史</p></div>
            <div class="b"><i class="el-icon-s-claim"></i><p>签到</p></div>
            <div class="b"><i class="el-icon-postcard"></i><p>我的钱包</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Collections",
        methods:{
            clickCollection(){
                this.$emit('clickCollection')
            }
        }
    }
</script>

<style scoped>
    .indi-collection{
        width: 95%;
        margin: 10px auto auto auto;
        background-color: #fff;
        border-radius: 5px;
    }
    .indi-collection-item{
        display: flex;
        text-align: center;
    }
    .indi-collection-item .b{
        flex: 1;
        margin: 10px 0;
    }
    .indi-collection-item .b p{
        margin: 1px 0;
        font-size: 16px;
    }
    .indi-collection-item .b i{
        font-size: 24px;
        color: red;
    }
</style>