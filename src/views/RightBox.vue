<template>
  <div class="right-bg">
    <!-- 标题 -->
    <TitleName titleName="移民安置规划" @dblclick.native="dbBottom(2)"></TitleName>
    <!-- 文字 -->
    <div class="main-content">
      <div class="word-description">
        工程规划水平年搬迁安置移民
        <span
          class="stressWord"
          @click="getCurrentData(10)"
          :class="{wordChange:currentIndex==10}"
        >10375人</span>，其中水库淹没影响移民
        <span
          class="stressWord"
          @click="getCurrentData(11)"
          :class="{wordChange:currentIndex==11}"
        >9779人</span>，工程占地移民
        <span
          class="stressWord"
          @click="getCurrentData(12)"
          :class="{wordChange:currentIndex==12}"
        >596人</span>，规划建设
        <span
          class="stressWord"
          @click="getCurrentDataM(0)"
          :class="{wordChange:activeIndex==0}"
        >20个</span>移民集中安置点，其中集镇迁建安置点
        <span
          class="stressWord"
          @click="getCurrentDataM(1)"
          :class="{wordChange:activeIndex==1}"
        >4个</span>，农村集中安置点
        <span
          class="stressWord"
          @click="getCurrentDataM(2)"
          :class="{wordChange:activeIndex==2}"
        >16个</span>，规划水平年生产安置人口
        <span
          class="stressWord"
          @click="getCurrentDataP(0)"
          :class="{wordChange:produceIndex==0}"
        >9401人</span>，大农业安置
        <span
          class="stressWord"
          @click="getCurrentDataP(1)"
          :class="{wordChange:produceIndex==1}"
        >7805人</span>，自谋职业安置
        <span
          class="stressWord"
          @click="getCurrentDataP(2)"
          :class="{wordChange:produceIndex==2}"
        >1596人</span>。移民安置规划费用为
        <span
          class="stressWord"
          @click="getCurrentDataP(3)"
          :class="{wordChange:produceIndex==3}"
        >431189.12万元</span>。
      </div>
      <div class="bar-box">
        <SubTitle subTitle="搬迁安置"></SubTitle>
        <div class="relocation">
          <p class="migrat-word migrat-rial-w">农村搬迁人口</p>
          <p class="migrat-word migrat-city-w">集镇搬迁人口</p>
          <myBar
            :data="stackedBarData"
            :xaisData="xaisData"
            ref="relocationBar1"
            ids="relocationBar1"
            :legendData="legendData"
          ></myBar>
        </div>
        <div class="graphTable">
          <div class="produceSet">
            <SubTitle :subTitle="titleChange"></SubTitle>
            <div class="pie-word-box" v-show="isShowTotalNum">
              <p class="pie-text">{{currentTotalNum}}</p>
              <img src="img/totalPerson.png" alt />
            </div>
            <echartsSquare
              :data="produceData"
              ids="myPie2"
              ref="myPie2"
              :unit="unit"
              :isShowLegend="true"
              :isShowLine="false"
              style="margin:20px 0 0 -5px;height:100%;"
            ></echartsSquare>
          </div>
          <div class="tablebox">
            <SubTitle subTitle="移民安置点"></SubTitle>
            <div class="table-box">
              <template>
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%;margin-top:25px;"
                  :header-cell-style="getRowClass"
                  :cell-style="changeCellStyle"
                  :height="156"
                >
                  <el-table-column type="index" label="序号" width="30"></el-table-column>
                  <el-table-column prop="name" label="安置点名称"></el-table-column>
                  <el-table-column prop="country" label="区县"></el-table-column>
                  <el-table-column prop="type" label="类型"></el-table-column>
                </el-table>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleName from "@/components/TitleName";
import SubTitle from "@/components/SubTitle";
import myBar from "@/components/StackedBar";
import echartsSquare from "@/components/echartsSquare";
export default {
  components: {
    TitleName,
    SubTitle,
    myBar,
    echartsSquare
  },
  data() {
    return {
      currentIndex: null,//搬迁安置移民人数
      activeIndex: 2, //移民安置点的颜色切换
      produceIndex: 0, //生产安置点的颜色切换
      flagKey: null,
      xaisData: [],
      legendData: [],
      stackedBarData: [], //搬迁安置
      produceData: [], //生产安置数据
      tableData: [], //表格数据
      isShowTotalNum: true, //生产安置中间是否显示数字
      currentTotalNum: 0, //当前饼图的数据
      titleChange: "生产安置",
      unit: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getRecolationBarData(); //获取搬迁安置的数据
      this.getProduceData(0); // 生产安置数据
      this.getMigrantSetData("农村集中安置");
    });
  },
  methods: {
    // 改变表头和第一列颜色
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex == 0) {
        return "background: linear-gradient(#39a1df,#0f4c90);";
      } else {
        return "";
      }
    },
    changeCellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) return "background: #0e4a8a;";
    },
    //  获取表格数据
    getMigrantSetData(Type) {
      this.axios("json/resettlementSiteData.json").then(res => {
        if (res.data && res.data.length > 0) {
          this.tableData = res.data.filter(item => item.type == Type);
        }
      });
    },
    getCurrentDataM(itemVal) {
      this.activeIndex = itemVal;
      this.$parent.$options.parent.$refs.map.simulateMigration(itemVal,"");
      if (itemVal == 0) {
        this.axios("json/resettlementSiteData.json").then(res => {
          if (res.data && res.data.length > 0) {
            this.tableData = res.data;
            // this.$parent.$options.parent.$refs.map.addSitePoint(itemVal);
          }
        });
      } else if (itemVal === 1) {
        this.getMigrantSetData("集镇迁建安置");
        // this.$parent.$options.parent.$refs.map.addSitePoint(itemVal);
      } else if (itemVal == 2) {
        this.getMigrantSetData("农村集中安置");
        // this.$parent.$options.parent.$refs.map.addSitePoint(itemVal);
      }
    },
    // 显示隐藏模块
    dbBottom(val) {
      this.$emit("changeState", val);
    },
    // 点击搬迁安置移民与地图的交互
    getCurrentData(value) {
        this.currentIndex = value;
         this.$parent.$options.parent.$refs.map.addproduction(value,"");
    },
    // 点击生产安置人口数字切换地图
    getCurrentDataP(val) {
      this.produceIndex = val;
      if (val == 2) {
        this.$parent.$options.parent.$refs.map.addproduction(val,"");
      } else if (val == 3) {
        this.getProduceData(val);
        this.$parent.$options.parent.$refs.map.addPlanMoney("");
      } else {
        this.getProduceData(val);
        this.$parent.$options.parent.$refs.map.addproduction(val,"");
      }
    },
    getRecolationBarData() {
      this.axios("json/recolationBar.json").then(res => {
        let newArr = [];
        if (res.data && res.data.length > 0) {
          res.data.map(t => {
            if (t.type.indexOf("集镇") == -1) {
              newArr.push(t);
            }
          });
          let remainData = res.data.filter(a => a.type.indexOf("集镇") > -1);
          if (remainData && remainData.length > 0) {
            remainData.map(a => {
              newArr.push(a);
            });
          }
          // 计算
          let currentNum = [];
          newArr.map(item => {
            this.xaisData.push(item.type);
            this.xaisData = [...new Set(this.xaisData)];

            this.xaisData.map(c => {
              currentNum.push(c.indexOf("集镇"));
            });
          });
          currentNum = currentNum.filter(t => t >= 0);
          this.xaisData.splice(currentNum[0] + 1, 0, ""); //在集镇之前添加一个空字符串
          this.legendData = [...new Set(newArr.map(l => l.legend))]; //图例
          // 根据当前图例的类型，生成多个数组
          let obj = {};
          for (var k in this.legendData) {
            for (var j in newArr) {
              if (newArr[j].legend == this.legendData[k]) {
                obj[this.legendData[k]] = obj[this.legendData[k]] || [];
                obj[this.legendData[k]].push(newArr[j]);
              }
            }
          }
          // 把对象转成数组
          let newColArr = [];
          for (let v in obj) {
            newColArr.push(obj[v]);
          }
          for (let h = 0; h < newColArr.length; h++) {
            this.stackedBarData.push(
              this.xaisData.map(x => {
                let dataCol = newColArr[h].filter(u => u.type == x);
                if (dataCol && dataCol.length > 0) return dataCol[0].data;
                else return 0;
              })
            );
          }
          this.$refs.relocationBar1.initCharts();
        }
      });
    },
    // 生产安置数据
    getProduceData(currentGiveType) {
      this.produceData = [];
      this.isShowTotalNum = true;
      let currentGetParam = ""; //根据当前currentGiveType的值，即当前点击的数字，获取相应的数据
      this.titleChange = "";
      this.currentTotalNum = 0;
      this.unit = "";
      this.axios("json/produceSet.json").then(val => {
        if (currentGiveType == 0) {
          currentGetParam = "chartData1";
          this.isShowTotalNum = true;
          this.titleChange = "生产安置";
          this.unit = "人";
        } else if (currentGiveType == 1) {
          currentGetParam = "chartData2";
          this.isShowTotalNum = true;
          this.titleChange = "大农业安置";
          this.unit = "人";
        } else if (currentGiveType == 3) {
          currentGetParam = "PlanFundData";
          this.isShowTotalNum = false;
          this.titleChange = "移民安置规划";
          this.unit = "万元";
        }
        if (val.data[currentGetParam] && val.data[currentGetParam].length > 0) {
          val.data[currentGetParam].map(item => {
            this.produceData.push({
              name: item.type,
              value: item.data
            });
            this.currentTotalNum = this.currentTotalNum += item.data;
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main-content {
  padding: 16px 18px 0 14px;
  box-sizing: border-box;
  .word-description {
    font-family: MicrosoftYaHei;
    font-size: 9px;
    color: #f8f6f8;
    line-height: 18px;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    .stressWord {
      font-size: 12px;
      color: #05ffd5;
      font-weight: bold;
      cursor: pointer;
    }
    .wordChange {
      color: #f8f806;
    }
  }
  .bar-box {
    margin-top: 20px;
    .relocation {
      width: 412px;
      height: 200px;
      margin-left: 30px;
      position: relative;
      .migrat-word {
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #abb3be;
        position: absolute;
        top: 40px;
      }
      .migrat-rial-w {
        left: 100px;
      }
      .migrat-city-w {
        left: 320px;
      }
    }
  }
  .graphTable {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .produceSet {
      width: 255px;
      // height: 160px;
      position: relative;
      .pie-word-box {
        position: absolute;
        top: 98px;
        left: 90px;
        text-align: center;
        .pie-text {
          color: #fff;
          font-size: 32px;
          font-family: "CityD-Medi";
          width: 76px;
          margin-bottom: 10px;
          text-shadow: 5px 6px 5px #000;
        }
      }
    }
    .tablebox {
      width: 280px;
      height: 160px;
    }
  }
}
</style>