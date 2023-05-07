<template>
    <div class="order-sending">
        <order-list-temp :my_orders="my_orders"/>
    </div>
</template>

<script>
    import OrderListTemp from 'views/order/orderList/OrderListTemp';
    export default {
        name: "Sending",
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
   .order-sending{
    height: 100px;
    /* background-color: red; */
   }
</style>