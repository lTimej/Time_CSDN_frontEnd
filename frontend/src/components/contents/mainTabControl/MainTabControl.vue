<template>
    <tab-control>
        <tab-control-item  path="/my/dynamic" ActiveColor="#020202">
            <div slot="title">动态</div>
            <div slot="active_icon" class="heng"></div>
        </tab-control-item>
        <tab-control-item path="/my/blog" ActiveColor="#020202">
            <div slot="title">博客</div>
            <div slot="active_icon" class="heng"></div>
        </tab-control-item>
        <tab-control-item path="/my/category" ActiveColor="#020202">
            <div slot="title">分类专栏</div>
            <div slot="active_icon" class="heng"></div>
        </tab-control-item >
        <tab-control-item path="/my/vedio" ActiveColor="#020202">
            <div slot="title">直播</div>
            <div slot="active_icon" class="heng"></div>
        </tab-control-item>
        <tab-control-item path="/my/blink" ActiveColor="#020202">
            <div slot="title">Blink</div>
            <div slot="active_icon" class="heng"></div>
        </tab-control-item>
        <tab-control-item path="/my/more" ActiveColor="#020202">
            <div slot="title">更多</div>
            <div slot="active_icon" class="heng"></div>
        </tab-control-item>
    </tab-control>
</template>

<script>
    import TabControl from "components/common/tabControl/TabControl";
    import TabControlItem from "components/common/tabControl/TabControlItem";
    export default {
        name: "MainTabControl",
        components:{
            TabControl,
            TabControlItem
        }
    }
</script>

<style scoped>
    .heng{
        border: 1px solid #020202;
    }
</style>