import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Vicksburg Family Dentistry',
    meta: {
      title: 'Vicksburg Family Dentistry',
      metaTags: [
        {
          name: 'description',
          content: 'Dr. Aaron Ford and the staff at Vicksburg Family Dentistry work together as a team to provide high-quality comprehensive care. We take pride in paying close attention to each patient\'s needs.'
        },
      ]
    },
    component: Home
  },
  {
    path: '/style-guide',
    name: 'StyleGuide',
    meta: {
      title: 'Style Guide - Vicksburg Family Dentistry',
      metaTags: [
        {
          name: 'description',
          content: 'Style Guide for Vicksburg Family Dentistry'
        },
      ]
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StyleGuide.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
