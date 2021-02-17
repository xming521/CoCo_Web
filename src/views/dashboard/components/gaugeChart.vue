<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import * as echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'

const animationDuration = 500
var option
option = {
  series: [{
    type: 'gauge',
    startAngle: 220,
    endAngle: -400,
    min: 0,
    max: 100,
    splitNumber: 4,
    itemStyle: {
      color: '#58D9F9',
      shadowColor: 'rgba(0,138,255,0.45)',
      shadowBlur: 10,
      shadowOffsetX: 2,
      shadowOffsetY: 2
    },
    progress: {
      show: true,
      width: 10
    },
    pointer: {
      icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
      length: '75%',
      width: 10,
      offsetCenter: [0, '5%']
    },
    axisLine: {
      roundCap: true,
      lineStyle: {
        width: 10
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      length: 5,
      lineStyle: {
        width: 3,
        color: '#999'
      }
    },
    axisLabel: {
      distance: 15,
      color: '#999',
      fontSize: 15
    },
    title: {
      show: false
    },
    detail: { show: false }
  }],
  dataset: {
    source: [[56]]
  },
  grid: {
    left: '75%'
  }

}
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '25vh'
    },
    height: {
      type: String,
      default: '25vh'
    },
    chart_data: {
      type: Number,
      required: true
    }
  },
  watch: {
    chart_data: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el)
      this.chart.setOption(option)
    },
    setOptions(val) {
      this.chart.setOption({
        dataset: {
          source: [[val]]
        }
      })
    }
  }
}
</script>
