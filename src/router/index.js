import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import WorkRating from '@/components/WorkRating/WorkRating.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WorkRating',
      component: WorkRating
    }
  ]
})
