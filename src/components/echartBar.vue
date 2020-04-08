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
					dataAxis:[]
				}
			},
		},
		data(){
			return{
				
			}
		},
		methods:{
			setEcharts( data, dataAxis, myChart,unit) {
				let echarts=this.$echarts;
				var dataShadow = [];
				var option = {
					title: {
						show:false,
					},
					tooltip: {
						trigger: 'item',
				        // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				        //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        // }
					},
					grid: {
						left: 60,
						right: 0,
						top: '40px',
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
							fontSize:18,
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
						min: function(value) {
						    return value.min - 2;
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
							type: 'bar',
							barGap: '-100%',
							barWidth:16,
							label:{
								normal: {
									show:true,
									position:'top',
									formatter:['{a|{c}}','{u|'+unit+'}'].join(' '),
									rich: {
								        a: {
								            color: '#0084ff',
								            fontSize:20,
								            fontWeight:'bolder',
								            fontFamily:'DINOT',
								        	 verticalAlign:'bottom'
								        },
								        u: {
								        	 color: '#0199f5',
								        	 fontSize:12,
								        	 verticalAlign:'bottom'
								        },
								    }
								},
								emphasis: {
									show:true,
									formatter:['{a|{c}}','{u|'+unit+'}'].join(' '),
									rich: {
								        a: {
								            color: '#00ffa2',
								            fontSize:20,
								            fontWeight:'bolder',
								            fontFamily:'DINOT',
								        	 verticalAlign:'bottom'
								        },
								        u: {
								        	 color: '#00ccb9',
								        	 fontSize:12,
								        	 verticalAlign:'bottom'
								        },
								    }
								}
							},
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
						}
					]
				};
				myChart.setOption(option);
			},
			initBar(){
				let initids=this.$echarts.init(document.getElementById(this.ids));
				this.setEcharts(this.data.data, this.data.dataAxis, initids,this.data.unit);
			}
		},
		watch:{
			
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