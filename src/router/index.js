import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/FullPage')
    },
    {

        path: '/admin',
        name: 'Admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/AdminPanel'),
      children: [
        {
          path: '/alreadyAnswered',
          name: 'alreadyAnswered',
        component: () =>
            import('../components/workspace/alreadyAnswered')
        },
        {
          path: '/bonus',
          name: 'bonus',
          component: () =>
            import('../components/workspace/bonus')
        },
        {
          path: '/flows',
          name: 'flows',
          component: () =>
            import('../components/workspace/flows')
        },
        {
          path: '/statistic',
          name: 'statistic',
          component: () =>
            import('../components/workspace/statistic')
        },
      ]
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router