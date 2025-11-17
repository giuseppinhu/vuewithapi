import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import Edit from '@/views/Edit.vue'

const AdminAuth = (to, from, next) => {
  if (localStorage.getItem('token') != undefined) {
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }

    axios
      .post('http://localhost:8080/validate', {}, tokenConfig)
      .then((res) => {
        console.log(res.response)
        next()
      })
      .catch((error) => {
        console.log(error.response)
        next('/login')
      })
  } else {
    next('/login')
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/admin/users',
      component: Users,
      beforeEnter: AdminAuth,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/admin/edit/:id',
      name: 'edit',
      component: Edit,
      beforeEnter: AdminAuth,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})

export default router
