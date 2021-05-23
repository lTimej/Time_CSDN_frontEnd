<template>
    <div class="user-focus-fans">
        <nav-bar class="user-focus-fans-nav">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center">
                <div class="focus" :class="{'heng':flag==='focus'}"><span @click="cFocus">关注</span></div>
                <div class="fans" :class="{'heng':flag==='fans'}"><span @click="cFans">粉丝</span></div>
            </div>
            <div slot="right">
                <i class="el-icon-data-analysis"></i>
            </div>
        </nav-bar>
        <scroll
                class="content"
                ref="scrollTo"
        >
            <div class="user-focus-fans-item" v-for="(f,index) in focusList">
                <div class="head-photo">
                    <img :src="f.head_photo">
                </div>
                <div class="user-info">
                    <div><span>{{f.user_name}}</span></div>
                    <div class="intro" v-if="f.introduction"><span>{{f.introduction}}</span></div>
                    <div class="intro" v-else><span>此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused" @click="focus(f.user_id,index)">
                    <span v-if="f.mutual_focus">相互关注</span>
                    <span v-else>{{f.flag}}</span>
                </div>
            </div>

        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import {userFocus,userFans} from "network/users/focus";
    import {mapGetters} from 'vuex'
    import {clickFocus} from "common/mixins";

    export default {
        name: "UserFocusFans",
        mixins:[clickFocus],
        data(){
            return{
                isFocus:'已关注',
                user_id:0,
                page:0,
                page_num:10,
                flag:'focus',
                isClickFocus:true,
                isClickFans:true,
                focusList:[]
            }
        },
        components:{
            NavBar,
            Scroll
        },
        methods:{
            back(){
                this.$router.back()
            },
            //请求后端数据
            getUserFocusOrFans(){
                this.page += 1;
                //请求关注列表数据
                if (this.flag === 'focus'){
                    userFocus(this.page,this.page_num).then(res=>{
                        this.focusList = res.data.focus;
                        this.$store.dispatch('SaveFocusList',res.data.focus)
                    })
                }else{//请求粉丝列表数据
                    userFans(this.page,this.page_num).then(res=>{
                        this.focusList = res.data.fans;
                        this.$store.dispatch('SaveFansList',res.data.fans)
                    })
                }
            },
            //点击关注按钮触发
            cFocus(){
                this.$refs.scrollTo.refresh();
                if(!this.isClickFocus){
                    return
                }
                //初始化
                this.isClickFocus = false;
                this.isClickFans = true;
                this.page = 0;
                this.flag = 'focus';
                //是否刷新store
                if (this.focuslist.length !=0) {
                    this.focusList = this.focuslist
                }
                else {
                    this.getUserFocusOrFans();
                }
            },
            //点击粉丝按钮触发
            cFans(){
                this.$refs.scrollTo.refresh();
                if(!this.isClickFans){
                    return
                }//初始化
                this.isClickFans = false;
                this.isClickFocus = true;
                this.page = 0;
                this.flag = 'fans';

                if(this.fanslist.length != 0) this.focusList = this.fanslist;
                else this.getUserFocusOrFans();
            },
        },
        activated() {
            //判断点击关注还是粉丝按钮
            if(this.$route.params.fid == 0) this.cFocus();
            else this.cFans();
            this.$refs.scrollTo.refresh();
        },
        computed:{
            ...mapGetters({
                focuslist:"get_focus_list",
                fanslist:"get_fans_list"
            })
        }
    }
</script>

<style scoped>
    .user-focus-fans-nav{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }
    .user-focus-fans-nav i{
        font-size: 28px;
        font-weight: 500;
    }
    .user-focus-fans-nav span{
        font-size: 20px;
        font-weight: 500;
        padding: 10px;
    }
    .user-focus-fans-nav .focus{
        display: inline-block;
        height: 42px;
    }
    .user-focus-fans-nav .fans{
        display: inline-block;
        height: 42px;
    }
    .user-focus-fans-nav .heng{
        border-bottom: 3px solid #000000;
    }
    .user-focus-fans .content{
        position: absolute;
        top: 44px;
        right: 0;
        left: 0;
        overflow: hidden;
        height: calc(100% - 44px);
    }
    .user-focus-fans-item{
        margin:20px 10px;

        height: 60px;
        border-bottom: 1px solid lightgray;
    }
    .user-focus-fans-item .head-photo{
        float: left;
        padding-right: 20px;
    }
    .user-focus-fans-item .head-photo img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .user-focus-fans-item .user-info{
        float: left;
        color: #c4c4c4;
    }
    .user-focus-fans-item .user-info .intro{
        width: 230px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .user-focus-fans-item .user-info div:first-child{
        color: #000000;
    }
    .user-focus-fans-item .focused{
        float: right;
        margin: 10px 0;
        border: 1px solid lightgray;
        border-radius: 20px;
        width: 70px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        padding: 5px 10px;
        color: lightgray;
    }
</style>