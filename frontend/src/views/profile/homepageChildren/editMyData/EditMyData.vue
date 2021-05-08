<template>
    <div>
        <nav-bar class="edit-nav" >
            <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
            <div slot="center"><span>编辑个人资料</span></div>
        </nav-bar>
        <scroll class="content">
            <div class="my-avatar">
                <img :src="individuleInfo.head_photo"><input type="file"></input>
                <div class="avatar-camera"><i class="el-icon-camera"></i></div>
                <p>点击更换头像</p>
            </div>
            <edit-my-data-item :individuleInfo="individuleInfo" />
            <div class="upload-more">

            </div>
        </scroll>

    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import EditMyDataItem from "./EditMyDataItem";
    import {mapGetters} from "vuex";

    export default {
        name: "MyResume",
        data() {
          return {

          };
        },
        components:{
            NavBar,
            Scroll,
            EditMyDataItem
        },
        methods:{
            back(){
                this.$router.back();
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
    .edit-nav{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        font-size: 20px;
        color: #000000;
    }
    .content{
        position: absolute;
        top: 44px;
        /*bottom: 49px;*/
        height: calc(100% - 44px);
        left: 0;
        right: 0;
        overflow: hidden;
    }
    .my-avatar{
        text-align: center;
        margin: 30px 0;

    }
    .my-avatar img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .avatar-camera{
        position: absolute;
        font-size: 32px;
        top: 35px;
        color: #f3f3f3;
        right: 190px;
    }
    .my-avatar input{
        position: absolute;
        left: 172px;
        top: 45px;
        opacity: 0;
        z-index: 9;
    }
    .my-avatar p{
        font-size: 18px;
        color: #000000;
    }
    .upload-more{
        height: 100px;
    }
</style>