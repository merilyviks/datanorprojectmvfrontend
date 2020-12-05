import Vue from 'vue'
import VueRouter from 'vue-router'
import SortedTablePlugin from "vue-sorted-table"
import checkweather from "@/views/checkweather";
import mainsite from "@/views/mainsite";

Vue.use(VueRouter)
Vue.use(SortedTablePlugin);

const routes = [
    {
        path: '/',
        name: 'Pealeht',
        component: mainsite
    },
    {
        path: '/ilm',
        name: 'Ilm',
        component: checkweather
    }


]

const router = new VueRouter({
    routes
})

export default router
