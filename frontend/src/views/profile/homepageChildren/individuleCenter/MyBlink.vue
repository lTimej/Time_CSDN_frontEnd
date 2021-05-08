<template>
    <div>
        <div class="my-blink">
            <img src="~assets/img/pikaqiu.gif">
            <p>在这个星球找不到你需要的信息</p>
        </div>
    </div>
</template>

<script>
    import NavPhoto from "../NavPhoto";
    export default {
        name: "MyBlink",
        components:{
            NavPhoto
        }
    }
</script>

<style scoped>
.my-blink{
        height: 800px;
        line-height: 600px;
        text-align: center;
    }
    .my-blink img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }
</style>