<template>
    <div class="left-bg">
        <TitleName titleName="工程淹没影响" @dblclick.native="dbBottom(1)"></TitleName>
        <div class="main-cont">
            <p class="main-word">
                引汉济渭调水工程移民安置工作涉及
                <span class="address-word cursor" @click="getCity">西安、汉中、安康3市</span>的 <span class="address-word cursor" @click="getCounty">周至、洋县、佛坪、宁陕4县</span>，涉及
                <span class="address-word cursor" :class="{ wordChange: activeIndex == 0 }" @click="getDataInMap(0)">15个乡镇、</span>
                <span class="address-word cursor" :class="{ wordChange: activeIndex == 1 }" @click="getDataInMap(1)">77个行政村、</span>
                119个村民小组，工程建设征地总面积 <span class="address-word cursor" :class="{ wordChange: activeIndex == 2 }" @click="getDataInMap(2)">7.83万亩</span>其中永久征地
                <span class="address-word cursor" :class="{ wordChange: activeIndex == 3 }" @click="getDataInMap(3)">7.15万亩</span>
                临时征地
                <span class="address-word cursor" :class="{ wordChange: activeIndex == 4 }" @click="getDataInMap(4)">0.68万亩</span>。
            </p>
            <!-- 饼图 -->
            <div class="title-tips">
                <SubTitle subTitle="工程征地面积"></SubTitle>
            </div>
            <echartsPie :data="landAreaData" style="height:150px;width:100%;" ref="mychild"></echartsPie>

            <div class="main-table">
                <p class="main-word">
                    引汉济渭调水工程淹没影响总
                    <span class="address-word cursor " :class="flag ? 'wordChange' : 'address-word'" @click="getCurrentData(5)">人口为9756人</span>，
                    <span class="address-word cursor" :class="flag == false ? 'wordChange' : 'address-word'" @click="getCurrentData(7)">房屋694579平方米</span
                    >，集镇4个，等级公路98.04km，输电线路115.32km，通讯线路546.37km，企业6家，文明古迹11处，水电站8处。
                </p>
                <div class="tablebar-box">
                    <!-- 环形 -->
                    <div>
                        <div class="title-tips">
                            <SubTitle :subTitle="titleChange"></SubTitle>
                        </div>
                        <echartsRing :data="PieMoreData" style="width:100%;height:170px;" class="ring-box" ref="peoplePie"></echartsRing>
                    </div>
                    <!-- 表格 -->
                    <div>
                        <div class="title-tips">
                            <SubTitle subTitle="工程征地面积"></SubTitle>
                        </div>
                        <div class="table-box">
                            <template>
                                <el-table :data="tableData" border style="width: 100%;margin-top:40px;" :header-cell-style="getRowClass" :cell-style="changeCellStyle" :height="125">
                                    <el-table-column prop="stage" label="阶段" width="30"></el-table-column>
                                    <el-table-column prop="people" label="人口（个）" width="100"></el-table-column>
                                    <el-table-column prop="land" label="土地（亩）"></el-table-column>
                                    <!-- <el-table-column prop="house" label="房屋（㎡）"></el-table-column> -->
                                </el-table>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TitleName from "@/components/TitleName"
import echartsPie from "@/components/echartsPie.vue"
import echartsRing from "@/components/echartsRing"
import tableEle from "@/components/table.vue"
import SubTitle from "@/components/SubTitle"
export default {
    components: {
        TitleName,
        echartsPie,
        echartsRing,
        tableEle,
        SubTitle
    },
    data() {
        return {
            landAreaData: [],
            PieMoreData: [],
            tableData: [
                {
                    stage: "初设",
                    people: 9756,
                    land: 78297
                    // house: 694579
                },
                {
                    stage: "可研",
                    people: 8965,
                    land: 71472
                    // house: 689545
                },
                {
                    stage: "实施",
                    people: 8835,
                    land: 71356
                    // house: 678595
                }
            ],
            activeIndex: null,
            titleChange: "受影响人口",
            flag: true
        }
    },
    created() {
        this.getLandData()
        this.getPeopleData()
    },
    methods: {
        //获取饼图数据
        getLandData() {
            this.landAreaData = []
            this.axios("json/projectLand.json").then(res => {
                if (res.data && res.data.length > 0) {
                    res.data.map(item => {
                        this.landAreaData.push({
                            name: item.type,
                            value: item.data
                        })
                    })
                    this.$refs.mychild.initEcharts()
                }
            })
        },
        //获取环形数据
        getPeopleData() {
            this.PieMoreData = []
            this.axios("json/influencePeople.json").then(res => {
                // debugger
                if (res.data.peopleData && res.data.peopleData.length > 0) {
                    res.data.peopleData.map(item => {
                        this.PieMoreData.push({
                            name: item.type,
                            value: item.data
                        })
                    })
                    this.$refs.peoplePie.initEcharts()
                }
            })
        },
        //受影响人口切换
        getCurrentData(val) {
            if (val == 5) {
                this.flag = true
                this.titleChange = "受影响人口"
                this.PieMoreData = []
                this.axios("json/influencePeople.json").then(res => {
                    if (res.data.peopleData && res.data.peopleData.length > 0) {
                        res.data.peopleData.map(item => {
                            this.PieMoreData.push({
                                name: item.type,
                                value: item.data
                            })
                        })
                        this.$refs.peoplePie.initEcharts()
                    }
                })
             this.$parent.$options.parent.$refs.map.addPeopleInfo('people')
            } else if (val == 7) {
                this.flag = false
                this.titleChange = "受影响房屋"
                this.PieMoreData = []
                this.axios("json/influencePeople.json").then(res => {
                    if (res.data.houseData && res.data.houseData.length > 0) {
                        res.data.houseData.map(item => {
                            this.PieMoreData.push({
                                name: item.type,
                                value: item.data
                            })
                        })
                        this.$refs.peoplePie.initEcharts()
                    }
                })
                 this.$parent.$options.parent.$refs.map.addHouseInfo('house')
            }
        },

        // 显示隐藏模块
        dbBottom(val) {
            this.$emit("changeState", val)
        },
        //点击数字出现地图效果
        getCity() {},
        getCounty() {},
        getDataInMap(val) {
            this.activeIndex = val
            if (val == 0) {
                this.$parent.$options.parent.$refs.map.addCountyHamlet('county')
                // console.log(this.$parent.$options.parent.$refs.map);
            }else if( val == 1){
               this.$parent.$options.parent.$refs.map.addCountyHamlet('hamlet') 
            }else if ( val ==2 ){
                this.$parent.$options.parent.$refs.map.addLandInfo('allArea')
            }else if (val == 3 ){
                this.$parent.$options.parent.$refs.map.addLandInfo('foreverArea')
            }else if(val == 4){
                this.$parent.$options.parent.$refs.map.addLandInfo('temporaryArea')

            }
        },
        // 改变表头和第一列颜色
        getRowClass({ row, column, rowIndex, columnIndex }) {
            if (rowIndex == 0) {
                return "background: linear-gradient(#39a1df,#0f4c90);"
            } else {
                return ""
            }
        },
        changeCellStyle({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) return "background: #0e4a8a;"
        },
        peopleNum() {}
    }
}
</script>
<style lang="scss" scoped>
.left-bg {
    /* 左侧内容 */
    .contentBox {
        position: absolute;
        border: 1px solid #0c3151;
        border-radius: 6px;
        height: 740px;
        width: 450px;
        z-index: 9999;
        top: 60px;
    }
    .left-container {
        left: 6px;
    }
    .right-container {
        right: 6px;
    }
    /* 中间内容 */
    #map {
        position: absolute;
        top: 60px;
        left: 480px;
        height: 740px;
        width: calc(100% - 960px);
        border: 1px solid #0c3151;
    }
    /* 右侧内容 */
    .main-cont {
        padding: 10px;
        box-sizing: border-box;
        margin-top: 10px;
    }
    .main-title {
        margin: 0 auto;
        width: 194px;
        text-align: center;
        padding: 6px 20px;
        box-sizing: border-box;
        background: url("../assets/img/title-bg.png") no-repeat;
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
    .main-word {
        color: #fff;
        font-size: 12px;
        line-height: 20px;
    }
    .title-tips {
        margin-top: 20px;
        color: #fff;
    }
    .icon-title {
        width: 3px;
        height: 10px;
        margin-right: 4px;
        display: inline-block;
        background: url("../assets/img/icon-line.png") no-repeat;
    }
    .title-tips label {
        color: #fff;
    }
    .main-table {
        margin-top: 20px;
    }
    .main-link {
        color: #d2d81e;
        font-size: 16px;
        text-decoration: underline;
    }
    .tablebar-box {
        // height: 300px;
        display: flex;
        justify-content: space-around;
    }
    .tablebar-box > div {
        width: 46%;
    }
    .tablebar-box > div:first-child {
        margin-right: 20px;
    }
}
.address-word {
    font-size: 9px;
    color: #05ffd5;
    font-weight: bold;
}
.wordChange {
    color: #f8f806;
}
.wordChange1 {
    color: #f8f806;
}
.cursor {
    cursor: pointer;
}
.table-box {
    margin-top: 40px;
}
.ring-box {
    margin-top: 10px;
}
</style>