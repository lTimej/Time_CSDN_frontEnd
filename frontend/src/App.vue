<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tarbar></main-tarbar>
  </div>
</template>

<script>
  import MainTarbar from "./components/contents/mainTarBar/MainTarbar";
export default {
  name: 'App',
  components: {
    MainTarbar
  }
}
</script>

<style>
  @import "assets/css/global.css";
</style>
