<template>
  <div id="app">
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
    <main-tarbar v-if="$route.meta.isShowTabbar!==true"></main-tarbar>
  </div>
</template>

<script>
  import MainTarbar from "./components/contents/mainTarBar/MainTarbar";
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  components: {
    MainTarbar
  },
  data(){
    return{
      // isRouterAlive:true
    }
  },
  methods:{
    // reload(){
    //   this.isRouterAlive = false;
    //   this.$nextTick(function () {
    //     this.isRouterAlive = true
    //   })
    // }

  }
}
</script>

<style>
  @import "assets/css/global.css";
</style>
