import HomeVue from "./components/HomeVue.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter,createWebHistory} from 'vue-router'
import LoginVue from "./components/LoginVue.vue"
import AddVue from "./components/AddVue.vue"
import UpdateVue from "./components/UpdateVue.vue"
import AddMenu from "./components/AddMenu.vue"
const routes = [
    {
        name:'HomeVue',
        component:HomeVue,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginVue',
        component:LoginVue,
        path:'/login'
    },
    {
        name:'AddVue',
        component:AddVue,
        path:'/add'
    },
    {
        name:'UpdateVue',
        component:UpdateVue,
        path:'/update/:id'
    },
    {
        name:'AddMenu',
        component:AddMenu,
        path:'/addMenu/:id'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router