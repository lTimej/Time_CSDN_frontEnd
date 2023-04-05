<template>
    <div class="swiper-slide">
        <slot></slot>
    </div>
</template>
    
<script>
    import "swiper/dist/css/swiper.css";
    export default {
    name: "",
    data() {
        return {};
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>


<style scoped>
.swiper-slide img {
    width: 100%;
    object-fit: cover;
}
</style>