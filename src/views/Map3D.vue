<template>
    <div class="map-box">
        <div id="map">
            <div class="toollegend">
                <div class="gongju" @click="backHome">
                    <i class="reset icon-img-fuwei"></i>
                </div>
            </div>
        </div>

        <div id="chart1"></div>
        <div id="chart2"></div>
        <div id="chart3"></div>
        <div id="chart4"></div>

        <div id="projPopup" class="gis-popup">
            <a href="#" id="popup-closer" class="gis-popup-closer" @click="closePopup"></a>
            <div class="info-main" v-show="popupName == 'proj'">
                <div class="info-title">
                    <span>{{ infoParams.name }}</span>
                </div>
                <div class="info-content">
                    <div style="position: relative;">
                        <div class="flip-container">
                            <div class="flipper">
                                <p class="front">
                                    <img :src="infoParams.pic1" />
                                    <span ref="foo">{{ infoParams.content }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="snkbutton">
                    <div>
                        <a :href="infoParams.url" target="blank">
                            <img style="float: left; margin: 10px;cursor: pointer;" src="img/panorama.png" />
                        </a>
                        <a href="#" target="blank">
                            <img style="float: left; margin: 10px 10px 10px 0;cursor: pointer;" src="img/videoPlay.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var echartslayer = null
var map = null
var yanmoServerLayer = null
var projectLayer = null
var pointLayer = null
// import Overlay from 'ol/Overlay';
import indexdata from "../assets/js/indexdata"
import floodEffectData from "../assets/js/floodEffectData"
export default {
    data() {
        return {
            countyLayer: null,
            projOverlay: null,
            popupName: "",
            echartsImplementlayer: null,
            chart1layer: null,
            chart2layer: null,
            chart3layer: null,
            chart4layer: null,
            type: 1,
            loadingType: 1, //1为移民安置规划费用
            infoParams: {
                name: "",
                content: "",
                url: "",
                pic1: "",
                pic2: ""
            },
            yAxis: {
                max: 100,
                show: false,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#999"
                    }
                }
            },
            company: "",
            onceAgineData:[]//存储二次点击的数据
        }
    },
    mounted() {
        this.createMap()
        //  this.addcounty();
        // this.addproduction2();
        // this.addLandInfo()
    },
    methods: {
        createMap() {
            var _this = this
            var projContainer = document.getElementById("projPopup")
            _this.projOverlay = new ol.Overlay({
                element: projContainer,
                autoPan: true,
                autoPanAnimation: {
                    duration: 250
                }
            })
            map = new ol.Map({
                target: "map",
                layers: [
                    new ol.layer.Tile({
                        name: "arcgis底图",
                        source: new ol.source.TileArcGISRest({
                            url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/"
                        }),
                        visible: true,
                        zIndex: 0
                    }),
                    new ol.layer.Image({
                        name: "边界",
                        source: new ol.source.ImageArcGISRest({
                            url: "http://112.74.101.152:6080/arcgis/rest/services/西安移民/边界线渲染图/MapServer"
                        }),
                        visible: true,
                        zIndex: 2
                    })
                ],
                overlays: [_this.projOverlay],
                view: new ol.View({
                    center: [108.03268432617188, 33.300016845703125],
                    projection: ol.proj.get("EPSG:4326"),
                    zoom: 9.2,
                    minZoom: 9.2,
                    maxZoom: 18
                })
            })
            //加载淹没面
            yanmoServerLayer = new ol.layer.Image({
                name: "淹没面",
                zIndex: 3,
                source: new ol.source.ImageArcGISRest({
                    url: "http://112.74.101.152:6080/arcgis/rest/services/西安移民/淹没区范围/MapServer",
                    wrapX: false,
                    params: {
                        layers: "show:0,1"
                    }
                }),
                visible: true
            })
            map.addLayer(yanmoServerLayer)
            //添加工程点位
            projectLayer = new ol.layer.Vector({
                name: "项目位置",
                zIndex: 10,
                source: new ol.source.Vector({
                    features: []
                }),
                visible: true
            })
            map.addLayer(projectLayer)
            _this.addproject()
            map.on("singleclick", function(evt) {
                var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
                    //return的话循环结束，返回第一个feature
                    return feature
                })
                if (evt && feature != undefined && feature && feature.get("type")) {
                    var type = feature.get("type")
                    var coordinate = evt.coordinate
                    switch (type) {
                        case "projectPoint":
                            _this.infoParams = feature.get("params")
                            _this.popupName = "proj"
                            map.getView().animate({
                                center: _this.infoParams.coordinate2,
                                zoom: 13,
                                duration: 200
                            })
                            _this.$nextTick(() => {
                                _this.projOverlay.setPosition(_this.infoParams.coordinate2)
                            })
                            break
                    }
                }
            })
            map.on("moveend", function(e) {
                var zoom = map.getView().getZoom()
                if (zoom <= 7) {
                    _this.colseOther()
                    this.type = 1
                }
                if (this.type == 1) {
                    if (zoom >= 9) {
                        projectLayer.setVisible(true)
                    }
                }
            })
        },
        //添加项目
        addproject() {
            var projectData = indexdata.projectjson
            var features = projectData.map(element => {
                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(element.coordinate)
                })
                feature.setId(element.id)
                feature.set("name", element.name)
                feature.set("params", element)
                feature.set("type", "projectPoint")
                feature.setStyle(
                    new ol.style.Style({
                        text: new ol.style.Text({
                            offsetY: -45,
                            offsetX: -10,
                            text: element.name,
                            font: "12px 微软雅黑",
                            fill: new ol.style.Fill({
                                color: "#f8f9fb"
                            })
                        }),
                        image: new ol.style.Icon({
                            src: "img/定位.png",
                            anchor: [0.6, 1]
                        })
                    })
                )
                projectLayer.getSource().addFeature(feature)
            })
        },
        //添加安置点点位
        addSitePoint2(type) {
            this.colseOther()
            if (type == 1) {
                map.getView().animate({
                    center: [108.03268432617188, 33.300016845703125],
                    projection: ol.proj.get("EPSG:4326"),
                    zoom: 11,
                    minZoom: 9.2,
                    maxZoom: 18
                })
            } else {
                map.getView().animate({
                    center: [108.03268432617188, 33.300016845703125],
                    projection: ol.proj.get("EPSG:4326"),
                    zoom: 13,
                    minZoom: 9.2,
                    maxZoom: 18
                })
            }
            pointLayer = new ol.layer.Vector({
                name: "",
                zIndex: 10,
                source: new ol.source.Vector({
                    features: []
                }),
                visible: true
            })
            map.addLayer(pointLayer)
            var pointData = []
            if (type == 1) {
                //集镇
                floodEffectData.endData.map(item => {
                    if (item.type == 1) pointData.push(item)
                })
            } else if (type == 2) {
                //农村
                floodEffectData.endData.map(item => {
                    if (item.type == 2) pointData.push(item)
                })
            } else if (type == 0) {
                //全部
                pointData = floodEffectData.endData
            }
            var features = pointData.map(element => {
                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(element.coordinate)
                })
                feature.setId(element.id)
                feature.set("name", element.viname)
                feature.set("params", element)
                feature.set("type", "sitePoint")
                feature.setStyle(
                    new ol.style.Style({
                        text: new ol.style.Text({
                            offsetY: -50,
                            offsetX: -0,
                            text: element.viname,
                            font: "12px 微软雅黑",
                            fill: new ol.style.Fill({
                                color: "#f8f9fb"
                            })
                        }),
                        image: new ol.style.Icon({
                            src: "img/安置点.png",
                            anchor: [0.6, 1]
                        })
                    })
                )
                pointLayer.getSource().addFeature(feature)
            })
        },
        addSitePoint(type) {
            this.colseOther()
            if (type == 1) {
                map.getView().animate({
                    center: [108.03268432617188, 33.300016845703125],
                    projection: ol.proj.get("EPSG:4326"),
                    zoom: 11,
                    minZoom: 9.2,
                    maxZoom: 18
                })
            } else {
                map.getView().animate({
                    center: [108.03268432617188, 33.300016845703125],
                    projection: ol.proj.get("EPSG:4326"),
                    zoom: 13,
                    minZoom: 9.2,
                    maxZoom: 18
                })
            }

            pointLayer = new ol.layer.Vector({
                name: "",
                zIndex: 10,
                source: new ol.source.Vector({
                    features: []
                }),
                visible: true
            })
            map.addLayer(pointLayer)
            var pointData = []
            if (type == 1) {
                //集镇
                floodEffectData.endData.map(item => {
                    if (item.type == 1) pointData.push(item)
                })
            } else if (type == 2) {
                //农村
                floodEffectData.endData.map(item => {
                    if (item.type == 2) pointData.push(item)
                })
            } else if (type == 0) {
                //全部
                pointData = floodEffectData.endData
            }
            var features = pointData.map(element => {
                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(element.coordinate)
                })
                feature.setId(element.id)
                feature.set("name", element.viname)
                feature.set("params", element)
                feature.set("type", "sitePoint")
                feature.setStyle(
                    new ol.style.Style({
                        text: new ol.style.Text({
                            offsetY: -50,
                            offsetX: -0,
                            text: element.viname,
                            font: "12px 微软雅黑",
                            fill: new ol.style.Fill({
                                color: "#f8f9fb"
                            })
                        }),
                        image: new ol.style.Icon({
                            src: "img/安置点.png",
                            anchor: [0.6, 1]
                        })
                    })
                )
                pointLayer.getSource().addFeature(feature)
            })
        },
        closePopup() {
            this.projOverlay.setPosition(null)
            this.popupName = ""
        },
        backHome() {
            map.getView().animate({
                center: [108.03268432617188, 33.300016845703125],
                projection: ol.proj.get("EPSG:4326"),
                zoom: 9.2,
                minZoom: 9.2,
                maxZoom: 18
            })
            this.colseOther()
            projectLayer.setVisible(true)
        },
        colseOther() {
            this.type = 2
            this.projOverlay.setPosition(null)
            projectLayer.setVisible(false)
            if (pointLayer != null) {
                pointLayer.getSource().clear()
                pointLayer = null
            }
            if (this.chart1layer !== undefined && this.chart1layer != null) {
                this.chart1layer.setPosition(null)
                this.chart1layer = null
            }
            if (this.chart2layer !== undefined && this.chart2layer != null) {
                this.chart2layer.setPosition(null)
                this.chart2layer = null
            }
            if (this.chart3layer !== undefined && this.chart3layer != null) {
                this.chart3layer.setPosition(null)
                this.chart3layer = null
            }
            if (this.chart4layer !== undefined && this.chart4layer != null) {
                this.chart4layer.setPosition(null)
                this.chart4layer = null
            }
            if (echartslayer != null) {
                echartslayer.chart.clear()
                echartslayer = null
            }
        },
        //点击生产安置人口
        addproduction(value, year,selData) {
            this.colseOther()
            let currentSettlementData = []
            // 移民安置规划
            // 规划水平年生产安置人口
            
            if (value == 0) currentSettlementData = floodEffectData.resettlementPopulation.productionSettlement ? floodEffectData.resettlementPopulation.productionSettlement : []
            else if (value == 1) currentSettlementData = floodEffectData.resettlementPopulation.mAgriculturalResettlement ? floodEffectData.resettlementPopulation.mAgriculturalResettlement : []
            else if (value == 2) currentSettlementData = floodEffectData.resettlementPopulation.individualJobSettlement ? floodEffectData.resettlementPopulation.individualJobSettlement : []
            // 工程规划水平年变迁安置移民
            else if (value == 10) currentSettlementData = floodEffectData.ProjectRelocationData.movePopuData ? floodEffectData.ProjectRelocationData.movePopuData : []
            // 移民安置实施（移民安置费用统计总投资）
            else if (value == 20) {
                let investData = floodEffectData.totalInvestExpense
                investData.map(sub => {
                    if (sub.year == year) currentSettlementData = sub.detailData
                })
            }else if(value == 21){//搬迁安置进度统计中二次点击显示数据
                this.onceAgineData.map(k => {
                    if(selData.indexOf(k.name) > -1){
                            currentSettlementData.push(k)
                    }
                });
            }
            var i = 0
            currentSettlementData.forEach(datavaule => {
                i = i + 1
                var option1 = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}"
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            magicType: {
                                show: true,
                                type: ["pie", "funnel"]
                            }
                        }
                    },
                    xAxis: {
                        data: [year == "" ? datavaule.name + "(" + datavaule.value + "人)" : datavaule.name + "(" + datavaule.value + "万元)"],
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: "#fff"
                            },
                            formatter: function(value) {
                                String.prototype.splice = function(start, newStr) {
                                    return this.slice(0, start) + newStr + this.slice(start)
                                }

                                return value.splice(7, "\n")
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: this.yAxis,
                    series: [
                        {
                            type: "bar",
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#13CBAE" }, { offset: 0.5, color: "#2AAF87" }, { offset: 1, color: "#2AAF87" }])
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#2AAF87" }, { offset: 0.7, color: "#2AAF87" }, { offset: 1, color: "#13CBAE" }])
                                }
                            },
                            data: [datavaule.value]
                        }
                    ]
                }
                var id = "chart" + i
                var chart1 = this.$echarts.init(document.getElementById(id))
                chart1.setOption(option1)
                var pt1 = datavaule.point
                if (i == 1) {
                    this.chart1layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart1layer)
                }
                if (i == 2) {
                    this.chart2layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart2layer)
                }
                if (i == 3) {
                    this.chart3layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart3layer)
                }
                if (i == 4) {
                    this.chart4layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart4layer)
                }
            })
        },
        //点击规划费用展示饼图
        addPlanMoney(selVal) {
            var loadtype = 2
            this.colseOther()
            map.getView().animate({
                center: [108.03268432617188, 33.300016845703125],
                projection: ol.proj.get("EPSG:4326"),
                zoom: 10,
                minZoom: 9.2,
                maxZoom: 18
            })
            var _this = this
            map.once("postrender", function(e) {
                var geoCoordMap = floodEffectData.projectGeoCoordMap
                var data = []
                if(selVal == "") data = floodEffectData.planMoney;
                else{
                    floodEffectData.Implementation.map(sel => {
                        if(selVal == sel.type) data = sel.projectProductData
                        else return ""
                    })
                }
                var series = []
                var meathData = function() {
                    var colorList = ["#afa3f5", "#00d488", "#3feed4", "#3bafff", "#f1bb4c", "#fff", "#61A0A9", "#DDDD09", "#90C80A", "#FBD840"]
                    series = []
                    data.forEach(function(item, i) {
                        item["value"].map(t => {
                            if(t.value == 0) return t.value = null
                        });
                        series.push({
                            name: item["name"],
                            type: "pie",
                            coordinateSystem: "HMap",
                            hoverAnimation: true,
                            zlevel: 6,
                            center: map.getPixelFromCoordinate(geoCoordMap[item["name"]]),
                            selectedMode: "single",
                            radius: [35, 50],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)"
                                },
                                normal: {
                                    label: {
                                        show: true,
                                        position: "center",
                                        color: "#fff",
                                        formatter: function(parmas) {
                                            if (parmas.dataIndex == parseInt(item["value"].length / 2)) {
                                                return item.alias
                                            } else {
                                                return ""
                                            }
                                        }
                                    },
                                    labelLine: { show: false },
                                    color: function(params) {
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            data: item["value"]
                        })
                    })
                }
                meathData()
                var option = {
                    tooltip: {
                        show: true,
                        trigger: "item",
                        formatter: selVal==""?"{a} <br/>{b} : {c}万元 ({d}%)":"{a} <br/>{b} : {c}个 ({d}%)"
                    },
                    title: [
                        {
                            show:false,
                            text: "标题",
                            textStyle: {
                                fontSize: 16,
                                color: "#fff"
                            },
                            left: "2%"
                        }
                    ],

                    legend: {
                        x: "left",
                        show: false,
                        data: ["农村移民补偿费", "集镇迁建补偿费", "工业企业迁建补偿费", "专业项目补偿及修建费", "保护工程建设费", "库底清理费", "其他费用", "预备费", "有关税费", "城市牵地费"],
                        selectedMode: "multiple"
                    },
                    HMap: {},
                    series: series
                }
                // if (echartslayer !== undefined&&echartslayer !=null)
                //   return;
                if(echartslayer === null){
                   echartslayer = new ol3Echarts(map);
                } 
                echartslayer.chart.setOption(option)

                var changeHandler = function() {
                    var option = {}
                    if (echartslayer != null) option = echartslayer.chart.getOption() || {}
                    meathData()
                    option.tooltip = {
                        trigger: "item",
                        formatter: selVal==""?"{a} <br/>{b} : {c}万元 ({d}%)":"{a} <br/>{b} : {c}个 ({d}%)"
                    }
                    option.series = series || []
                     echartslayer.chart.clear()                    
                    echartslayer.chart.setOption(option,true)
                }
                map.getView().on("change:resolution", changeHandler)
                map.getView().on("change:center", changeHandler)
                // map.on('moveend', changeHandler);
            })
        },
        //点击征地面积,征地总面积,永久征地,临时征地展示柱状图
        addLandInfo(val) {
            var loadtype = 2
            this.colseOther()
             if (val == "allArea") {
                this.company = "亩"
                var data = floodEffectData.projectAreaData.allArea //征地总面积
            } else if (val == "foreverArea") {
                this.company = "亩"
                var data = floodEffectData.projectAreaData.foreverArea //永久征地
            } else if (val == "temporaryArea") {
                this.company = "亩"
                var data = floodEffectData.projectAreaData.temporaryArea //临时征地
            }  else {
                this.company = "亩"
                for (var item of floodEffectData.landArea) {
                    if (val == item.type) {
                        var data = item.mapdata //征地面积
                    }
                }
            }

            var _this = this
            var i = 0
            data.forEach(datavaule => {
                i = i + 1
                var option1 = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}"
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            magicType: {
                                show: true,
                                type: ["pie", "funnel"]
                            }
                        }
                    },
                    xAxis: {
                        data: [datavaule.name + "(" + datavaule.data + this.company + ")"],
                        // data:this.xAxis,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: "#fff"
                            },
                            formatter: function(value) {
                                String.prototype.splice = function(start, newStr) {
                                    return this.slice(0, start) + newStr + this.slice(start)
                                }

                                return value.splice(5, "\n")
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: this.yAxis,
                    series: [
                        {
                            type: "bar",
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#13CBAE" }, { offset: 0.5, color: "#2AAF87" }, { offset: 1, color: "#2AAF87" }])
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#2AAF87" }, { offset: 0.7, color: "#2AAF87" }, { offset: 1, color: "#13CBAE" }])
                                }
                            },
                            data: [datavaule.data]
                        }
                    ]
                }
                var id = "chart" + i
                var chart1 = this.$echarts.init(document.getElementById(id))
                chart1.setOption(option1)
                var pt1 = datavaule.point
                if (i == 1) {
                    this.chart1layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart1layer)
                }
                if (i == 2) {
                    this.chart2layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart2layer)
                }
                if (i == 3) {
                    this.chart3layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart3layer)
                }
                if (i == 4) {
                    this.chart4layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart4layer)
                }
            })
        },
        //点击受影响人口，总人口展示柱状图
        addPeopleInfo(val) {
            this.colseOther()
            if (val == "people") {
                this.company = "人"
                var data = floodEffectData.effectData.popuData.mapData //人口
            } else {
                this.company = "人"
                for (var item of floodEffectData.effectData.popuData.chartData) {
                    if (val == item.type) {
                        var data = item.mapdata //受影响人口
                    }
                }
            }

            var _this = this
            var i = 0
            data.forEach(datavaule => {
                i = i + 1
                var option1 = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}"
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            magicType: {
                                show: true,
                                type: ["pie", "funnel"]
                            }
                        }
                    },
                    xAxis: {
                        data: [datavaule.name + "(" + datavaule.data + this.company + ")"],
                        // data:this.xAxis,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: "#fff"
                            },
                            formatter: function(value) {
                                String.prototype.splice = function(start, newStr) {
                                    return this.slice(0, start) + newStr + this.slice(start)
                                }

                                return value.splice(5, "\n")
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: this.yAxis,
                    series: [
                        {
                            type: "bar",
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#13CBAE" }, { offset: 0.5, color: "#2AAF87" }, { offset: 1, color: "#2AAF87" }])
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#2AAF87" }, { offset: 0.7, color: "#2AAF87" }, { offset: 1, color: "#13CBAE" }])
                                }
                            },
                            data: [datavaule.data]
                        }
                    ]
                }
                var id = "chart" + i
                var chart1 = this.$echarts.init(document.getElementById(id))
                chart1.setOption(option1)
                var pt1 = datavaule.point
                if (i == 1) {
                    this.chart1layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart1layer)
                }
                if (i == 2) {
                    this.chart2layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart2layer)
                }
                if (i == 3) {
                    this.chart3layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart3layer)
                }
                if (i == 4) {
                    this.chart4layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart4layer)
                }
            })
        },
        //点击受影响房屋，总房屋展示柱状图
        addHouseInfo(val) {
            this.colseOther()
            if (val == "house") {
                this.company = "平方米"
                var data = floodEffectData.effectData.houseData.mapData //房屋总面积
            } else {
                this.company = "平方米"
                for (var item of floodEffectData.effectData.houseData.chartData) {
                    if (val == item.type) {
                        var data = item.mapdata //受影响房屋
                    }
                }
            }
            var _this = this
            var i = 0
            data.forEach(datavaule => {
                i = i + 1
                var option1 = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}"
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            magicType: {
                                show: true,
                                type: ["pie", "funnel"]
                            }
                        }
                    },
                    xAxis: {
                        data: [datavaule.name + "(" + datavaule.data + this.company + ")"],
                        // data:this.xAxis,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: "#fff"
                            },
                            formatter: function(value) {
                                String.prototype.splice = function(start, newStr) {
                                    return this.slice(0, start) + newStr + this.slice(start)
                                }

                                return value.splice(5, "\n")
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: this.yAxis,
                    series: [
                        {
                            type: "bar",
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#13CBAE" }, { offset: 0.5, color: "#2AAF87" }, { offset: 1, color: "#2AAF87" }])
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "#2AAF87" }, { offset: 0.7, color: "#2AAF87" }, { offset: 1, color: "#13CBAE" }])
                                }
                            },
                            data: [datavaule.data]
                        }
                    ]
                }
                var id = "chart" + i
                var chart1 = this.$echarts.init(document.getElementById(id))
                chart1.setOption(option1)
                var pt1 = datavaule.point
                if (i == 1) {
                    this.chart1layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart1layer)
                }
                if (i == 2) {
                    this.chart2layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart2layer)
                }
                if (i == 3) {
                    this.chart3layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart3layer)
                }
                if (i == 4) {
                    this.chart4layer = new ol.Overlay({
                        position: pt1,
                        positioning: "center-center",
                        element: document.getElementById(id)
                    })
                    map.addOverlay(this.chart4layer)
                }
            })
        },
        //点击乡镇,行政村渲染聚合
        addCountyHamlet(val) {
            this.colseOther()
            if (val == "county") {
                var data = floodEffectData.viilagePointMap
            } else if (val == "hamlet") {
                var data = floodEffectData.hamletData
            }
            var geoCoordMap = floodEffectData.viilageGeoCoordMap
            var convertData = function(data) {
                var res = []
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = data[i].point
                    if (geoCoord) {
                        res.push({
                            name: data[i].value + "个",
                            value: geoCoord.concat(data[i].value * 20)
                        })
                    }
                }
                return res
            }
            var option = {
                title: {
                    text: "",
                    subtext: "",
                    left: "center",
                    textStyle: {
                        color: "#fff"
                    }
                },
                geo: {
                    zoom: 2.2
                },
                tooltip: {
                    show: true,
                    trigger: "item",
                    formatter: function(param) {
                        var value = param.name
                        return value
                    }
                },
                legend: {
                    orient: "vertical",
                    y: "top",
                    x: "right",
                    data: [""],
                    textStyle: {
                        color: "#fff"
                    }
                },
                HMap: {},
                series: [
                    {
                        name: "",
                        type: "scatter",
                        coordinateSystem: "HMap",
                        data: convertData(data),
                        hoverAnimation: false,
                        symbolSize: 16,
                        zoom: 1.2,
                        label: {
                            normal: {
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 12
                                },
                                position: "center",
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#00BA9F"
                            }
                        }
                    },
                    {
                        name: "",
                        type: "effectScatter",
                        coordinateSystem: "HMap",
                        data: convertData(
                            data
                                .sort(function(a, b) {
                                    return b.value - a.value
                                })
                                .slice(0, 6)
                        ),
                        // symbolSize: function(val) {
                        //     return val[2] / 4
                        // },
                        symbolSize: 30,
                        showEffectOn: "render",
                        rippleEffect: {
                            brushType: "stroke"
                        },
                        hoverAnimation: false,
                        label: {
                            normal: {
                                formatter: function(value) {
                                    return value.name
                                },
                                textStyle: {
                                    color: "#fff",
                                    fontSize: 12
                                },
                                offset: [0, 0],
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#00BA9F",
                                shadowBlur: 10,
                                shadowColor: "#333"
                            }
                        },
                        zlevel: 6
                    }
                ]
            }
            var _this = this
            if (echartslayer !== undefined && echartslayer != null) return
            echartslayer = new ol3Echarts(map)
            echartslayer.chart.setOption(option)
            // map.once('postrender', function (e) {
            //   if (echartslayer !== undefined)
            //     return;
            //   var echartslayer= new ol3Echarts(map);
            //   echartslayer.chart.setOption(option);
            // });
            return
        },
        //点击行政村渲染聚合
        addHamlet() {},
        // 对模拟迁徙数据进行封装
        getRelateData(moveStartData, numType, outofEndData) {
            let startColData = [],
                lastColData = []
            startColData = numType == 0 ? moveStartData : moveStartData.filter(a => a.type == numType)
            startColData.map(b => {
                outofEndData.map(c => {
                    if (b.to[0] == c.id) lastColData.push([{ name: b.name }, { name: c.name }])
                })
            })
            return lastColData
        },
        // 测试模拟迁徙
        simulateMigration(acceptType,isShowDbclick) {
            this.colseOther()
            map.getView().animate({
                center: [108.09898432617188, 33.300016845703125],
                projection: ol.proj.get("EPSG:4326"),
                zoom: 12,
                minZoom: 9.2,
                maxZoom: 18
            })
            // 获取jso的数据
            let geoCoordMap = new Object() //存储所有的名字及对应的坐标
            let newArr = [] //合并迁入数据和终点数据
            newArr = floodEffectData.movedata.concat(floodEffectData.outofdata)
            newArr.map(t => {
                geoCoordMap[t.name] = t.coordinate
            })
            // let onceAgineData = [];//存储二次点击的数据
            newArr.map(res => {
                this.onceAgineData.push({
                    name:res.name,
                    value:res.ren?res.ren:res.ghren,
                    point:res.coordinate
                })
            });
            let needShowData = [] //存储每个不同type对应起始与终止的数据
            needShowData = this.getRelateData(floodEffectData.movedata, acceptType, floodEffectData.outofdata)
            var planePath =
                "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z"
            var convertData = function(data) {
                var res = []
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i]
                    var fromCoord = geoCoordMap[dataItem[0].name]
                    var toCoord = geoCoordMap[dataItem[1].name]
                    if (fromCoord && toCoord) {
                        res.push([
                            {
                                coord: fromCoord
                            },
                            {
                                coord: toCoord
                            }
                        ])
                    }
                }
                return res
            }
            var color = ["#01A0DA", "#03BD9C", "#46bee9"]
            var series = []
            ;[["", needShowData]].forEach(function(item, i) {
                series.push(
                    {
                        name: item[0],
                        type: "effectScatter",
                        coordinateSystem: "HMap",
                        zlevel: 1,
                        rippleEffect: {
                            brushType: "stroke"
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "right",
                                formatter: "{b}"
                            }
                        },
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                color: color[1]
                            }
                        },
                        data: item[1].map(function(itemIndex) {
                            return {
                                name: itemIndex[0].name,
                                value: geoCoordMap[itemIndex[0].name]
                            }
                        })
                    },
                    {
                        name: item[0],
                        type: "lines",
                        coordinateSystem: "HMap",
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0,
                            symbol: planePath,
                            symbolSize: 15
                        },
                        lineStyle: {
                            normal: {
                                color: color[1],
                                width: 2,
                                opacity: 0.4,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
                        name: item[0],
                        type: "effectScatter",
                        coordinateSystem: "HMap",
                        zlevel: 2,
                        rippleEffect: {
                            brushType: "stroke"
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "right",
                                formatter: "{b}"
                            }
                        },
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                color: color[1]
                            }
                        },
                        data: item[1].map(function(dataItem) {
                            return {
                                name: dataItem[1].name,
                                value: geoCoordMap[dataItem[1].name].concat([250])
                            }
                        })
                    }
                )
            })
            var option = {
                title: {
                    text: "",
                    subtext: "",
                    left: "center",
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: function(params) {
                        return params.name
                    }
                },
                legend: {
                    show: false,
                    orient: "vertical",
                    top: "top",
                    left: "right",
                    textStyle: {
                        color: "#fff"
                    },
                    selectedMode: "single"
                },
                HMap: {},
                series: series
            }
            var _this = this
            if (echartslayer !== undefined && echartslayer != null) return
            echartslayer = new ol3Echarts(map)
            echartslayer.chart.setOption(option);
            // if(isShowDbclick != ""){
                echartslayer.chart.clear();
                echartslayer.chart.on("click",function(params){
                    _this.addproduction(21,"",params.name)
                });
                echartslayer.chart.setOption(option,true);
            // }
        }
    }
}
</script>
<style lang="scss" scoped>
.map-box {
    width: 100%;
    height: 100%;
    #map {
        width: 100%;
        height: 100%;
    }
}
#chart1 {
    height: 100px;
    width: 100px;
}
#chart2 {
    height: 100px;
    width: 100px;
}
#chart3 {
    height: 100px;
    width: 100px;
}
#chart4 {
    height: 100px;
    width: 100px;
}
</style>
<style lang="scss" >
.ol-control {
    display: none !important;
}
.toollegend {
    right: 576px;
    top: 638px;
    z-index: 1;
    position: absolute;
    transition: all 1s;
}
.toolBottom {
    .toollegend {
        top: calc(100% - 50px);
        bottom: 10px;
        transition: all 1s;
        right: 10px;
    }
}
.toolRight {
    .toollegend {
        bottom: 10px;
        right: 10px;
        transition: all 1s;
    }
}
</style>
