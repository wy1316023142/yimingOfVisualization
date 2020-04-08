<template>
  <div :id="ids" style="width:100%;height:100%;"></div>
</template>
<script>
export default {
  props: {
    ids: {
      default: "currentBarId"
    },
    data: {
     legendData:['图例1','图例2','图例3'],
      xaisData: ["类目1", "类目2", "类目3"],
      seriesData: [
        {
          name: "当前所属名称",
          type: "bar",
          stack: "总量",
          data: [320, 302, 301]
        }
      ]
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts(this.ids,this.data.legendData,this.data.xaisData, this.data.seriesData);
    });
  },
  methods: {
    initCharts(id,legendData,xaisData, seriesData) {
      let echarts = this.$echarts;
      
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        color:['#0387ce','#a1bb38'],
        legend: {
          data: legendData
        },
        grid: {
          left: "4%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: xaisData,
          axisTick:{
                show:false
          },
          axisLabel: {
            color: "#abb3be",
            fontSize: 9,
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: "#abb3be"
            }
          }
        },
        yAxis: {
          type: "value",
          axisTick:{
                show:false
          },
          axisLabel:{
                color: "#abb3be",
                fontSize: 9,
          },
          axisLine:{
              lineStyle:{
                  color: "#abb3be"
              }
          },
          splitLine:{
            show:false
          }
        },
        series: seriesData
      };
      let myChart = echarts.init(document.getElementById(id));
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>