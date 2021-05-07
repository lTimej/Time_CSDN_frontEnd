<template>
    <div class="bottom-toast">
        <div class="del">
            <span>删除</span>
        </div>
        <div class="cancel" @click="cancel">
            <span>取消</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomToast",
        methods:{
            cancel(){
                this.$emit('cancel')
            }
        }
    }
</script>

<style scoped>
    .bottom-toast{
        position: fixed;
        top: 620px;
        bottom: 0;
        left: 0;
        right: 0;
        height: 120px;
        line-height: 60px;
        background-color: #fff;
        z-index: 99;
    }
    .bottom-toast .del , .bottom-toast .cancel{
        margin: 0 190px;
        color: #333;
        font-size: 16px;
    }
</style>