<template>
   <div v-if="errors">
  <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
    <p v-for="error in v" :key="error" class="text-sm">
      {{ error }}
    </p>
  </div>
</div>

    <form class="space-y-6" @submit.prevent="saveOrder">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="plateNo" class="block text-sm font-medium text-gray-700">Status</label>

                <select id="status" name="status" autocomplete="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" v-model="form.status">
                  <option>Select status</option>
                  <option value="pending">Pending</option>
                  <option value="loading">Loading</option>
                  <option value="dispatched">Dispatched</option>
                  <option value="delivered">Delivered</option>
                </select>
            </div>

            <div>
                <label for="placedOn" class="block text-sm font-medium text-gray-700">Placed On</label>
                <div class="mt-1">
                    <input type="date" name="placedOn" id="placedOn"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.placedOn">
                </div>
            </div>

            <div>
                <label for="total" class="block text-sm font-medium text-gray-700">Total</label>
                <div class="mt-1">
                    <input type="text" name="total" id="total"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.total">
                </div>
            </div>

            <div>
                <label for="products" class="block text-sm font-medium text-gray-700">Products</label>
                <div class="mt-1">
                    <input type="text" name="products" id="products"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.products">
                </div>
            </div>
            <div>
                <label for="customer_id" class="block text-sm font-medium text-gray-700">Customer</label>

                <select id="customer_id" name="customer_id" autocomplete="customer_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" v-model="form.customer_id">
                  <option>Select customer...</option>

                  <option v-for="item in customers" :key="item.id" value="item">{{item}}</option>
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
import useOrders from "../../composables/orders";
import useCustomers from "../../composables/customers";
import { onMounted } from "vue";

export default {
    setup() {
        const form = reactive({
            'status': '',
            'customer_id': '',
            'placedOn': '',
            'total': '',
            'products': '',
        })

        const { errors, storeOrder } = useOrders()

        const saveOrder = async () => {
            await storeOrder({...form});
        }

        const { customers, getCustomers } = useCustomers()

        onMounted(getCustomers)

        return {
            form,
            errors,
            saveOrder,
            customers
        }
    }
}
</script>
