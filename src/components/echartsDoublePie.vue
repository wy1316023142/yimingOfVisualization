<template>
  <div :id="ids" style="height: 100%;"></div>
</template>

<script>
export default {
  props: {
    ids: {
      default: "echartsPolar3"
    },
    data1: {
      //中心饼图数据
      default: function() {
        return [
          { value: 210, name: "邮件营销" },
          { value: 190, name: "视频广告" }
        ];
      }
    },
    data2: {
      //圆环数据
      default: function() {
        return [
          { value: 210, name: "邮件营销" },
          { value: 190, name: "视频广告" }
        ];
      }
    }
  },
  
  methods: {
    initEcharts() {
      var echarts = this.$echarts;
      let colorList = ["#90c80a", "#61a0a9"];
      var option = {
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{b} : {d}%  ({c}人)"
        },
        legend: {
          orient: "vertical",
          bottom: 0,
          left: -6,
          itemWidth: 15,
          itemHeight: 7,
          x: "center",
          textStyle: {
            color: "#fff"
          },
          show: true,
          height: 10
        },

        series: [
          {
            //扇形
            type: "pie",
            radius: "40%",
            center: ["47%", "44%"],
            color: [
              new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#057ddf" },
                { offset: 0.5, color: "#1dbbf2" },
                { offset: 1, color: "#21c5f4" }
              ]),
              new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#10ccae" },
                { offset: 0.5, color: "#27b38e" },
                { offset: 1, color: "#419467" }
              ]),
              new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#f7cd3a" },
                { offset: 0.5, color: "#e89d23" },
                { offset: 1, color: "#d87611" }
              ]),
              new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#0d5791" },
                { offset: 0.5, color: "#014074" },
                { offset: 1, color: "#00325c" }
              ]),
              new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#0074cf" },
                { offset: 0.5, color: "#0074cf" },
                { offset: 1, color: "#004377" }
              ])
            ],
            data: this.data1,
            hoverOffset: 2,
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderColor: "#051d4a"
              }
            }
          },
          {
            //圆环
            type: "pie",
            radius: ["50%", "65%"],
            center: ["47%", "44%"],
            data: this.data2,
            label: {
              normal: {
                show: true,
                color: "#000",
                lineHeight: 10,
                height: 10,
                padding: [6, 8, 6, 6],
                fontSize: 11,
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,.7)",
                formatter: function(params) {
                  return params.value + "人";
                }
              }
            },
            hoverOffset: 2,
            labelLine: {
              normal: {
                length: 20,
                length2: 15,
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                }
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 4,
                borderColor: "#051d4a",
                color: function(params) {
                  if (params.dataIndex % 2 == 0) {
                    //颜色间隔，偶数取第一种颜色，基数项取第二种颜色
                    return colorList[0];
                  } else {
                    return colorList[1];
                  }
                }
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      let myChart = this.$echarts.init(document.getElementById(this.ids));
      myChart.setOption(option);
    }
  },
  mounted() {
    this.initEcharts();
  }
};
</script>
<style>
</style>
