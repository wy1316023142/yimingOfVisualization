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
        legendData: {
            default: function() {
                return []
            }
        },
        currentIndex: {
            default: 0
        },
        isShowLine: {
            default: true
        },
        data: {
            //圆环数据
            default: function() {
                return [{ value: 310, name: "邮件营销" }, { value: 135, name: "视频广告" }]
            }
        }
    },
    watch: {
        data(newval, oldval) {
            this.initEcharts()
        }
    },
    methods: {
        initEcharts() {
            var echarts = this.$echarts
            var option = {
                tooltip: {
                    trigger: "item",
                    // formatter: "{b} : {d}%  ({c}人)"
                    formatter: function(params) {
                        if (params.name === "水库区" || params.name === "坝区" || params.name === "安置区" || params.name === "其他") {
                            return params.name + ":" + " " + params.percent + "%" + " " + params.value + "人"
                        } else if (params.name === "农村" || params.name === "村组集体" || params.name === "集镇") {
                            return params.name + ":" + " " + params.percent + "%" + " " + params.value + "㎡"
                        }
                    }
                },

                legend: {
                    orient: "horizontal",
                    icon: "roundRect",
                    x: "center",
                    left: 0,
                    bottom: -5,
                    itemWidth: 10,
                    itemHeight: 6,
                    borderRadius: 4,
                    textStyle: {
                        color: "#ced7db",
                        fontSize: 9,
                        fontFamily: "MicrosoftYaHei"
                    },
                    show: true
                },
                grid: {
                    left: "4%",
                    right: "4%",
                    bottom: "3%",
                    top: "20%",
                    containLabel: true
                },
                series: [
                    {
                        //圆环
                        type: "pie",
                        radius: ["53%", "75%"],
                        center: ["50%", "48%"],
                        color: ["#09d5bf", "#409866", "#fbd643", "#3c7fab", "#0073d0"],
                        data: this.data,
                        hoverAnimation: this.isShowLine,
                        hoverOffset: 2,
                        label: {
                            normal: {
                                //正常的样式
                                show: true,
                                color: "#000",
                                lineHeight: 10,
                                height: 10,
                                padding: [4, 4, 2, 4],
                                borderRadius: 25,
                                fontSize: 11,
                                backgroundColor: "rgba(255,255,255,.7)",
                                formatter: function(params) {
                                    if (params.name === "水库区" || params.name === "坝区" || params.name === "安置区" || params.name === "其他") {
                                        return params.value + "人"
                                    } else if (params.name === "农村" || params.name === "村组集体" || params.name === "集镇") {
                                        return params.value + "㎡"
                                    }
                                }
                                // formatter: function(params) {
                                //     // console.log(params);

                                //    return params.value + "人"
                                // }
                            }
                        }, //提示文字
                        labelLine: {
                            normal: {
                                show: this.isShowLine,
                                length: 4,
                                length2: 4,
                                lineStyle: {
                                    color: "rgba(255, 255, 255, 0.3)"
                                }
                            }
                        }
                    }
                ]
            }

            let myChart = this.$echarts.init(document.getElementById(this.ids))
            myChart.setOption(option)
            var _this = this
            myChart.on("click", function(params) {
               
                if (params.name === "水库区" || params.name === "坝区" || params.name === "安置区" || params.name === "其他") {
                    _this.$parent.$options.parent.$options.parent.$refs.map.addPeopleInfo(params.name)
                } else if (params.name === "农村" || params.name === "村组集体" || params.name === "集镇") {
                    _this.$parent.$options.parent.$options.parent.$refs.map.addHouseInfo(params.name)
                }
                
                // console.log( _this.$parent.$options.parent.$options.parent.$refs.map);
            })
        }
    },
    mounted() {
        this.initEcharts()
    }
}
</script>
<style>
</style>
