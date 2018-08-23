import Vue from 'vue';
import Router from 'vue-router';
import WorkRating from '@/components/WorkRating/WorkRating.vue';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/staff/:employeeId/rating2',
      name: 'WorkRating',
      component: WorkRating,
      auth: true,
    }
  ]
});

router.beforeEach(async (componentTo, from, next) => {
  // console.log('from=', from);
  // console.log('to=', componentTo);
  next();
});


export default router;
