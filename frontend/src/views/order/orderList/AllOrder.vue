<template>
    <div class="all-order">
        <order-list-temp :my_orders="my_orders"/>
    </div>
</template>

<script>
    import OrderListTemp from 'views/order/orderList/OrderListTemp';
    export default {
        name: "AllOrder",
        props:{
            my_orders:{
                type: Array,
                default: () => []
            }
        },
        components:{
            OrderListTemp,
        },
        data(){
            return{
                num:0,
            }
        },
        methods:{
            // toDesc(){
            //     this.$router.push("/order/desc")
            // }
        },
        activated(){
            console.log(this.my_orders,"哈哈哈哈啊哈")
        }
    }
</script>

<style scoped>
   .order-paying{
        height: 100%;
        /* background-color: red; */
   }
</style>