<template>
  <div>
    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
  </div>
</template>

<script>

import VueHighcharts from 'vue2-highcharts';
import moment from 'moment';

export default{
  name: 'ChartGeneralRating',
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: {}
    };
  },
  mounted: function () {
    const lineCharts = this.$refs.lineCharts;
    lineCharts.delegateMethod('showLoading', 'Загрузка...');
    const chartData = this.chartData;

    const dataForX = chartData.dailyChanges.map(el => moment(el.date).format('DD.MM'));

    this.options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        title: {
          text: 'Дата'
        },
        categories: dataForX
        // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          // 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Рейтинг'
        },
        labels: {
          // formatter: function () {
          //   return this.value;
          // }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: []
    };

    const dataForY = chartData.dailyChanges.map(el => {
      // return parseFloat(el.value, 10);
      return random_digit({ min: 1, max: parseFloat(el.value) });
    });
    lineCharts.addSeries({
      name: 'Общий рейтинг',
      marker: {
        symbol: 'square'
      },
      data: dataForY
    });
    lineCharts.hideLoading();
  },
  methods: {}
};

function random_list_digit(number, option) {
  var res = [];
  var min = option.min || 0;
  var max = option.max;
  for (var i = 0; i < number; i++) {
    res.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return res;
};
// console.log(exports.list_digit(2, { max: 110 }));


// option { max , min }
// return 17
function random_digit(option) {
  return random_list_digit(1, option)[0];
};
</script>
