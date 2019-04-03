import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import { TokenService } from './_services/storage.service'

import Authentication from './views/Authentication.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
      meta: {
        public: false,
        onlyWhenLoggedOut: false
      }
    },
    {
      path: '/login',
      component: Authentication,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/forgot',
      component: () => import(/* webpackChunkName: "Forgot" */ './views/ForgotPassword.vue'),
      meta: {
        public: true,
        onlyWhenLoggedOut: false
      }
    },
    {
      path: '/reset/:token',
      component: () => import(/* webpackChunkName: "Forgot" */ './views/ResetPassword.vue'),
      meta: {
        public: true,
        onlyWhenLoggedOut: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public) || false
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut) || false
  const loggedIn = !!TokenService.getToken()

  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: { method: 'login', redirect: to.fullPath } // Store the full path to redirect the user to after login
    })
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next()
})

export default router
