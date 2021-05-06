<template>
    <div>
        <div class="bgc-img">
                <img :src="individuleInfo.head_photo">
                <i class="el-icon-arrow-left" @click="back"></i>
            </div>
        <nav-bar class="info-nav" v-show="isShowNav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left" style="font-size: 32px;color: #333;"></i><img :src="individuleInfo.head_photo"><span>{{individuleInfo.user_name}}</span></div>
        </nav-bar>
        <scroll
            class="content" :class="{'contents':isChangeContent}"
            @scroll="myscroll">
            <div class="content-item">
                <individule-data />
                <main-tab-control />
                <slot></slot>
            </div>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import IndividuleData from "./IndividuleData";
    import MainTabControl from "components/contents/mainTabControl/MainTabControl";

    import {mapGetters} from 'vuex'

    import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "NavPhote",
        data() {
          return {
            isShowNav:false,
            isChangeContent:false
          };
        },
        components:{
          NavBar,
          Scroll,
          IndividuleData,
            MainTabControl
        },
        methods: {
            back(){
                this.$router.push('/profile')
            },
          myscroll(pos){
                //监听content下拉位置，改变导航栏的展现
            if(pos.y<-110){
                this.isShowNav=true;
                this.isChangeContent = true;
            }
            else{
                this.isShowNav=false;
                this.isChangeContent = false;
            }
          },
        },
        computed:{
            ...mapGetters({
                individuleInfo:'get_user_info'
            })
        }
    }
</script>

<style scoped>
    .bgc-img img{
        margin: 0 8px;
        width: 400px;
        height: 400px;
        opacity: .4;
    }
    .bgc-img i{
        font-size: 32px;
        color: #333;
        position: fixed;
        left: 11px;
        top: 7px;
    }
    .info-nav{
        color: #fff;
        background-color: #fff;;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }
    .info-nav span{
        margin-left: 15px;
        font-size: 20px;
        color: #333;
    }
    .content{
        position: absolute;
        top: 144px;
        bottom: 49px;
        left: 0;
        right: 0;
        z-index: 99;
    }
    .contents{
        position: absolute;
        overflow: hidden;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        z-index: 99;
    }
    .content .content-item{
        background-color: #fff;
    }
</style>
