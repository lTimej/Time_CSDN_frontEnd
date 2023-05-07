<template>
    <div class="order-paying">
        <order-list-temp :my_orders="my_orders"/>
    </div>
</template>

<script>
    import OrderListTemp from 'views/order/orderList/OrderListTemp';
    export default {
        name: "Paying",
        props:{
            my_orders:{
                type: Array,
                default: () => []
            }
        },
        components:{
            OrderListTemp
        },
        data(){
            return{
                
            }
        },
        methods:{
            
        },
        activated(){
            
        }
    }
</script>

<style scoped>
   .order-paying{
    height: 100%;
    /* background-color: red; */
   }
</style>