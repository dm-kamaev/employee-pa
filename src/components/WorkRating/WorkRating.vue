<template>
  <div>
    <EmployeeMenu></EmployeeMenu>
     <div class="work-rating">
       <section class="work-rating__section">
         <div class="work-rating__link-wrapper">
           <a class="work-rating__link" :href="buildLinkToRatingHistory">История</a>
         </div>
         <p class="work-rating__title">
           Ваш процент оплаты:
           <span class="work-rating__title  work-rating__title--orange">{{ percent }}%</span>
         </p>
         <ul class="work-rating__list">
           <li class="work-rating__list-item">
             <p class="work-rating__text">Ваш рейтинг:
              <span class="work-rating__text  work-rating__text--bold">{{ rating }}</span>
             </p>
           </li>
           <li class="work-rating__list-item">
             <p class="work-rating__text">Cредний бал:
              <span class="work-rating__text  work-rating__text--bold">{{ feedbackRating }}</span>
             </p>
           </li>
           <li class="work-rating__list-item">
             <p class="work-rating__text">Дисциплина:
              <span class="work-rating__text  work-rating__text--bold">{{ disciplinaryRating }}%</span>
             </p>
           </li>
         </ul>
       </section>

       <section class="work-rating__section">
         <div class="work-rating__link-wrapper">
           <a class="work-rating__link"  v-scroll-to="'#rating'" href="#">Хочу больше</a>
         </div>
         <p class="work-rating__title">Ваш процент оплаты <span class="work-rating__title  work-rating__title--orange">{{ percent }}%</span> составляет:</p>
         <ul class="work-rating__list">
           <li class="work-rating__list-item">
             <p class="work-rating__text">
               <span class="work-rating__text  work-rating__text--bold">{{ percent - positionBonusPercent - stagePercent }}% </span>
               Участия в заказе
             </p>
           </li>
           <li class="work-rating__list-item">
             <p class="work-rating__text">
               <span class="work-rating__text  work-rating__text--bold"> {{ positionBonusPercent }}% </span>
               Домовой
             </p>
           </li>
           <li class="work-rating__list-item">
             <p class="work-rating__text">
               <span class="work-rating__text  work-rating__text--bold">{{ stagePercent }}% </span>
               Опять - повышение до {{ stagePercent + 1 }}% через
               <span class="work-rating__text  work-rating__text--bold">{{ daysForTheNextStagePercent }} </span>
               рабочих дней
             </p>
           </li>
         </ul>
         <div v-if=existDataForChartGeneralPercent>
           <ChartGeneralPercent :chartData=dataForChartGeneralPercent />
         </div>
         <router-link class="work-rating__link" :to="{ name: 'BecomeDomovenok', params: { employeeId: getEmployeeId }}">Как стать Домовым и получать больше?</router-link>
       </section>

       <section id="rating" class="work-rating__section">
         <div class="work-rating__link-wrapper">
           <router-link class="work-rating__link" :to="{ name: 'RatingAndPercent', params: { employeeId: getEmployeeId }}">Рейтинг и проценты</router-link>
         </div>
         <p class="work-rating__title">Ваш рейтинг:
           <span class="work-rating__title  work-rating__title--orange">{{rating}}</span>
         </p>
         <p class="work-rating__paragraph  work-rating__text">
           Следующая граница рейтинга<br>
           <span class="work-rating__text  work-rating__text--orange">{{ nextLimitOfTheRating }} = {{ nextPercentOfTheWorkOnOrder }}% оплаты</span>
         </p>
         <p class="work-rating__text  work-rating__list-title">Для этого необходимо:</p>
         <ul class="work-rating__list">
           <li class="work-rating__list-item">
             <p class="work-rating__text">Средняя оценка {{feedbackRating}}
              <a class="work-rating__link" v-scroll-to="'#you-averadge-point'" href="#">Как увеличить?</a>
             </p>
           </li>
           <li class="work-rating__list-item">
             <p class="work-rating__text">Дисциплина {{disciplinaryRating}}%
               <a class="work-rating__link" :href=buildLinkToDisciplinary>Как увеличить?</a>
             </p>
           </li>
         </ul>
         <div class="work-rating__tip">
           <p class="work-rating__text">{{ ratingRecomendation }}</p>
         </div>

         <div v-if=existDataForChartGeneralRating class="">
           <ChartGeneralRating :chartData=dataForChartGeneralRating />
         </div>

       </section>

       <section id="you-averadge-point" class="work-rating__section">
         <div class="work-rating__link-wrapper">
           <a class="work-rating__link" :href=buildLinkToRatingHistory>История</a>
         </div>
         <p class="work-rating__title">Ваш средний бал:
           <span class="work-rating__title  work-rating__title--orange">{{ feedbackRating }}</span>
         </p>
         <div class="work-rating__score">
           <ul class="work-rating__score-column">
             <li class="work-rating__score-number" :key=index v-for="(el, index) in marksQuantity">
               {{ el.markQuantity }}
             </li>
          </ul>
           <ul class="work-rating__score-column">
             <li class="work-rating__stars-wrapper" :key=index v-for="(el, index) in marksQuantity">
               <template v-if="el.mark === 5">
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
               </template>
               <template v-else-if="el.mark === 4">
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
               </template>
               <template v-else-if="el.mark === 3">
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
               </template>
               <template v-if="el.mark === 2">
                 <i class="work-rating__star"></i>
                 <i class="work-rating__star"></i>
               </template>
               <template v-if="el.mark === 1">
                 <i class="work-rating__star"></i>
               </template>
             </li>
           </ul>
         </div>

         <div class="work-rating__tip">
           <p class="work-rating__text">{{ feedbackRecomendation }}</p>
         </div>

         <div v-if=existDataForChartScore>
           <ChartScore :chartData=dataForChartScore />
         </div>

         <div class="work-rating__tip">
           <p class="work-rating__text">Персональные рекомендации для увеличения  среднеего балла - на что обратить
             внимания - комметарии для Домовенка из анкетирывания с оценками ниже “5”</p>
         </div>
       </section>
       <section class="work-rating__section">
         <div class="work-rating__link-wrapper">
           <a class="work-rating__link" :href="buildLinkToDisciplinary">Нарушения</a>
         </div>
         <p class="work-rating__title">Дисциплина:
           <span class="work-rating__title  work-rating__title--orange">{{ disciplinaryRating }}%</span>
         </p>
         <p class="work-rating__paragraph  work-rating__text">Действующих нарушений {{disciplinary.length}}</p>
         <ul class="work-rating__list">
           <li class="work-rating__list-item" :key=index v-for="(text, index) in disciplinary">
             <p class="work-rating__text">{{ text }}</p>
           </li>
         </ul>
         <div class="work-rating__tip">
           <p class="work-rating__text">{{disciplinaryRecomendation}}</p>
         </div>

         <div v-if=existDataForChartDisciplinaryOffence>
           <ChartDisciplinaryOffence :chartData=dataForChartDisciplinaryOffence />
         </div>

       </section>

     </div>
  </div>
</template>

<script>

import employeeApi from '@/api/employeeApi.js';
// import authApi from '@/api/authApi.js';
import EmployeeMenu from '@/components/EmployeeMenu/EmployeeMenu.vue';
import ChartGeneralPercent from '@/components/WorkRating/ChartGeneralPercent.vue';
import ChartGeneralRating from '@/components/WorkRating/ChartGeneralRating.vue';
import ChartScore from '@/components/WorkRating/ChartScore.vue';
import ChartDisciplinaryOffence from '@/components/WorkRating/ChartDisciplinaryOffence.vue';

export default {
  name: 'WorkRating',
  components: {
    EmployeeMenu,
    ChartGeneralPercent,
    ChartGeneralRating,
    ChartScore,
    ChartDisciplinaryOffence
  },
  data: () => ({

    rating: 0,
    percent: 0,
    positionBonusPercent: 0,

    feedbackRating: 0,
    feedbackRecomendation: '',

    stagePercent: 0,
    daysForTheNextStagePercent: 0,

    nextLimitOfTheRating: 0,
    nextPercentOfTheWorkOnOrder: 0,

    disciplinaryRating: 0,
    disciplinary: [],
    disciplinaryRecomendation: '',

    marksQuantity: [],

    ratingRecomendation: '',

    existDataForChartGeneralPercent: false,
    existDataForChartGeneralRating: false,
    existDataForChartScore: false,
    existDataForChartDisciplinaryOffence: false,

    dataForChartGeneralPercent: {},
    dataForChartGeneralRating: {},
    dataForChartScore: {},
    dataForChartDisciplinaryOffence: {}
  }),
  mounted: async function () {
    employeeApi.setId(this.$route.params.employeeId);
    try {
      this._ratingWithAdvices();

      const ratingInfo = await employeeApi.getRatingInfo();
      const details = ratingInfo.details;
      console.log('details=', details);
      if (!details) {
        return;
      }
      /**
       * { rating: "Общий процент", value: 45, dailyChanges:  [{ "date": "2015-03-23T00:00:00Z, "value": 30 }] }
       */
      const dataForChartGeneralPercent = details.find(el => el.rating === 'Общий процент');
      if (dataForChartGeneralPercent) {
        this.dataForChartGeneralPercent = dataForChartGeneralPercent;
        this.existDataForChartGeneralPercent = true;
      }

      const dataForChartGeneralRating = details.find(el => el.rating === 'Общий рейтинг');
      if (dataForChartGeneralRating) {
        this.dataForChartGeneralRating = dataForChartGeneralRating;
        this.existDataForChartGeneralRating = true;
      }

      const dataForChartScore = details.find(el => el.rating === 'Оценка');
      if (dataForChartGeneralRating) {
        this.dataForChartScore = dataForChartScore;
        this.existDataForChartScore = true;
      }

      const dataForChartDisciplinaryOffence = details.find(el => el.rating === 'Дисциплина');
      if (dataForChartDisciplinaryOffence) {
        this.dataForChartDisciplinaryOffence = dataForChartDisciplinaryOffence;
        this.existDataForChartDisciplinaryOffence = true;
      }

    } catch (err) {
      console.error(err);
    }
  },
  computed: {
    buildLinkToRatingHistory () {
      return '/staff/' + this.$store.getters.employeeId + '/rating_history';
    },
    buildLinkToDisciplinary () {
      return '/staff/' + this.$store.getters.employeeId + '/disciplinary';
    },
    getEmployeeId () {
      return this.$store.getters.employeeId;
    }
  },
  methods: {
    async _ratingWithAdvices() {
      try {
        const ratingWithAdvices = await employeeApi.getRatingWithAdvices();
        console.log('ratingWithAdvices=', ratingWithAdvices);
        if (!ratingWithAdvices) {
          return;
        }
        this.rating = ratingWithAdvices.rating;
        this.percent = ratingWithAdvices.percent;

        this.positionBonusPercent = ratingWithAdvices.positionBonusPercent;

        this.feedbackRating = ratingWithAdvices.feedbackRating;
        this.feedbackRecomendation = ratingWithAdvices.feedbackRecomendation;

        this.stagePercent = ratingWithAdvices.stagePercent;
        this.daysForTheNextStagePercent = ratingWithAdvices.daysForTheNextStagePercent;

        this.disciplinaryRating = ratingWithAdvices.disciplinaryRating;
        this.disciplinary = ratingWithAdvices.disciplinary || [];
        this.disciplinaryRecomendation = ratingWithAdvices.disciplinaryRecomendation;

        this.nextLimitOfTheRating = ratingWithAdvices.nextLimitOfTheRating;
        this.nextPercentOfTheWorkOnOrder = ratingWithAdvices.nextPercentOfTheWorkOnOrder;

        /**
         * { mark: 1, markQuantity: 100 }
         * @type {object[]}
         */
        this.marksQuantity = ratingWithAdvices.marksQuantity;

        this.ratingRecomendation = ratingWithAdvices.ratingRecomendation;

      } catch (err) {
        console.error(err);
      }
    }
  }
};

</script>

<style scoped>
  @import "../../css/variables.css";

  .work-rating {
    &__section {
      padding: 30px 20px;
      border-bottom: 1px solid #cbc9c9;

      &:last-child {
        border-bottom: none;
      }

      & > :last-child {
        margin-bottom: 0;
      }
    }

    &__link-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
    }

    &__link {
      font-family: var(--base-font-family);
      font-size: 14px;
      line-height: 19px;
      text-decoration: underline;
      color: #353535;
    }

    &__content {
      margin-bottom: -20px;
    }

    &__title {
      margin-bottom: 20px;
      font-family: var(--base-font-family);
      font-size: 18px;
      line-height: 1.3em;
      font-weight: 400;
      color: #353535;

      &--orange {
        font-weight: 600;
        color: #ff5a19;
      }
    }

    &__paragraph {
      margin-bottom: 20px;
    }

    &__text {
      font-family: var(--base-font-family);
      font-size: 16px;
      line-height: 27px;
      font-weight: 400;
      color: #353535;

      &--bold {
        font-weight: 600;
      }

      &--orange {
        color: #ff5a19;
      }
    }

    &__list-title {
      margin-bottom: 5px;
    }

    &__list {
      list-style: none;
      margin: 0 0 20px 0;
      padding: 0;
    }

    &__list-item {
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__chart {
      height: 150px;
      margin-bottom: 20px;
      background-color: lightblue;
    }

    &__tip {
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 3px;
      background-color: #e5e5e5;
    }

    &__score {
      display: flex;
      margin-bottom: 20px;
    }

    &__score-column {
      list-style: none;
      margin: 0 10px 0 0;
      padding: 0;
      text-align: right;

      &:last-child {
        margin-right: 0;
      }
    }

    &__score-number {
      text-align: right;
      min-width: 35px;
      margin-bottom: 15px;
      font-family: var(--base-font-family);
      font-size: 14px;
      line-height: 17px;
      color: #353535;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__stars-wrapper {
      display: flex;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__star {
      width: 17px;
      height: 17px;
      margin-right: 5px;
      background: url("img/star.svg") no-repeat center center;
      background-size: 17px;
    }
  }

</style>
