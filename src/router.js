import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    //  {
    //   path: '/Construction',
    //   name: 'Construction',
    //   component: () => import(/* webpackChunkName: "about" */ './views/DecorateConstruction.vue')
    // },{
    //   path: '/Warn',
    //   name: 'Warn',
    //   component: () => import(/* webpackChunkName: "about" */ './views/EarlyWarnSystem.vue')
    // },{
    //   path: '/Flood',
    //   name: 'Flood',
    //   component: () => import(/* webpackChunkName: "about" */ './views/FloodControlSituation.vue')
    // },{
    //   path: '/Operating',
    //   name: 'Operating',
    //   component: () => import(/* webpackChunkName: "about" */ './views/OperatingCondition.vue')
    // },
   {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "about" */ './views/Map3D.vue')
  }
  ]
})
