<template>
    <div class="tab-control">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabControl"
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        box-shadow: 0 -1px 1px #fff;
        margin-top: 12px;
    }
</style>