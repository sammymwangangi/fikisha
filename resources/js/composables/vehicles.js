import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useVehicles() {
    const vehicles = ref([])
    const vehicle = ref([])
    const router = useRouter()
    const errors = ref('')

    const getVehicles = async () => {
        let response = await axios.get('/api/vehicles')
        vehicles.value = response.data.data;
    }

    const getVehicle = async (id) => {
        let response = await axios.get('/api/vehicles/' + id)
        vehicle.value = response.data.data;
    }

    const storeVehicle = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/vehicles', data)
            await router.push({name: 'vehicles.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateVehicle = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/vehicles/' + id, vehicle.value)
            await router.push({name: 'vehicles.index'})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroyVehicle = async (id) => {
        await axios.delete('/api/vehicles/' + id)
    }


    return {
        vehicles,
        vehicle,
        errors,
        getVehicles,
        getVehicle,
        storeVehicle,
        updateVehicle,
        destroyVehicle
    }
}
