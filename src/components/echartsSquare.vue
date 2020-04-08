<template>
  <div :id="ids" style="height: 100%;"></div>
</template>

<script>
export default {
  props: {
    ids: {
      default: "echartsPolar"
    },
    isShowLegend: {
      default: false
    },
    legend: {
      default: function() {
        return [];
      }
    },
    isShowLine: {
      default: true
    },
    isShowAnimation: {
      default: true
    },
    unit:{
        default:'人'
    },
    data: {
      //圆环数据
      default: function() {
        return [
          { value: 310, name: "邮件营销" },
          { value: 135, name: "视频广告" }
        ];
      }
    }
  },
  watch: {
    data(newval, oldval) {
      this.data = newval;
      this.initEcharts();
    }
  },
  methods: {
    initEcharts() {
      var echarts = this.$echarts;
      let totalNum = 0;
      let legend = [];
      this.data.map(item => {
        legend.push(item.name);
      });
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%  ({c}"+this.unit+")"
        },
        grid: {
          left: "-20%"
        },
        legend: {
          orient: "vertical",
          icon: "roundRect",
          left: -2,
          bottom: 0,
          itemWidth: 10,
          itemHeight: 6,
          borderRadius: 4,
          textStyle: {
            color: "#ced7db",
            fontSize: 9,
            fontFamily: "MicrosoftYaHei"
          },
          data: legend,
          show: this.isShowLegend
        },
        series: [
          {
            //圆环
            type: "pie",
            radius: ["60%", "85%"],
            center: ["53%", "55%"],
            minAngle: 10, // 设置每块扇形的最小占比
            color: ["#2882e2", "#419866", "#FBD840", "#3c7fab", "#0073d0"],
            data: this.data,
            hoverAnimation: this.isShowAnimation,
            z: 11,
            hoverOffset: 2,
            label: {
              normal: {
                show: this.isShowLine,
                formatter: function(param) {
                  return "{b|}" + "{a|" + param.name + "}\n";
                },
                rich: {
                  a: {
                    lineHeight: 15,
                    height: 10,
                    padding: 6,
                    fontSize: 11,
                    borderRadius: 30,
                    backgroundColor: "rgba(255,255,255,.7)",
                    //正常的样式
                    color: "#000"
                  },
                  b: {
                    width: 20,
                    height: 20
                  }
                }
              }
            }, //提示文字
            labelLine: {
              normal: {
                show: this.isShowLine,
                length2: 1,
                length: -10
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
    this.$nextTick(() => {
      this.initEcharts();
    });
  }
};
</script>
<style>
</style>
