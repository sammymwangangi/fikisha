import { createRouter, createWebHistory } from "vue-router";

import VehiclesIndex from '../components/vehicles/VehiclesIndex'
import VehiclesCreate from '../components/vehicles/VehiclesCreate'
import VehiclesEdit from '../components/vehicles/VehiclesEdit'

import CustomersIndex from '../components/customers/CustomersIndex'
import CustomersCreate from '../components/customers/CustomersCreate'
import CustomersEdit from '../components/customers/CustomersEdit'

import OrdersIndex from '../components/orders/OrdersIndex'
import OrdersCreate from '../components/orders/OrdersCreate'

const routes = [

    {
        path: '/dashboard',
        name: 'vehicles.index',
        component: VehiclesIndex
    },
    {
        path: '/vehicles/create',
        name: 'vehicles.create',
        component: VehiclesCreate
    },
    {
        path: '/vehicles/:id/edit',
        name: 'vehicles.edit',
        component: VehiclesEdit,
        props: true
    },

    {
        path: '/customers',
        name: 'customers.index',
        component: CustomersIndex
    },
    {
        path: '/customers/create',
        name: 'customers.create',
        component: CustomersCreate
    },
    {
        path: '/customers/:id/edit',
        name: 'customers.edit',
        component: CustomersEdit,
        props: true
    },

    {
        path: '/orders',
        name: 'orders.index',
        component: OrdersIndex
    },
    {
        path: '/orders/create',
        name: 'orders.create',
        component: OrdersCreate
    }


]

export default createRouter({
    history: createWebHistory(),
    routes
})
