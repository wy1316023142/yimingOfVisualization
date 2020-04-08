<template>
    <div :id="ids" style="height: 100%;"></div>
</template>

<script>
export default {
    props: {
        ids: {
            default: "echartsPolar1"
        },
        pieData: {
            //中心饼图数据
            default: function() {
                return [{ value: 210, name: "邮件营销" }, { value: 190, name: "视频广告" }]
            }
        },
        clickEvent:{
            default:function(){}
        }
    },
    watch: {
        pieData(newval, oldval) {
            // this.pieData = newval
            this.initEcharts()
        }
    },
    mounted() {},
    methods: {
        initEcharts() {
            var echarts = this.$echarts
            var option = {
                tooltip: {
                    show: true,
                    trigger: "item",
                    formatter: " {b} : {d}%  ({c}个)"
                },
                legend: {
                    orient: "horizontal",
                    x: "center",
                    // y: "bottom",
                    bottom: 0,
                    left: 0,
                    itemWidth: 15,
                    itemHeight: 7,
                    x: "center",
                    textStyle: {
                        color: "#fff"
                    },
                    show: true
                },
                calculable: true,
                color: [
                    new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#429669" }, { offset: 0.5, color: "#28b28d" }, { offset: 1, color: "#11cbad" }]),
                    new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#617022" }, { offset: 0.5, color: "#a0ba39" }, { offset: 1, color: "#a0ba39" }]),
                    new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#33698b" }, { offset: 0.5, color: "#3c7faa" }, { offset: 1, color: "#3c7faa" }]),
                    new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#0d5791" }, { offset: 0.5, color: "#014074" }, { offset: 1, color: "#00325c" }]),
                    new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#0074cf" }, { offset: 0.5, color: "#0074cf" }, { offset: 1, color: "#004377" }])
                ],
                series: [
                    {
                        //圆环

                        type: "pie",
                        radius: [60, 90],
                        center: ["45%", 100],
                        roseType: "area",
                        width: "20%", // for funnel
                        max: 20,
                        sort: "ascending",
                        data: this.pieData,
                        hoverOffset: 2,
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
                                    return params.value+"个"
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 10,
                                length2:10,
                                lineStyle: {
                                    color: "rgba(255, 255, 255, 0.3)"
                                }
                            }
                        }
                    }
                ]
            }

            let myChart = this.$echarts.init(document.getElementById(this.ids))
            myChart.setOption(option);
            let that = this;
                myChart.clear();
                myChart.on("click",function(params){
                    if(params.componentType == "series"){
                        that.clickEvent(params.name)
                    }
                });
                myChart.setOption(option, true);
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initEcharts()
        })
    }
}
</script>
<style>
</style>
