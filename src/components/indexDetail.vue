<template>
	<div class="park-total">

		<div class="CarTotal">
			<el-row :gutter="15">
				<el-col :span="8">
					<percent-pie ids="myCar" class="percent" :data="carTotal" :total="886" unit=""></percent-pie>
					<p>{{carTotal[0].name}}</p>
				</el-col>
				<el-col :span="8">
					<percent-pie ids="carEd" class="percent"  :data="carEd" :total="886" unit=""></percent-pie>
					<p>{{carEd[0].name}}</p>
					
				</el-col>
				<el-col :span="8">
					<percent-pie ids="caring" class="percent"  :data="caring" :total="886" unit=""></percent-pie>
					<p>{{caring[0].name}}</p>
				</el-col>
			</el-row>
		</div>
		<img src="img/title/park-cwsytj.png"/>
		<div class="barTotal">
			<bar-total ids="bartotal" :data="carTotalData"></bar-total>
		</div>
		<img src="img/title/park-zscltj.png"/>
		<div class="barTotal">
			<myLine ids="myLine" :data="carTotalHour"></myLine>
		</div>
	</div>
</template>

<script>
	import percentPie from './percent'
	import barTotal from './barTotal'
	import myLine from './line'
	export default{
		components:{
			percentPie,
			barTotal,
			myLine
		},
		data(){
			return{
				carTotalData:{
					title:"逐日车流统计",
					data:[645,745,652,768,511,774,656],
					dataAxis:['周一','周二','周三','周四','周五','周六','周七'],
					unit:'个',
					total:886,
					legend:['已使用车位','剩余车位']
				},
				carTotalHour:{
					title:"逐时车流统计",
					data:[755,745,722,768,751,774],
					dataAxis:['4/hr','8/hr','12/hr','16/hr','20/hr','24/hr'],
					unit:'辆',
					total:886
				},
				carTotal:[{
				    'name': '公里总里程',
				    'value': 886
				}],
				carEd:[{
				    'name': '监控点数量',
				    'value': 725
				}],
				caring:[{
				    'name': '测速点数量',
				    'value': 161
				}],
			}
		}
	}
</script>
<style scoped="scoped" lang="scss">
	.park-total{padding-top: 0;}
	.park-total li{
	    width: 50%;
	    display: inline-block;
	    margin-left: -4px;
	    box-sizing: border-box;
	    padding-left: 0;
	}
	.park-total li:last-of-type big{
		font-size: 36px;
	}
	.CarTotal{
		margin: 10px 0 40px;
		width: 100%;
		height: auto;
		p{
			font-size:17px;
			color: #FFFFFF;
			text-align: center;
		}
	}
	.carText{
		display: inline-block;
		width: 145px;
		padding-left: 40px;
		box-sizing: border-box;
	 	li{
	        list-style: none;
	        text-align: left;
	        position: relative;
	        width: 100%;
	        margin-bottom: 20px;
	        p{
	            margin: 0;
	            font-size:18px;
	            color: #FFFFFF;
	        }
	        big{
	            background: linear-gradient(to top,#0072ff, #00c0ff);
	            -webkit-background-clip: text;
	            color: transparent;
	            font-size: 36px;
	            line-height: 40px;
	            font-family: "DINOT";   
	             font-weight: bold;
	        }
	        small{
	            font-size: 16px;
	            padding-left: 10px;
	            color:#a8a8a8;
	        }
	        
	    }
	}
	.percent{
		height: 150px!important;
	}
	.barTotal{
		height: 280px;
	}
</style>