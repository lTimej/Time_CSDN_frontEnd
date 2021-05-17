<template>
    <div class="detail-content">
        <div v-html="article.content">
        {{article.content}}
    </div>
    </div>
</template>

<script>
    export default {
        name: "DetailContent",
        props:{
            article:{
                type:Object,
                default:function () {
                    return {}
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .detail-content{
        margin: 10px;
    }
</style>