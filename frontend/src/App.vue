<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
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
  },
  created() {//保存store至sessionStorage中
    if(sessionStorage.getItem('store')){
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('store'))))
    }
    window.addEventListener('beforeunload',()=>{
      sessionStorage.setItem('store',JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
  @import "assets/css/global.css";
</style>
