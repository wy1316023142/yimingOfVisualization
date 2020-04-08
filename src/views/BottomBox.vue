<template>
    <div class="bottom-bg">
        <!-- 标题 -->
        <TitleName titleName="移民安置实施" @dblclick.native="dbBottom(3)"></TitleName>
        <el-row>
            <!-- 饼图 -->
            <el-col :span="5">
                <div class="bottom-box">
                    <div class="exhibition-viewer">
                        <SubTitle subTitle="搬迁安置进度统计"></SubTitle>
                        <p class="place-word">
                            安置点数量<span class="address-word cursor" :class="{'address-word1':activeIndex == 0}" @click="settleProgress(0)">20</span>个，安置实施人口<span class="address-word cursor">3696</span>人
                        </p>
                        <div style="width:400px;height:26vh;">
                            <echartsDoublePie :data1="doubleData1" :data2="doubleData2"></echartsDoublePie>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="cost-box">
                    <SubTitle subTitle="移民安置费用统计"></SubTitle>
                    <el-row style="margin-top: -10px;">
                        <el-col :span="18">
                            <p class="main-word" style="margin-left:150px;margin-top:0px;">
                                (总投资<span class="address-word cursor" :class="{'address-word1':activeIndex == 20}" @click="totalInvestment(20,formCost.year)">{{ actYearTotal.data }}万元</span>，投资完成百分比 <span
                                    class="address-word">{{costPercent}}%</span>，搬迁安置<span class="address-word">{{ actYearTotal.data2 }}人</span>)
                            </p>
                        </el-col>

                        <el-col :span="6">
                            <div class="mini-select" style="width: 80px;float: right;margin-right:40px;">
                                <div class="cell">
                                    <el-select v-model="formCost.year" @change="changeCostDate"
                                               popper-class="mini-popper" placeholder="请选择" size="mini">
                                        <el-option v-for="item in year" :key="item.value" :label="item.label"
                                                   :value="item.value"></el-option>
                                    </el-select>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="my-line-box">
                        <MyLine :dataArr="costDataArr" :dataArrPerson="personDataArr" v-if="refreshCost"></MyLine>
                    </div>
                </div>
            </el-col>
            <!-- 环形图  -->
            <el-col :span="5">
                <div class="engineering-box" style="position:relative;">
                    <SubTitle subTitle="工程项目建设情况"></SubTitle>

                    <div class="engineering_center" v-show="showPlace">
                        <p class="number">76</p>
                        <div class="font">总项目</div>
                    </div>
                    <echartsPie1 :pieData="pieData" style="height:calc(26vh );width:100%;margin-top:30px" :clickEvent="clickEvent"></echartsPie1>
                </div>
            </el-col>
            <!-- 表格 -->
            <el-col :span="4">
                <div class="land-box ">
                    <SubTitle subTitle="项目变更统计"></SubTitle>
                    <div class="project-statistics">
                        <div class="project-icon">
                            <p class="icon-item important"><span></span>重要变更项目</p>
                            <p class="icon-item"><span></span>一般变更项目</p>
                        </div>
                        <div class="project-percent">
                            <div class="percent-item">
                                <p class="project-num">项目个数(个)</p>
                                <div class="show-wrapper">
                                    <div class="show-item left" :style="{width: (projectObj.important.times/projectObj.total.times*100-1).toFixed(2)+'%'}"></div>
                                    <div class="show-item right" :style="{width: (projectObj.normal.times/projectObj.total.times*100-1).toFixed(2)+'%'}"></div>
                                </div>
                                <div class="num-wrapper">
                                    <p class="num-item left"><span></span>{{projectObj.important.times}}</p>
                                    <p class="num-item right"><span></span>{{projectObj.normal.times}}</p>
                                </div>
                            </div>
                            <div class="percent-item">
                                <p class="project-num">投资金额(万元)</p>
                                <div class="show-wrapper">
                                    <div class="show-item left" :style="{width: (projectObj.important.investmentAmount/projectObj.total.investmentAmount*100-1).toFixed(2)+'%'}"></div>
                                    <div class="show-item right" :style="{width: (projectObj.normal.investmentAmount/projectObj.total.investmentAmount*100-1).toFixed(2)+'%'}"></div>
                                </div>
                                <div class="num-wrapper">
                                    <p class="num-item left"><span></span>{{projectObj.important.investmentAmount}}</p>
                                    <p class="num-item right"><span></span>{{projectObj.normal.investmentAmount}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import TitleName from "@/components/TitleName"
    import SubTitle from "@/components/SubTitle"
    import myBar from "@/components/exhibitionBar"
    import echartsPie1 from "@/components/echartsPie1"
    import tableEle from "@/components/table.vue"
    import MyLine from "@/components/EchartsLine"
    import echartsDoublePie from "@/components/echartsDoublePie"

    export default {
        props: {
            isShowState: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        },
        components: {
            TitleName,
            SubTitle,
            myBar,
            tableEle,
            MyLine,
            echartsPie1,
            echartsDoublePie
        },
        computed: {
            costPercent() {
                return (this.actYearTotal.data / 431189.12 * 100).toFixed(2)
            }
        },
        data() {
            return {
                activeIndex:null,
                AllCostData: [],
                personDataArr: [],
                costDataArr: [],
                costAxis: [],
                top3Data: [],
                formCost: {
                    year: 2018,
                    month: 5
                },
                refreshCost: true,
                year: [],
                month: [
                    {
                        label: "1月",
                        value: 1
                    },
                    {
                        label: "2月",
                        value: 2
                    },
                    {
                        label: "3月",
                        value: 3
                    },
                    {
                        label: "4月",
                        value: 4
                    },
                    {
                        label: "5月",
                        value: 5
                    },
                    {
                        label: "6月",
                        value: 6
                    },
                    {
                        label: "7月",
                        value: 7
                    },
                    {
                        label: "8月",
                        value: 8
                    },
                    {
                        label: "9月",
                        value: 9
                    },
                    {
                        label: "10月",
                        value: 10
                    },
                    {
                        label: "11月",
                        value: 11
                    },
                    {
                        label: "12月",
                        value: 12
                    }
                ],
                exhibitionData: {
                    legendData: [],
                    xaisData: ["2013", "2014", "2015", "2016", "2017", "2018"],
                    seriesData: [
                        {
                            name: "2013",
                            type: "bar",
                            stack: "1",
                            itemStyle: {
                                normal: {
                                    color: "#0387ce"
                                }
                            },
                            barMaxWidth: 10,
                            data: [3000, 2000, 2000, 1000, 2000, 4000]
                        },
                        {
                            name: "2013",
                            type: "bar",
                            stack: "1",
                            itemStyle: {
                                normal: {
                                    color: "#a1bb38",
                                    barBorderRadius: 4
                                }
                            },
                            barMaxWidth: 10,
                            data: [3000, 2000, 2000, 1000, 2000, 4000]
                        },
                        {
                            name: "2014",
                            type: "bar",
                            stack: "2",
                            itemStyle: {
                                normal: {
                                    color: "#0387ce"
                                    //  barBorderRadius :4
                                }
                            },
                            barMaxWidth: 10,
                            data: [1000, 4000, 3400, 2578, 4908, 4000]
                        },
                        {
                            name: "2014",
                            type: "bar",
                            stack: "2",
                            itemStyle: {
                                normal: {
                                    color: "#a1bb38",
                                    barBorderRadius: 4
                                }
                            },
                            barMaxWidth: 10,
                            data: [1000, 4000, 3400, 2578, 4908, 4000]
                        }
                    ]
                },
                PopuAndFund: [
                    //data是资金，data2是人
                    {
                        year: 2013,
                        data: 16610.14,
                        data2: 0
                    },
                    {
                        year: 2014,
                        data: 75636.23,
                        data2: 941
                    },
                    {
                        year: 2015,
                        data: 125088.48,
                        data2: 1373
                    },
                    {
                        year: 2016,
                        data: 144708.96,
                        data2: 2084
                    },
                    {
                        year: 2017,
                        data: 219244.76,
                        data2: 3696
                    },
                    {
                        year: 2018,
                        data: 223703.32,
                        data2: 3696
                    },
                    {
                        year: 2019,
                        data: 232304.11,
                        data2: 3696
                    }
                ],
                actYearTotal: {},
                doubleData1: [{value: 610, name: "集中安置"}, {value: 320, name: "分散安置"}, {value: 210, name: "自谋职业"}],
                doubleData2: [
                    {value: 410, name: "签订合同"},
                    {value: 200, name: "未签合同"},
                    {value: 210, name: "签订合同"},
                    {value: 100, name: "未签合同"},
                    {value: 110, name: "签订合同"},
                    {value: 100, name: "未签合同"}
                ],
                pieData: [{value: 5, name: "前期阶段"}, {value: 19, name: "设计阶段"}, {value: 13, name: "招标阶段"}, {
                    value: 24,
                    name: "实施阶段"
                }, {value: 15, name: "验收阶段"}],
                tableData: [],
                AllTableData: [],
                showPlace: true,
                showPro: false,
                projectObj: {
                    normal: {
                        times: null,
                        investmentAmount: 0
                    },
                    important: {
                        times: null,
                        investmentAmount: 0
                    },
                    total: {
                        times: null,
                        investmentAmount: 0
                    }
                }
            }
        },
        watch: {
            isShowState(newVal, oldVal) {
                this.isShowState = newVal
            }
        },
        filters: {
            ArrLastValue(data) {
                return data.length > 0 ? data[data.length - 1] : 0
            }
        },
        mounted() {
            this.getCostDataByDate()
            this.getTableData()
            this.getProjectData();
            //排序
            this.pieData = this.pieData.sort(function (a, b) {
                return b.value - a.value
            })


        },
        methods: {
            // 点击工程项目建设情况
            clickEvent(val){
                 this.$parent.$options.parent.$refs.map.addPlanMoney(val); 
            },
            // 点击搬迁安置进度统计中的安置点数量
            settleProgress(index){
                this.activeIndex = index;
                 this.$parent.$options.parent.$refs.map.simulateMigration(index,"click");
            },
            // 点击移民安置费用统计总投资
            totalInvestment(invest,year){
                this.activeIndex = invest;
                 this.$parent.$options.parent.$refs.map.addproduction(invest,year);
            },
            dbBottom(val) {
                this.$emit("changeState", val)
            },
            getCostDataByDate() {
                this.axios.get("http://47.107.104.211:3988/api/ImpPlanning/Headsee").then(res => {
                    this.AllCostData = res.data.data
                    this.changeCostDate()
                })
            },
            getProjectData() {
                this.axios.get('json/projectData.json').then(
                    res => {
                        this.projectObj = this.calculateProjectData(res.data.data);
                    }
                )
            },
            calculateProjectData(arr) {
                const groupByTypeArr = arr.reduce((acc, obj) => {
                    let key = obj['changeType'];
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push(obj);
                    return acc;
                }, {});
                let returnObj = {
                    normal: {
                        times: groupByTypeArr['一般'].length,
                        investmentAmount: 0
                    },
                    important: {
                        times: groupByTypeArr['重大'].length,
                        investmentAmount: 0
                    },
                    total: {
                        times: arr.length,
                        investmentAmount: 0
                    }
                };
                for(let item of arr){
                    if(item.addBudgetFund !== null) {
                        returnObj.total.investmentAmount += item.addBudgetFund;
                    }
                }
                for (let item of groupByTypeArr['一般']) {
                    if (item.addBudgetFund !== null) {
                        returnObj.normal.investmentAmount += item.addBudgetFund;
                    }
                }
                for (let item of groupByTypeArr['重大']) {
                    if (item.addBudgetFund !== null) {
                        returnObj.important.investmentAmount += item.addBudgetFund;
                    }
                }

                return returnObj;
            },
            changeCostDate() {
                this.refreshCost = false
                var data = this.AllCostData
                var personData = [],
                    dateData = [],
                    year = "",
                    nowDate = this.formCost.year
                var yearData = [],
                    yearArr = []
                for (var i = 0; i < this.PopuAndFund.length; i++) {
                    if (this.PopuAndFund[i].year == this.formCost.year) {
                        this.actYearTotal = this.PopuAndFund[i]
                        break
                    }
                }
                for (var i = 0; i < data.length; i++) {
                    year = data[i].year
                    if (year == nowDate) {
                        dateData.push(data[i])
                    }
                    if (yearData.indexOf(data[i].year) < 0 && this.year.length == 0) {
                        yearData.push(data[i].year)
                        yearArr.push({
                            label: data[i].year + "年",
                            value: data[i].year
                        })
                    }
                }

                function sortYearValue(a, b) {
                    return b.value - a.value
                }

                var sortYear = yearArr.sort(sortYearValue)
                if (this.year.length == 0) {
                    this.formCost.year = sortYear[0].value
                    this.year = sortYear
                }
                var yearData1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                var yearData2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                this.costAxis = []
                this.costDataArr = []
                this.personDataArr = []
                var copyData = dateData
                var data = 0,
                    data2 = 0
                for (var j = 0; j < dateData.length; j++) {
                    data = dateData[j].data || 0
                    data2 = dateData[j].data2 || 0
                    yearData1[dateData[j].month - 1] = data
                    yearData2[dateData[j].month - 1] = data2
                    this.costAxis.push(dateData[j].type)
                }
                this.costDataArr = yearData1
                this.personDataArr = yearData2

                function sortData(a, b) {
                    return b.data - a.data
                }

                var datass = copyData.sort(sortData)
                this.top3Data = datass.slice(0, 3)
                this.$nextTick(_ => {
                    this.refreshCost = true
                })
            },
            //获取表格数据
            getTableData() {
                this.axios.get("http://47.107.104.211:3988/api/ImpChange/Query").then(res => {
                    if (res.data.data && res.data.data.length > 0) {
                        res.data.data.map(item => {
                            this.tableData.push({
                                name: item.name,
                                value: item.changeType,
                                addNum: item.addBudgetFund
                            })
                        })
                    }
                })
            },
            // 改变表头和第一列颜色
            getRowClass({row, column, rowIndex, columnIndex}) {
                if (rowIndex == 0) {
                    return "background: linear-gradient(#39a1df,#0f4c90);"
                } else {
                    return ""
                }
            },
            changeCellStyle({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0) return "background: #0e4a8a;"
            }
        }
    }
</script>
<style lang="scss" scoped>
    .bottom-bg {
        // display: flex;
        // justify-content: space-around;
        .land-box {
            .project-statistics {
                width: 100%;

                .project-icon {
                    margin-top: 24px;
                    display: flex;
                    align-content: center;
                    justify-content: flex-end;
                    padding: 0 22px;
                    margin-bottom: 18px;

                    .icon-item {
                        margin-left: 12px;
                        color: #ced7db;
                        font-size: 12px;

                        &.important > span {
                            background: linear-gradient(to right, #21c5f4, #0077e6);
                        }

                        span {
                            display: inline-block;
                            width: 24px;
                            height: 10px;
                            margin-right: 4px;
                            background: linear-gradient(to right, #05d8bd, #429669);

                        }
                    }
                }

                .project-percent {
                    margin: 0 22px;

                    .percent-item {
                        margin-bottom: 28px;

                        .project-num {
                            font-size: 12px;
                            color: #fff;
                            padding-bottom: 12px;
                        }

                        .show-wrapper {
                            padding: 4px;
                            border: 1px solid #1a5aa5;
                            border-radius: 28px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            .show-item {
                                height: 20px;
                                min-width: 1%;
                                &.left {
                                    background: linear-gradient(to right, #21c5f4, #0077e6);
                                    border-radius: 14px 0 0 14px;
                                    width: 79%;
                                }

                                &.right {
                                    background: linear-gradient(to right, #05d8bd, #429669);
                                    border-radius: 0 14px 14px 0;
                                    width: 19%;
                                }
                            }
                        }

                        .num-wrapper {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-top: 15px;

                            .num-item {
                                font-size: 20px;
                                font-weight: 500;

                                span {
                                    display: inline-block;
                                    width: 24px;
                                    height: 8px;
                                    margin-right: 4px;
                                    position: relative;
                                    top: -2px;
                                }

                                &.left {
                                    color: #0077e6;

                                    span {
                                        background: linear-gradient(to right, #21c5f4, #0077e6);
                                    }
                                }

                                &.right {
                                    color: #3f996d;

                                    span {
                                        background: linear-gradient(to right, #05d8bd, #429669);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .cursor {
        cursor: pointer;
    }

    .bottom-box {
        display: flex;

        .exhibition-viewer {
            padding: 0 0 0 20px;
            box-sizing: border-box;
            width: 300px;
            height: 314px;
        }
    }

    .main-word {
        color: #fff;
        font-size: 9px;
        line-height: 20px;
        margin-top: 16px;
    }

    .place-word {
        color: #fff;
        font-size: 12px;
        line-height: 20px;
        margin-top: 10px;
        // margin-left: 20px;
    }

    .address-word {
        font-size: 12px;
        color: #05ffd5;
        font-weight: bold;
    }

    .address-word1 {
        font-size: 12px;
        color: #f8f806;
        font-weight: bold;
    }

    .cursor {
        cursor: pointer;
    }

    .cost-box {
        margin-top: 5px;
    }

    .my-line-box {
        width: 100%;
        height: 28vh;
    }

    .engineering_center {
        position: absolute;
        top: 114px;
        left: 145px;
        text-align: center;

        .number {
            color: #fff;
            font-size: 32px;
            font-family: CityD-Medi;
            text-shadow: 8px 6px 5px #000;
        }

        .font {
            background: linear-gradient(left bottom, #ee9f64, #a15e70);
            height: 22px;
            width: 50px;
            border-radius: 10px;
            margin-left: 12px;
            margin-top: 4px;
            font-size: 8px;
            text-align: center;
            line-height: 22px;
            color: #fff;
        }
    }
</style>
