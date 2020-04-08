<template>
    <div id="myLine" style="width: 100%;height:100%"></div>
</template>
<script>
export default {
    props: {
        dataArr: {
            default: function() {
                return [147726.02, 70, 60, 80, 100, 90, 10, 70, 60, 80, 100, 90]
            }
        },
        dataArrPerson: {
            default: function() {
                return [10, 70, 60, 80, 100, 90, 10, 70, 60, 80, 100, 90]
            }
        },
        dataxAxis: {
            default: function() {
                return ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            }
        }
    },
    methods: {
        initEcharts() {
            var dataIPSxAxis = this.dataxAxis
            var dataIPS2 = this.dataArrPerson
            var dataIPS1 = this.dataArr
            var copeData = JSON.parse(JSON.stringify(dataIPS1))
            var copeData2 = JSON.parse(JSON.stringify(dataIPS2))

            function sortData(a, b) {
                return b - a
            }

            var datass = copeData.sort(sortData)
            var datass2 = copeData2.sort(sortData)
            var min1 = parseInt(datass[datass.length - 1] * 0.5) || 0
            var min2 = parseInt(datass2[datass2.length - 1] * 0.5) || 0
            var max1 = parseInt(datass[0]) || 100
            var max2 = parseInt(datass2[0]) || 100
            var option = {
                title: {
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "none"
                    },
                    confine: true,
                    formatter: function(params) {
                        var unit = ["万元", "人"]
                        var result = params[0].axisValue;
                        params.forEach(function(item) {
                            result+= "<br/>";
                            result +='<span style="background:'+item.color.colorStops[0].color+';display: inline-block;width: 10px;height: 10px;margin-right:5px;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;"></span>' + item.seriesName + "：" + item.data + unit[item.componentIndex]
                            if(unit[item.componentIndex]=='万元'){
                                result+='，投资完成：'+(item.data/431189.12*100).toFixed(2)+'%'
                            }
                        })
                        return result
                    }
                },
                legend: {
                    itemWidth: 16,
                    itemHeight: 8,
                    borderRadius: 4,
                    textStyle: {
                        color: "#ced7db",
                        fontSize: 9,
                        fontFamily: "MicrosoftYaHei"
                    },
                    right: 200,
                    show:true
                },
                color: ["#0080ff", "#4cd5ce"],
                toolbox: {

                },
                grid: {
                    top: "15%",
                    bottom: 30,
                    containLabel: false
                },
                xAxis: [
                    {
                        type: "category",
                        name: "",
                        nameTextStyle: {
                            color: "#abb3be",
                            fontSize: 10
                        },
                        axisTick: {
                            show: false
                        },
                        data: dataIPSxAxis,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#abb3be",
                                fontSize: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "rgba(171,179,190,0.8)",
                                width: 0.5 //这里是为了突出显示加上的
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        name: "投资额度(万元)",
                        nameTextStyle: {
                            color: "#abb3be",
                            fontSize: 10
                        },
                        scale: true,
                        max: datass[0],
                        min: min1,
                        splitNumber: 25,
                        interval: parseInt((max1 * 10000 - min1 * 10000) / 40000),
                        type: "value",
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: "#abb3be",
                                width: 1 //这里是为了突出显示加上的
                            }
                        },

                        axisLabel: {
                            formatter: function(val) {
                                return val + ""
                            },
                            show: true,
                            textStyle: {
                                fontSize: 11,
                                color: "#abb3be" //字体颜色
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "dashed",
                                color: "#425671"
                            }
                        }
                    },
                    {
                        name: "搬迁安置人口(人)",
                        nameTextStyle: {
                            color: "#abb3be",
                            fontSize: 10
                        },
                        scale: true,
                        max: max2,
                        min: min2,
                        splitNumber: 4,
                        interval: parseInt((max2 * 10000 - min2 * 10000) / 40000),
                        type: "value",
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: "#abb3be",
                                width: 1 //这里是为了突出显示加上的
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            formatter: function(val) {
                                return val + ""
                            },
                            show: true,
                            textStyle: {
                                fontSize: 11,
                                color: "#abb3be" //字体颜色
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(171,179,190,0.5)"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: "移民安置投资费用",
                        type: "bar",
                        barWidth: 15,
                        barGap: 0.1,
                        symbol: "image:///img/symbol.png", //去掉折线点
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "rgba(51,242,195,.1)"
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#28cd99" }, { offset: 1, color: "rgba(40,205,153,0)" }]),
                                lineStyle: {
                                    // 系列级个性化折线样式
                                    width: 0.5,
                                    type: "solid",
                                    color: "#0078D7"
                                }
                            },
                            emphasis: {
                                color: "#33f2c3",
                                lineStyle: {
                                    // 系列级个性化折线样式
                                    width: 0.5,
                                    type: "dotted",
                                    color: "#33f2c3" //折线的颜色
                                }
                            }
                        }, //线条样式
                        symbolSize: 10, //折线点的大小
                        areaStyle: {
                            normal: {}
                        },
                        data: dataIPS1,
                        label: {
                            position: "top",
                            show: false,
                            formatter: function(params) {
                                if (datass.indexOf(params.value) < 3 && params.value > 0) {
                                    return "{a|" + params.value + "万元}\n\n{b|}"
                                } else {
                                    return ""
                                }
                            },
                            rich: {
                                a: {
                                    color: "#000",
                                    lineHeight: 12,
                                    height: 12,
                                    padding: 8,
                                    borderRadius: 30,
                                    fontSize: 11,
                                    backgroundColor: "rgba(255,255,255,.7)"
                                },
                                b: {
                                    backgroundColor: {
                                        image: "/img/arr.png"
                                    },
                                    align: "center",
                                    width: 12,
                                    padding: [-9, -2],
                                    height: 10
                                }
                            }
                        }
                    },
                    {
                        name: "搬迁安置人口",
                        type: "bar",
                        barWidth: 15,
                        yAxisIndex: 1,
                        symbol: "image:///img/symbol.png",
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "rgba(51,242,195,.1)"
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#0f74d8" }, { offset: 1, color: "rgba(43,67,215,0)" }]),
                                lineStyle: {
                                    // 系列级个性化折线样式
                                    width: 0.5,
                                    type: "solid",
                                    color: "#0078D7"
                                }
                            },
                            emphasis: {
                                color: "#0078D7",
                                lineStyle: {
                                    // 系列级个性化折线样式
                                    width: 0.5,
                                    type: "dotted",
                                    color: "#0078D7" //折线的颜色
                                }
                            }
                        }, //线条样式
                        symbolSize: 10, //折线点的大小
                        areaStyle: {
                            normal: {}
                        },
                        data: dataIPS2,
                        label: {
                            show: false,
                            position: "top",
                            formatter: function(params) {
                                if (datass2.indexOf(params.value) < 3 && params.value > 0) {
                                    return "{a|" + params.value + "人}\n\n{b|}"
                                } else {
                                    return ""
                                }
                            },
                            rich: {
                                a: {
                                    color: "#000",
                                    lineHeight: 12,
                                    height: 12,
                                    padding: 8,
                                    borderRadius: 30,
                                    fontSize: 11,
                                    backgroundColor: "rgba(255,255,255,.9)"
                                },
                                b: {
                                    backgroundColor: {
                                        image: "/img/arr.png"
                                    },
                                    align: "center",
                                    width: 12,
                                    padding: [-9, -2],
                                    height: 10
                                }
                            }
                        }
                    }
                ]
            }

            var myChart = this.$echarts.init(document.getElementById("myLine"))
            myChart.setOption(option)
        }
    },
    mounted() {
        this.initEcharts()
    }
}
</script>
<style lang="scss" scoped>
</style>
