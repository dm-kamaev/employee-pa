<template>
  <section class="work-rating__section">

    <ButtonBack/>

    <h1 class=title-h1>«Как стать Домовым и зарабатывать больше»</h1>
    <h2 class=title-h2>Хочешь увеличить свой заработок?</h2>
    <h2 class=title-h2>Нравится делиться опытом и обучать Домовят?</h2>

    <p>Стань Домовым и будешь зарабатывать больше – средний заработок Домового 60 тысяч рублей в месяц!</p>
    <ul>
      <li>+5% к текущему проценту от заказов</li>
      <li>Доплата за каждого Домовёнка и Стажёра на заказе</li>
    </ul>
    Чтобы стать Домовым, напишите обращение (выберите тему обращения <span class=highlight>«Другое»</span>, в обращении напишите <span class=highlight>«Хочу стать Домовым»</span>)
    Написать <a class="work-rating__link" :href=buildLinkToConversation>Обращение</a>

  </section>
</template>

<script>

import ButtonBack from '@/components/ButtonBack/ButtonBack.vue';

export default {
  name: 'BecomeDomovenok',
  components: {
    ButtonBack
  },
  data: () => ({

  }),
  computed: {
    buildLinkToConversation () {
      return `/staff/${this.$store.getters.employeeId}/conversations`;
    }
  },
  methods: {}
};

</script>

<style scoped>
  @import "../../css/variables.css";
  .title-h1{
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    font-size: 150%;
  }
  .title-h2{
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    font-style: italic;
    line-height: 1.2;
    color: inherit;
    font-size: 140%;
  }
  .highlight{
    font-weight: 600;
  }
  .work-rating {
    &__section {
      padding: 30px 20px;
      border-bottom: 1px solid #cbc9c9;
    }

    &__link-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
    }

    &__link {
      margin: 0 auto 20px auto;
      font-family: var(--base-font-family);
      font-size: 14px;
      line-height: 19px;
      text-decoration: underline;
      color: #353535;
    }
  }
</style>
