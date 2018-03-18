import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../pages/Menu.vue'
import About from '../pages/About.vue'
import Breakfast from '../pages/Breakfast.vue'
import Snack1 from '../pages/Snack1.vue'
import Lunch from '../pages/Lunch.vue'
import Snack2 from '../pages/Snack2.vue'
import Dinner from '../pages/Dinner.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/breakfast',
      name: 'breakfast',
      component: Breakfast
    },
    {
      path: '/snack1',
      name: 'snack1',
      component: Snack1
    },
    {
      path: '/lunch',
      name: 'lunch',
      component: Lunch
    },
    {
      path: '/snack2',
      name: 'snack2',
      component: Snack2
    },
    {
      path: '/dinner',
      name: 'dinner',
      component: Dinner
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})