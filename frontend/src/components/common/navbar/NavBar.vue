<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .navbar{
        display: flex;
        height: 44px;
        line-height: 50px;
        text-align: center;
        /*box-shadow: 0 1px 1px rgba(100,100,100,.1);*/
        padding: 0 12px;

    }
    .left, .right{
        /*width: 120px;*/
    }
  .center{
    flex: 1;

  }
    .navbar img{
        width: 24px;
        height: 24px;
    }
</style>