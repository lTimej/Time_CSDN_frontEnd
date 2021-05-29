<template>
    <div>
        <div class="bgc-img" v-show="!isShowNav">
            <img :src="individuleInfo.head_photo">
            <i class="el-icon-arrow-left" @click="back"></i>
        </div>
        <nav-bar class="info-nav" v-show="isShowNav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left" style="font-size: 32px;color: #333;"></i><img :src="individuleInfo.head_photo"><span>{{individuleInfo.user_name}}</span></div>
        </nav-bar>
        <main-tab-control class="tab-control1" v-if="isShowTabControl"/>
        <scroll
            class="content"
            :class="{'contents':isChangeContent,'contentss':isChangeContents}"
            @scroll="myscroll"
            ref="scrollTo"
            :pull-upload="true"
            :pull-down-refresh="true"
            @pullingUp="loadMore"
            @pullingDown="pullingMore"
        >
            <div class="content-item">
                <individule-data />
                <main-tab-control v-show="!isShowTabControl" @changeRouter="changeRouter"/>
<!--                <slot></slot>-->
                <my-dynamic v-show="index===1" />
                <my-blog v-show="index===2" :myblogs="myblogs"/>
                <my-blink v-show="index===3" />
                <my-category v-show="index===4" />
                <my-vedio v-show="index===5" />
                <my-more v-show="index===6" />
            </div>
        </scroll>
        <bottom-toast v-show="isShowBottom" @cancel="cancel" />
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import IndividuleData from "./IndividuleData";
    import MainTabControl from "components/contents/mainTabControl/MainTabControl";
    import BottomToast from "components/contents/bottomToast/BottomToast";

    import MyDynamic from "./individuleCenter/MyDynamic";
    import MyBlog from "./individuleCenter/MyBlog";
    import MyBlink from "./individuleCenter/MyBlink";
    import MyCategory from "./individuleCenter/MyCategory";
    import MyVedio from "./individuleCenter/MyVedio";
    import MyMore from "./individuleCenter/MyMore";

    import {mapGetters} from 'vuex'
    import {getUserArticle} from "network/articles/articles";

    import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "NavPhote",
        props:{
            isBottomToast:{
                type:Boolean,
                default:false
            }
        },
        data() {
          return {
              isShowNav:false,
              isChangeContent:false,
              isChangeContents:false,
              isShowBottom:this.isBottomToast,
              isShowTabControl:false,
              curr_location:0,
              page:0,
              myblogs:[],
              index:1
          };
        },
        components:{
            NavBar,
            Scroll,
            IndividuleData,
            MainTabControl,
            BottomToast,
            MyDynamic,
            MyBlog,
            MyBlink,
            MyCategory,
            MyVedio,
            MyMore
        },
        methods: {
            back(){
                this.$router.push('/profile')
            },
            myscroll(pos){
                //监听content下拉位置，改变导航栏的展现
                  this.isShowTabControl = pos.y<-182;
                  this.isShowNav=pos.y<-110;
                  this.isChangeContent = pos.y<-110;
                  this.isChangeContents = pos.y<-182
            },
            cancel(){
             this.isShowBottom = false
            },
            get_curr_location(){
                return this.$refs.scrollTo.getScrollY();
            },
            getUserArticle(){
                this.page += 1;
                getUserArticle(this.page,10).then(res=>{
                    this.myblogs = res.data.data.articles
                    for(let i of this.myblogs){
                        i.head_photo = this.individuleInfo.head_photo
                        i.user_name = this.individuleInfo.user_name
                        i.career = this.individuleInfo.career
                    }
                    this.$store.dispatch('SaveUserArticleDetail',this.myblogs)
                })
            },
            loadMore(){
                console.log('上拉加载更多')
            },
            pullingMore(){
                console.log('下拉刷新')
            },
            changeRouter(index){
                this.index = index
            }
        },
        computed:{
            ...mapGetters({
                individuleInfo:'get_user_info',
            })
        },

        created() {
            this.getUserArticle()
        },
        //进去直接到离开后那个位置
        activated() {
            this.$refs.scrollTo.scrollTo(0,this.curr_location)
            this.$refs.scrollTo.refresh()

        },
        //离开记住当前y值
        deactivated() {
            this.curr_location = this.$refs.scrollTo.getScrollY();
        }
    }
</script>

<style scoped>
    .bgc-img img{
        /*margin: 0 8px;*/
        width: 420px;
        height: 300px;
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
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
    }
    .tab-control1{
        color: #fff;
        background-color: #fff;;
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
        z-index: 10;
    }
    .info-nav span{
        margin-left: 15px;
        font-size: 20px;
        color: #333;
    }
    .info-nav img{
        border-radius: 50%;
    }
    .content{
        position: absolute;
        top: 144px;
        bottom: 49px;
        /*height: calc(100% - 304px + 10px);*/
        left: 0;
        right: 0;
        z-index: 99;
        margin-top: 10px;
    }
    .contents{
        position: absolute;
        overflow: hidden;
        top: 32px;
        bottom: 49px;
        left: 0;
        right: 0;
        z-index: 99;
    }
    .contentss{
        top: 88px;
        bottom: 0;
        height: calc(100% - 44px - 39px - 22px);
    }
    .content .content-item{
        background-color: #fff;
    }

</style>
