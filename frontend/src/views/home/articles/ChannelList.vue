<template>
    <div class="channel">
        <nav-bar class="channel-nav">
            <div slot="left" @click="back"><i class="el-icon-close" style="color: #000000;font-size: 24px;padding: 10px 10px 10px 5px"></i></div>
            <div slot="center"><span style="font-size: 18px;color: #000000;font-weight: 600">所有频道</span></div>
        </nav-bar>
        <nav-bar class="my-channel">
            <div slot="left" ><span>我的频道</span></div>
            <div slot="right" class="btn" @click="editConfirm"><el-button type="danger" round size="mini">{{btn}}</el-button></div>
        </nav-bar>
        <div class="my-channel-item">
            <div class="outer-frame c" v-for="channel in defaultChannel">
                <span>{{channel.channel_name}}</span>
            </div>
            <div class="outer-frame" v-for="(channel,index) in mychannels" @touchstart="startEdit(channel.id)" @touchend="endEdit(channel.id)">
                <span>{{channel.channel_name}}</span>
                <div class="cancel-channel" v-show="isDelBtn" @click="cancelChannel(index)"><i class="el-icon-error"></i></div>
            </div>
        </div>
        <nav-bar class="more-channel">
            <div slot="left" ><span>更多频道</span></div>
        </nav-bar>
        <div class="my-channel-item all-channel">
            <div class="outer-frame" v-for="(channel,index) in channels" @click="addChannel(index)">
                <i class="el-icon-plus"></i>
                <span>{{channel.channel_name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {allChannels,addUserChannel,updateUserChannel} from "network/articles/channels";
    import {mapGetters} from 'vuex'

    export default {
        name: "ChannelList",
        data(){
            return{
                btn:"编辑",
                // mychannels:[],
                channels:[],
                isDelBtn:false,
                timer:0
            }
        },
        components:{
            NavBar
        },
        methods:{
            back(){
                this.$router.back()
            },
            getAllChannels(){
                allChannels().then(res=>{
                    for(let n of res.data.data.channels){
                        if(n.id>0){
                            this.channels.push(n);
                        }
                    }
                })
            },
            startEdit(id){
                this.timer = setTimeout(()=>{
                    this.timer = 0;
                    this.isDelBtn = true;
                    this.btn = '确定'
                },1500)
            },
            endEdit(id){
                clearTimeout(this.timer);
                if (this.timer!=0){

                }
            },
            editConfirm(){
                if(this.btn === '编辑'){
                    this.isDelBtn = true;
                    this.btn = '确定'
                }else{
                    this.isDelBtn = false;
                    this.btn = '编辑'
                }
            },
            //添加频道
            addChannel(index){
                addUserChannel(this.channels[index].id,this.channels[index].channel_name).then(res=>{
                    console.log("添加匿名用户",res);
                    if(res.status == 201){
                        this.mychannels.push(this.channels[index]);
                        this.channels.splice(index,1)
                    }else{
                        return;
                    }
                });
            },
            //取消频道
            cancelChannel(index){
                console.log(this.mychannels[index]);
                updateUserChannel(this.mychannels[index].id).then(res=>{
                    console.log(res);
                })
                this.channels.push(this.mychannels[index]);
                this.mychannels.splice(index,1)

            }
        },
        created() {
            this.getAllChannels();
        },
        computed:{
            ...mapGetters({
                defaultChannel:'get_default_channels',
                mychannels:"get_user_channels"
            })
        }
    }
</script>

<style scoped>
    .channel-nav{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .my-channel{
        position: fixed;
        left: 0;
        right: 0;
        top: 44px;
        z-index: 9;
    }

    .my-channel .btn{
        height: 30px;
        color: #fff;
    }
    .my-channel .btn >>> .el-button{
        color: #fff;
    }
    .my-channel-item{
        margin-top: 95px;
        width: 100%;
    }
    .my-channel-item .outer-frame{
        position: relative;
        display: inline-block;
        border: 1px solid #333;
        border-radius: 30px;
        width: 21%;
        height: 38px;
        line-height: 40px;
        text-align: center;
        margin:10px 7px;
        font-size: 15px;
        font-weight: 600;
        color: #000000;
    }
    .my-channel-item .c{
        color: lightgray;
    }
    .my-channel-item .outer-frame i{
        font-size: 15px;
        font-weight: 600;
        color: #000000;
        padding-right: 5px;
    }
    .all-channel{
        margin-top: 0;
    }
    .cancel-channel{
        position: absolute;
        left: 68px;
        right: 0;
        /*top: 0;*/
        bottom: 49px;
        width: 1px;
        height: 1px;
    }
    .outer-frame .cancel-channel i{
        font-size: 24px;
        color: rgba(51, 51, 51, 0.6);
    }
</style>