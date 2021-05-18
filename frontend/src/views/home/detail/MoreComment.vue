<template>
    <div>
<!--        <scroll class="content1">-->
            <span @click="drawer = true" style="margin-left: 16px;">
                查看更多评论(35)
            </span>
            <el-drawer
              title="全部38条评论"
              :visible.sync="drawer"
              :direction="direction"
              :modal="false"
              size=45%
              @open="handleOpen"
              :before-close="handleClose">
              <div>我来啦!</div>
                <div>我来啦!</div>
                <div>我来啦!</div>
                <div>我来啦!</div>
                <div>我来啦!</div>
                <div>我来啦!</div><div>我来啦!</div>
            </el-drawer>
<!--        </scroll>-->
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    export default {
        name: "MoreComment",
        props:{
            isFixed:{
                type:Boolean,
                default:false
            }
        },
        data() {
          return {
            drawer: false,
            direction: 'btt',
          };
        },
        components:{
            Scroll
        },
        methods: {
          handleClose(done) {
              done()
          },
            handleOpen(){
                this.isFixed = true
            }
        }
    }
</script>

<style scoped>

</style>