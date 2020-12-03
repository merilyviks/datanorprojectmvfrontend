import Vue from 'vue'
import VueRouter from 'vue-router'
import SortedTablePlugin from "vue-sorted-table"
import checkweather from "@/views/checkweather";

Vue.use(VueRouter)
Vue.use(SortedTablePlugin);

const routes = [
    {
        path: '/',
        name: 'Pealeht',
        component: checkweather
    },
    {
        path: '/ilm',
        name: 'checkweather',
        component: checkweather
    }


]

const router = new VueRouter({
    routes
})

export default router
