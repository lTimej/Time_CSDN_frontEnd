<template>
    <div class="order-recving">
        <order-list-temp :my_orders="my_orders"/>
    </div>
</template>

<script>
    import OrderListTemp from 'views/order/orderList/OrderListTemp';
    export default {
        name: "Recving",
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
   .order-recving{
    height: 100px;
    /* background-color: red; */
   }
</style>