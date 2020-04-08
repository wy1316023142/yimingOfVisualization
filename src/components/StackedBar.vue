<template>
  <div :id="ids" style="width:100%;height:100%;"></div>
</template>
<script>
export default {
  props: {
    ids: {
      default: "currentBarId"
    },
    legendData: {
      default: ["图例1", "图例1", "图例1"]
    },
    data: {
      default: function() {
        return [[10, 20, 10], [30, 40, 20], [90, 709, 45]];
      }
    },
    xaisData: {
      default: ["类目1", "类目2", "类目3"]
    }
  },
  data() {
    return {};
  },
  watch:{
      data(newVal,oldVal){
        this.data = newVal;
        this.initCharts();
      },
      legendData(newLegend,oldLegend){
          this.legendData = newLegend;
      }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts();
    });
  },
  methods: {
    initCharts() {
      let echarts = this.$echarts;
      let  seriesData = [];
      let colorStart = ['#28cd99', "#fcfe06", "#0385c9", "#90c80a"],
              colorEnd=["rgba(40,205,153,0)",'#b9cc37','#0385c9','#90c80a'];
      for (let i = 0; i < this.data.length; i++) {
        seriesData.push({
          name: this.legendData[i],
          type: "bar",
          stack: "'sum'",
          barMaxWidth: 20,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0,0,0,1,[
                {offset:0,color:colorStart[i]},
                {offset:1,color:colorEnd[i]}
              ])
            }
          },
          // label:{
          //   normal:{
          //     show:true,
          //     formatter:function(params){
          //       if(params.value >0){
          //         return params.value;
          //       }else{
          //         return ""
          //       }
          //     },
          //     backgroundColor:'#fff',
          //     color:'#000',
          //     padding:[2,2,2,2],
          //     borderRadius:10,
          //     offset:[10,0]
          //   },

          // },
          data: this.data[i]
        });
      }
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: this.legendData,
          itemWidth: 16,
          itemHeight: 8,
          borderRadius: 4,
          textStyle: {
            color: "#ced7db",
            fontSize: 9,
            fontFamily: "MicrosoftYaHei"
          },
          right: 0,
          // show: true
        },
        grid: {
          left: "6%",
          right: "0",
          bottom: "5%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: this.xaisData,
          axisTick: {
            show: false
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
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#425671"
            }
          }
        },
        yAxis: {
          name: "人口（个）",
          nameTextStyle: {
            color: "#abb3be",
            fontSize: 9,
            fontFamily: "MicrosoftYaHei"
          },
          type: "value",
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#abb3be",
            fontSize: 9
          },
          axisLine: {
            lineStyle: {
              color: "#abb3be"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#425671"
            }
          }
        },
        series: seriesData
      };
      let myChart = echarts.init(document.getElementById(this.ids));
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
