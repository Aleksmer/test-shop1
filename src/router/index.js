import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home'
import Error from "@/views/Error/Error";
import GoodValidation from "@/views/Error/GoodValidation/GoodValidation";
import FilmPage from "@/views/Error/films/FilmPage";
import MainPage from "@/views/Error/films/MainPage";



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'category-:category',
                name: 'category',
                children: [
                    {
                        path: 'subCategory-:subCategory',
                        name: 'subCategory',
                    }
                ]
            }
        ]
    },
    {
        path: '/goodValidation',
        name: 'goodValidation',
        component: GoodValidation,
    },
    {
        path: '/films',
        component: FilmPage,
        name: 'films'
    },
    {
        path: '/mainPage',
        component: MainPage,
        name: 'MainPage'
    },
    {
        path: '*',
        name: 'error',
        component: Error,
        props: true,
        meta: {
            text: ''
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
