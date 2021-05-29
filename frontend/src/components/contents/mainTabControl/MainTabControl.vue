<template>
    <tab-control>
        <tab-control-item :class="{'isActive':currIndex==1}"  @changeRouter="changeRouter(1)">
            <div slot="title">动态</div>
            <div slot="active_icon" class="heng" v-show="currIndex==1"></div>
        </tab-control-item>
        <tab-control-item :class="{'isActive':currIndex==2}"  @changeRouter="changeRouter(2)">
            <div slot="title">博客</div>
            <div slot="active_icon" class="heng" v-show="currIndex==2"></div>
        </tab-control-item>
        <tab-control-item :class="{'isActive':currIndex==3}"  @changeRouter="changeRouter(3)">
            <div slot="title">分类专栏</div>
            <div slot="active_icon" class="heng" v-show="currIndex==3"></div>
        </tab-control-item >
        <tab-control-item :class="{'isActive':currIndex==4}" @changeRouter="changeRouter(4)">
            <div slot="title">直播</div>
            <div slot="active_icon" class="heng" v-show="currIndex==4"></div>
        </tab-control-item>
        <tab-control-item :class="{'isActive':currIndex==5}"  @changeRouter="changeRouter(5)">
            <div slot="title">Blink</div>
            <div slot="active_icon" class="heng" v-show="currIndex==5"></div>
        </tab-control-item>
        <tab-control-item :class="{'isActive':currIndex==6}"  @changeRouter="changeRouter(6)">
            <div slot="title">更多</div>
            <div slot="active_icon" class="heng" v-show="currIndex==6"></div>
        </tab-control-item>
    </tab-control>
</template>

<script>
    import TabControl from "components/common/tabControl/TabControl";
    import TabControlItem from "components/common/tabControl/TabControlItem";
    export default {
        name: "MainTabControl",
        data(){
            return{
                currIndex:1
            }

        },
        components:{
            TabControl,
            TabControlItem
        },
        methods:{
            changeRouter(index){
                this.currIndex = index
                this.$emit('changeRouter',index)
            }
        }
    }
</script>

<style scoped>
    .heng{
        border: 1px solid #020202;
    }
    .isActive{
        color: #333;
        font-weight: 600
    }
</style>