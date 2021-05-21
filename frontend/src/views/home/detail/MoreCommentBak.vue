<template>
    <div class="drawer">
        <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose">
          <span>我来啦!</span>
        </el-drawer>
  </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "MoreComment",
        props:{
            moreComment:{
                type:Boolean,
                default:false
            }
        },
        data() {
          return {
            drawer: this.moreComment,
            direction: 'btt',
          };
        },
        components:{
            Scroll,
            NavBar
        },
        methods: {
            cancel(){
                this.$emit('cancel')
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                  .then(_ => {
                    done();
                  })
                  .catch(_ => {});
              }
        },
        activated() {
            console.log(5555,this.moreComment);
        },
        watch:{
            moreComment:{
                handler(newVal,oldVal){
                    this.drawer = newVal
                }
            }
        }
    }
</script>

<style scoped>

</style>