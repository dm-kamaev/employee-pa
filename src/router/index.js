import Vue from 'vue';
import Router from 'vue-router';
import WorkRating from '@/components/WorkRating/WorkRating.vue';
import RatingAndPercent from '@/components/RatingAndPercent/RatingAndPercent.vue';
import BecomeDomovenok from '@/components/BecomeDomovenok/BecomeDomovenok.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'WorkRating',
      path: '/staff/:employeeId/rating2',
      component: WorkRating
    },
    {
      name: 'RatingAndPercent',
      path: '/staff/:employeeId/rating2/rating_and_percent',
      component: RatingAndPercent
    },
    {
      name: 'BecomeDomovenok',
      path: '/staff/:employeeId/rating2/become_domovenok',
      component: BecomeDomovenok
    }
  ]
});

router.beforeEach(async (componentTo, from, next) => {
  console.log('from=', from);
  console.log('to=', componentTo);
  next();
});

export default router;
