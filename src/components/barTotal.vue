<template>
	<div style="height:100%;" :id="ids">

	</div>
</template>

<script>
	export default{
		props:{
			ids:{
				type:String,
				default:"bar"
			},
			data:{
				default:{
					title:"",
					data:[],
					dataAxis:[],
					unit:'个',
					total:100,
					legend:[]
				}
			},
		},
		data(){
			return{
				
			}
		},
		methods:{
			setEcharts(myChart) {
				let echarts=this.$echarts;
				let unit=this.data.unit||"",
				data=this.data.data,
				dataAxis=this.data.dataAxis,totalArr=[];
				var dataShadow = [];
				data.forEach(item=>{
					totalArr.push(this.data.total-item)
				})
				let legend=this.data.legend
				var option = {
					title: {
						show:false,
					},
					legend:{
						right:0,
						top:10,
						show:true,
						data:legend,
						itemWidth:10,
						itemHeight:10,
						textStyle:{
							color:'#fff',
							fontSize:16
						}
					},
					tooltip: {
						trigger: 'axis',
				         axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				             type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
				             shadowStyle:{
				             	color:'rgba(0,0,0,.0)'
				             }
				         },
//				         +legend[0]+this.data.total+unit+'<br />'
				         formatter:'{b}<br />'+legend[0]+': {c0}'+unit+'<br />'+legend[1]+': {c1}'+unit,
				   
				         confine:true,
				         backgroundColor:'rgba(17,22,26,.8)',
				         borderColor:"#0462d9",
				         borderWidth:1,
				         extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
					},
					grid: {
						left: 60,
						right: 0,
						top: '50px',
						bottom: "50px",
						show: false
					},
					xAxis: {
						data: dataAxis,
						axisLabel: {
							textStyle: {
								color: '#fff',

							},
						},
						axisTick: {
							show: false
						},
						z: 10,
						axisLabel:{
							color:'#fff',
							fontSize:16,
							interval:0
						},
						axisLine: {
							lineStyle:{
								color:'rgba(58,78,105,.8)'
							}
						}
					},
					yAxis: {
						splitNumber:3,
						
				        nameGap:30,
						axisTick: {
							show: true
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff',
								fontSize:18
							}
						},
						splitLine: {
							show: false,
						},
						axisLine: {
							lineStyle:{
								color:'rgba(58,78,105,.8)'
							}
						},
						
					},
					dataZoom: [{
						type: 'inside'
					}],
					series: [
						{
							stack:'tatal',
							type: 'bar',
							name:legend[0],
							barWidth:16,
							itemStyle: {
								normal: {
									barBorderRadius: [3, 3, 0, 0],
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [
											{ offset: 0, color: '#00c6ff'},
											{ offset: 1, color: '#006cff'}
										]
									)
								},
								emphasis: {
									barBorderRadius: [3, 3, 0, 0],
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [
											{ offset: 0, color:'#00ff90' },
											{ offset: 1, color: '#0084f3'}
										]
									)
								}
							},
							data: data
						},
						{
							stack:'tatal',
							type: 'bar',
							barWidth:16,
							name:legend[1],
							itemStyle: {
								normal: {
									barBorderRadius: [3, 3, 0, 0],
									color: 'rgba(30,103,164,.5)'
								},
								emphasis: {
									barBorderRadius: [3, 3, 0, 0],
									color:'rgba(30,164,137,.5)'
								}
							},
							data: totalArr
						}
					]
				};
				myChart.setOption(option);
			},
			initBar(){
				let initids=this.$echarts.init(document.getElementById(this.ids));
				this.setEcharts(initids);
			}
		},
		watch:{
			data:{
				handler(newVal,oldVal){
					this.data = newVal;
					this.setEcharts(initids);
				},
				deep:true
			}
		},
		created(){
			
		},
		mounted(){
			this.$nextTick(()=>{
				this.initBar();
			})
		},
		destoryed(){
			
		}
	}
</script>

<style>
</style>