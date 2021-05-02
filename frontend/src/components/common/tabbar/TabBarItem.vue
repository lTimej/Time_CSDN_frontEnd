<template>
    <div class="tabbar-item" @click="changeRouter">
        <div v-if="!isActive"><slot name="icon"></slot></div>
        <div v-else><slot name="active_icon"></slot></div>
        <div :style="ActiveStyle"><slot name="title"></slot></div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {
        inject:['reload'],
        name: "TarBarItem",
        props:{
            path:{
                type:String
            },
            ActiveColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{
                new_path:this.path
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.new_path) !== -1;
            },
            ActiveStyle(){
                return this.isActive ?{color:this.ActiveColor}:{}
            }
        },
        methods:{
            changeRouter(){
                if(this.new_path === "/unloginprofile" || this.new_path === "/profile"){
                    let token = window.localStorage.getItem('token');
                    if(token) {
                        this.new_path = '/profile';
                        this.$router.push(this.new_path).catch(() => {
                        });
                        return;
                    }
                    this.new_path= '/unloginprofile';
                    this.$router.push(this.new_path).catch(()=>{});
                    return;
                }
                this.$router.replace(this.new_path).catch(()=>{});


                // this.reload();

            }
        },
        watch:{
            path:{
                handler(newValue,oldValue){
                    this.new_path = newValue
                },
                deep:true,
                immediate:true
            }
        }
    }
</script>

<style scoped>
    .tabbar-item{
        flex: 1;
        height: 49px;
        font-size: 14px;
        text-align: center;
    }
    .tabbar-item img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: 2px;
        margin-bottom: 3px;
    }
    .ActiveColor{
    color: red;
  }
</style>