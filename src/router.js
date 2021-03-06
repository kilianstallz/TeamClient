import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import { TokenService } from './_services/storage.service'

import Authentication from './views/Authentication.vue'

// Pages
import Home from './pages/Home.vue'
import Team from './pages/Team.vue'
import Profile from './pages/Profile.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Dashboard,
      meta: {
        public: false,
        onlyWhenLoggedOut: false
      },
      children: [
        {
          path: '/home',
          name: 'Dashboard',
          component: Home
        },
        {
          path: '/team',
          name: 'TeamPage',
          component: Team
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        }
      ]
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "FirstTimeSetup" */ './views/FirstTimeSetup.vue'),
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
