<template>
  <div class="wrapper" ref="wrapper">
    <div class="contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    data(){
      return {
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: true
      },
      pullDownRefresh:{
        type:Boolean,
        default: true
      }
    },
    mounted() {
      //实例化对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad,
        pullDownRefresh:this.pullDownRefresh

      });
      //监听滚拉位置
      this.scroll.on("scroll",(pos)=>{
        // console.log(pos);
        this.$emit("scroll",pos)
      });
      //上拉加载更多
      this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp")

      });
      this.scroll.on("pullingDown",()=>{
        this.$emit("pullingDown")
      })
    },
    methods:{
      scrollTo(x,y,time=1000){//监听x,y
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp()
      {//科继续上拉更多，默认没有就只能上拉一次
        this.scroll && this.scroll.finishPullUp();
      },
      finishPullDown(){
        this.scroll && this.scroll.finishPullDown();
      },
      refresh()
      {//刷新
        this.scroll && this.scroll.refresh();
      },
      getScrollY()
      {//获取y轴位置
        return this.scroll?this.scroll.y:0
      }
    }
  }
</script>

<style scoped>

</style>
