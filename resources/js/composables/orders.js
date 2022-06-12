import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useOrders() {
    const orders = ref([])
    const order = ref([])
    const router = useRouter()
    const errors = ref('')

    const getOrders = async () => {
        let response = await axios.get('/api/orders')
        orders.value = response.data.data;
    }

    const getOrder = async (id) => {
        let response = await axios.get('/api/orders/' + id)
        order.value = response.data.data;
    }

    const storeOrder = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/orders', data)
            await router.push({name: 'orders.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }


    return {
        orders,
        order,
        errors,
        getOrders,
        getOrder,
        storeOrder,
    }
}
