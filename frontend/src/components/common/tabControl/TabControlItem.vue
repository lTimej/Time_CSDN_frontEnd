<template>
    <div class="tab-control-item" @click="changeRouter">
        <div :style="ActiveStyle" :class="{'ActiveColor1':isActive}"><slot name="title"></slot></div>
        <div v-show="isActive"><slot name="active_icon"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabControlItem",
         props:{
            path:{
                type:String
            },
            ActiveColor:{
                type:String,
                default:'lightgray'
            }
        },
        data(){
            return{
                // isActive:false
            }
        },
        computed:{
            isActive(){
                // return this.$route.path.indexOf(this.path) !== -1;
                return this.$store.state.curr_path === this.path
            },
            ActiveStyle(){
                return this.isActive ?{color:this.ActiveColor}:{}
            }
        },
        methods:{
            changeRouter(){
                // this.$router.push(this.path).catch(()=>{})
                this.$store.dispatch('SetPath',this.path)
            }

        }
    }
</script>

<style scoped>
    .tab-control-item{
        flex: 1;
        height: 39px;
        line-height: 39px;
        font-size: 17px;
        text-align: center;
        color: #b0b0b0;
    }
    .ActiveColor1{
        color: #333;
        font-weight: 600;
      }
</style>