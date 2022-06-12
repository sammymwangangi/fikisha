<template>
   <div v-if="errors">
  <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
    <p v-for="error in v" :key="error" class="text-sm">
      {{ error }}
    </p>
  </div>
</div>

    <form class="space-y-6" @submit.prevent="saveVehicle">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                <div class="mt-1">
                    <input type="text" name="type" id="type"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.type">
                </div>
            </div>

            <div>
                <label for="plateNo" class="block text-sm font-medium text-gray-700">Plate Number</label>
                <div class="mt-1">
                    <input type="text" name="plateNo" id="plateNo"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.plateNo">
                </div>
            </div>

            <div>
                <label for="plateNo" class="block text-sm font-medium text-gray-700">Status</label>

                <select id="status" name="status" autocomplete="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" v-model="form.status">
                  <option>Select status</option>
                  <option value="available">Available</option>
                  <option value="loading">Loading</option>
                  <option value="on-transit">On Transit</option>
                </select>
            </div>
        </div>

        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Create
        </button>
    </form>
</template>

<script>
import { reactive } from "vue";
import useVehicles from "../../composables/vehicles";

export default {
    setup() {
        const form = reactive({
            'type': '',
            'plateNo': '',
            'status': '',
        })

        const { errors, storeVehicle } = useVehicles()

        const saveVehicle = async () => {
            await storeVehicle({...form});
        }

        return {
            form,
            errors,
            saveVehicle
        }
    }
}
</script>
