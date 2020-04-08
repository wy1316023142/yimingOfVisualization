<template>
	<div class="right-park-total right-park">
		<div class="areaContainer"> 
		  <!-- <p class="areaText">功能区划分</p>          -->
          <div class="areaBox">
            <p
              v-for="(item,index) in areaList"
              :key="index"
              :class="{isSelArea:item.name == currentSelApart}"
              @click="selCurrentApart(item)"
            >{{item.name}}</p>
          </div>
        </div>
		<img src="img/title/park-dzsp.png"/>

		<div class="warning">
			<div class="video">
				<img src="img/timg (2).gif" width="420" height="295"/>
			</div>
			<el-row :gutter="3" class="video-list">
				<el-col :span='8' class="relative">
					<img src="img/timg (2).gif" height="75" style="width: 100%;"/>
					<i>A区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg (4).gif" height="75" style="width: 100%;"/>
					<i>B区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg (7).gif" height="75" style="width: 100%;"/>
					<i>C区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg.gif" height="75" style="width: 100%;"/>
					<i>D区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg (2).gif" height="75" style="width: 100%;"/>
					<i>E区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg (4).gif" height="75" style="width: 100%;"/>
					<i>F区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg (7).gif" height="75" style="width: 100%;"/>
					<i>A区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg.gif" height="75" style="width: 100%;"/>
					<i>B区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg (2).gif" height="75" style="width: 100%;"/>
					<i>C区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg.gif" height="75" style="width: 100%;"/>
					<i>D区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg (4).gif" height="75" style="width: 100%;"/>
					<i>E区</i>
				</el-col>
				<el-col :span='8' class="relative">
					<img src="img/timg (2).gif" height="75" style="width: 100%;"/>
					<i>F区</i>
				</el-col>
			</el-row>
		</div>
	</div>
	
</template>

<script>
	import percentPie from './percentPie'
	export default{
		components:{
			percentPie
		},
		data(){
			return{
				currentSelApart:null,
				areaList: [
        			{ name: "高速公路" },{ name: "飞行" } ],
				carTotal:[{
				    'name': '今日总充值',
				    'value': 524
				}, {
				    'name': '今日总消费',
				    'value': 339
				}, {
				    'name': '今年累计充值',
				    'value': 185
				}, {
				    'name': '今年累计消费',
				    'value': 185
				}],
				warnData:[{
					icon:"icon-user-act",
					title:'人脸识别系统',
					status:'正常'
				},{
					icon:"icon-earth-act",
					title:'地震预警',
					status:'正常'
				},{
					icon:"icon-percen-act",
					title:'人群聚集预警',
					status:'正常'
				},{
					icon:"icon-anfang-act",
					title:'红外线安防预警',
					status:'正常'
				},{
					icon:"icon-elevator-act",
					title:'电梯预警',
					status:'正常'
				},{
					icon:"icon-firesave-act",
					title:'消防预警',
					status:'正常'
				},{
					icon:"icon-watersave-act",
					title:'水电气系统预警',
					status:'正常'
				}]
			}
		},
		methods:{
			 // 功能区域划分的选中事件
    selCurrentApart(val) {
    //   debugger
	//   this.currentSelApart = val.name;
	         
      if (this.$parent.$parent.$refs.map) {		  
          this.$parent.$parent.$refs.map.selCurrentApart(val.name);
      }
    },
		}
	}
</script>
<style scoped lang="scss">

   // 功能区划分
  .areaContainer{
    .areaText{
      font-size: 20px;
      height: 30px;
      font-family: PingFang-SC-Bold;
      color: #fff;
    //   background: url('img/line06.png') no-repeat right bottom;
    }
    .areaBox{
      margin: 20px 0  0;
      display: flex;
      flex-wrap: wrap;
      cursor: pointer;
      p{
        width: 126px;
        box-sizing: border-box;
        background-color: rgba(0, 210, 255, 0.1);
        border: solid 1px rgba(0, 210, 255, 0.5);
        font-size: 16px;
        text-align: center;
        color: #00d2ff;
        font-weight: bold;
        font-family: MicrosoftYaHei-Bold;
        padding: 12px 14px;
        margin-bottom: 10px;
      }
      &>p:not(:nth-of-type(3n+3)){
        margin-right: 10px;
      }
      .isSelArea{
        color: #00f6d2;
        background-color: rgba(0, 246, 210, 0.1);
	      border: solid 1px rgba(0, 246, 210, 0.5);
      }
    }
  }
</style>
