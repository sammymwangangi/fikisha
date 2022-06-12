require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router'
import VehiclesIndex from './components/vehicles/VehiclesIndex'
import CustomersIndex from './components/customers/CustomersIndex'
import OrdersIndex from './components/orders/OrdersIndex'

createApp({
    components: {
        VehiclesIndex,
        CustomersIndex,
        OrdersIndex
    }
}).use(router).mount('#app')
