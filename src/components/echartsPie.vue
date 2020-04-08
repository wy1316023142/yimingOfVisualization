<template>
    <div :id="ids" style="height: 100%;"></div>
</template>

<script>
export default {
    props: {
        ids: {
            default: "myPie"
        },
        data: {
            //中心饼图数据
            default: function() {
                return [{ value: 210, name: "邮件营销" }, { value: 190, name: "视频广告" }]
            }
        }
    },
    watch:{
    data(newval,ooldval){
        this.data = newval
    }
  },
    mounted() {
        this.$nextTick(() => {
            this.initEcharts()
        })
    },
    methods: {
        initEcharts() {

            const scope = this;
            let legendData = []
            if (this.data && this.data.length > 0) {
                this.data.map(a => {
                    legendData.push(a.name)
                })
            }
            var echarts = this.$echarts
            var option = {
                tooltip: {
                    trigger: "item",
                    formatter: "{b} : {d}%  ({c}㎡)"
                },
                legend: {
                    type: 'scroll',
                    orient: "vertical",
                    right: "40px",
                    // top: "40px",
                    itemWidth: 15,
                    itemHeight: 7,
                    data: legendData,
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    },
                    height: 148,
                    // pagemode: true,
                },

                series: [
                    {
                        type: "pie",
                        radius: "78%",
                        center: ["34%", "58%"],
                        data: this.data,
                        minAngle:1,
                        hoverOffset:2,
                        label: {
                           normal: {
                                //正常的样式
                                show: true,
                                color: "#000",
                                lineHeight: 10,
                                height: 10,
                                padding: [6, 8, 6, 6],
                                borderRadius: 30,
                                fontSize: 11,
                                backgroundColor: "rgba(255,255,255,.7)",
                                formatter:function(params){
                                    return params.value+"亩"
                                }
                            },
                        }, //提示文字
                        labelLine: {
                            normal: {
                                length: 10,
                                length2: 16,
                                lineStyle: {
                                    color: "rgba(255, 255, 255, 0.3)"
                                }
                            }
                        },
                        color: ["#144919", "#00dab3", "#89c0a5", "#568e9b", "#dddd09", "#b97c27", "#046ea9", "#2a4151", "#b59b93"]
                    }
                ]
            }

            let myChart = this.$echarts.init(document.getElementById(this.ids))
            myChart.setOption(option);
            var _this = this
            myChart.on("click", function(params) {
                // console.log(params);
                
                // scope.$store.dispatch('controlEventFlagAction', params.data.name);
                _this.$parent.$options.parent.$options.parent.$refs.map.addLandInfo(params.name)
                
            })
        }
    }
}
</script>
<style>
</style>
