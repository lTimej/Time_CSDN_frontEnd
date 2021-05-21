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
        <scroll class="content">
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
            <div class="user-focus-fans-item">
                <div class="head-photo">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="user-info">
                    <div><span>lTimej</span></div>
                    <div class="intro"><span>此用户很懒，什么都没有写此用户很懒，什么都没有写此用户很懒，什么都没有写</span></div>
                </div>
                <div class="focused">
                    <span>{{focusAndfans}}</span>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import {userFocus,UserFans} from "network/users/focus";
    import {userFans} from "../../../network/users/focus";

    export default {
        name: "UserFocus",
        data(){
            return{
                focusAndfans:'已关注',
                page:0,
                page_num:10,
                flag:'focus',
                isClickFocus:true,
                isClickFans:true
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
            getUserFocusOrFans(){
                this.page += 1;
                if (this.flag === 'focus'){
                    userFocus(this.page,this.page_num).then(res=>{
                    console.log(res);
                    })
                }else{
                    userFans(this.page,this.page_num).then(res=>{
                    console.log(res);
                    })
                }
            },
            cFocus(){
                if(!this.isClickFocus){
                    return
                }
                this.isClickFocus = false;
                this.isClickFans = true;
                this.page = 0;
                this.flag = 'focus';
                this.getUserFocusOrFans();
            },
            cFans(){
                if(!this.isClickFans){
                    return
                }
                this.isClickFans = false;
                this.isClickFocus = true;
                this.page = 0;
                this.flag = 'fans';
                this.getUserFocusOrFans();
            }
        },
        created() {
            this.cFocus();
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
        width: 60px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        padding: 5px 10px;
        color: lightgray;
    }
</style>