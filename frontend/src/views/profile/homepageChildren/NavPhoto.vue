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
                <ul>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
                <li>hello world</li>
            </ul>
            </div>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import IndividuleData from "./IndividuleData";

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
          IndividuleData
        },
        methods: {
            back(){
                this.$router.back()
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
        width: 415px;
        height: 415px;
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
        overflow: hidden;
        top: 44px;
    }
    .content .content-item{
        background-color: #fff;
    }
</style>
