<template>
  <div>
    <ButtonBack></ButtonBack>
     <table>
      <tr>
        <th>Процент</th>
        <th>Рейтинг</th>
       <tr>
         <td>  57%</td>
         <td>0,985</td>
       </tr>
       <tr>
         <td>     54%</td>
         <td>0,975</td>
       </tr>
       <tr>
         <td>     51%</td>
         <td>0,96</td>
       </tr>
       <tr>
         <td>     48%</td>
         <td>0,82</td>
       </tr>
       <tr>
         <td>     45%</td>
         <td>0,6</td>
       </tr>
     </table>
  </div>
</template>

<script>

import ButtonBack from '@/components/ButtonBack/ButtonBack.vue';

export default {
  name: 'RatingAndPercent',
  components: {
    ButtonBack
  },
  data: () => ({

  }),
  computed: {

  },
  methods: {}
};

</script>

<style scoped>
  @import "../../css/variables.css";
  table {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {background-color: #f2f2f2;}
</style>
