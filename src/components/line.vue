<template>
	<div style="height:100%;" :id="ids">

	</div>
</template>

<script>
	export default{
		props:{
			ids:{
				type:String,
				default:"echartline"
			},
			data:{
				default:{
					title:"",
					data:[],
					dataAxis:[]
				}
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			setEcharts( data, dataAxis,unit) {
				let echarts=this.$echarts;
				var dataShadow = [];
				var option = {
					title: {
						show:false,
					},
					tooltip : {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross',
				            label: {
				                backgroundColor: '#0084ff',
				                fontSize:20
				            }
				        }
				    },
				    xAxis: {
				        type: 'category',
				        data: dataAxis,
				         boundaryGap: false,
				         axisTick: {
							show: false
						},
						splitLine: {
							show:true,
							lineStyle:{
								color:'rgba(255,255,255,.05)'
							}
						},
						axisLine: {
							lineStyle:{
								color:'rgba(255,255,255,.05)'
							}
						},
						axisLabel:{
							color:'#fff',
							fontSize:18,
							interval:0
						}
				    },
				    yAxis: {
				        type: 'value',
				        name:unit,
				        splitNumber:3,
				        nameGap:30,
//				        min: function(value) {
//						    return value.min - 20;
//						},
						axisTick: {
							show: false
						},
						splitLine:{
							show:false
						},
						axisLine: {
							show: false
						},
						axisLabel:{
							color:'#fff',
							fontSize:18
						}
				    },
					grid: {
						left: 60,
						right: 30,
						top: '40px',
						bottom: "50px",
						show: false
					},
				    series: [{
				    	symbol:'none',
				    	symbolSize:0,
				        data: data,
				        type: 'line',
				        areaStyle:{
				        	normal:{
				        		color: {
								    type: 'linear',
								    x: 0,
								    y: 0,
								    x2: 1,
								    y2: 0,
								    colorStops: [{
								        offset: 0, color: 'rgba(0,192,255,.5)' // 0% 处的颜色
								    }, {
								        offset: 1, color: 'rgba(0,114,255,0.5)' // 100% 处的颜色
								    }],
								    globalCoord: false // 缺省为 false
								}
							}			
						},
						lineStyle:{
							color: {
							    type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 1,
							    y2: 0,
							    colorStops: [{
							        offset: 0, color: 'rgba(0,192,255,1)' // 0% 处的颜色
							    }, {
							        offset: 1, color: 'rgba(0,114,255,1)' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
							}
						},
				        smooth: true
				    }]
				};

				let myChart=this.$echarts.init(document.getElementById(this.ids))
				myChart.setOption(option);

			}
		},
		watch:{
			data:{
				handler(newVal,oldVal){
					this.data = newVal;
					this.setEcharts(this.data.data,this.data.dataAxis,this.data.unit);
				},
				deep:true
			}
		},
		created(){
			
		},
		mounted(){
			this.setEcharts(this.data.data,this.data.dataAxis,this.data.unit);
		},
		destoryed(){
			
		}
	}
</script>

<style>
</style>