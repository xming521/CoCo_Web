<template>
  <div id="chart-container"></div>

</template>

<script>
import { DualAxes } from '@antv/g2plot'
import { getApp_performance } from '@/api/application'

const data = [
  { year: '1991', value: 3, count: 10 },
  { year: '1992', value: 4, count: 4 },
  { year: '1993', value: 3.5, count: 5 },
  { year: '1994', value: 5, count: 5 },
  { year: '1995', value: 4.9, count: 4.9 },
  { year: '1996', value: 6, count: 35 },
  { year: '1997', value: 7, count: 7 },
  { year: '1998', value: 9, count: 1 },
  { year: '1999', value: 13, count: 20 }
]
export default {
  name: 'index',
  created() {
      getApp_performance().then((response) => {
        this.list = response.data.res
        this.listLoading = false
      })
  },
  mounted() {
    const dualAxes = new DualAxes('chart-container', {
      data: [data, data],
      xField: 'year',
      yField: ['value', 'count'],
      geometryOptions: [
        {
          geometry: 'line',
          color: '#5B8FF9',
        },
        {
          geometry: 'line',
          color: '#5AD8A6'
        }
      ]
    })

    dualAxes.render()
  }
}


</script>

<style scoped>

</style>
