<template>
    <div class="tab-control-item" @click="changeRouter">
        <div ><slot name="title"></slot></div>
        <div><slot name="active_icon"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabControlItem",
        methods:{
            changeRouter(){
                this.$emit('changeRouter')
            }
        }
    }
</script>

<style scoped>
    .tab-control-item{
        flex: 1;
        height: 39px;
        line-height: 39px;
        font-size: 17px;
        text-align: center;
        color: #b0b0b0;
    }
</style>