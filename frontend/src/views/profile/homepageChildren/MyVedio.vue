<template>
    <nav-photo>
        <div class="my-vedio">
            <img src="~assets/img/pikaqiu.gif">
            <p>在这个星球找不到你需要的信息</p>
        </div>
    </nav-photo>
</template>

<script>
    import NavPhoto from "./NavPhoto";
    export default {
        name: "MyVedio",
        components:{
            NavPhoto
        }
    }
</script>

<style scoped>
    .my-vedio{
        height: 800px;
        line-height: 600px;
        text-align: center;
    }
    .my-vedio img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }
</style>