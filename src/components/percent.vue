<template>
	<div style="height:100%;" :id="ids">

	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			ids:{
				default:'percentPie'
			},
			data:{
				default:[{
				    'name': '北京',
				    'value': 100
				}, {
				    'name': '上海',
				    'value': 80
				}, {
				    'name': '广州',
				    'value': 20
				}]
			},
			total:{
				default:10
			},
			unit:{
				default:function(){
					return '个'
				}
			}
		},
		methods:{
			initPie(id,data,total){
				let seriesObjs = [];
				let r = document.getElementById(id).clientWidth/2 - 10;
				let color = ['#0275cc', '#46a934', '#00c2ff'];
				let placeHolderStyle = {
				    normal: {
				        label: {
				            show: false,
				            position: 'center'
				        },
				        labelLine: {
				            show: false
				        },
//				        shadowBlur: 20,
				        color: 'rgba(0, 0, 0, 0)',
				        borderColor: '#303439',
				        borderWidth: 6
				    },
				    emphasis: {
				    	label:{
						show: false
						}
					}
				}
				for (let i = 0; i < data.length; i++) {
				    //            legendData.push(data[i].name)
				    let seriesObj = {
				        name: data[i].name,
				        type: 'pie',
				        clockWise: false,
				        radius: [r - i * 20, r - i * 20],
				        itemStyle: {
			        		label:{
			        			
			        		},
			                labelLine: {
			                    show: false
			                },
			                borderWidth: 6,
//				                shadowBlur: 20,
			                borderColor: {
							   type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 1,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: '#00ccff' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#006cff' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
							},
//				                shadowColor: 'rgba(142,152,241, 0.6)'
				        },
				        hoverAnimation: false,
				        data: [{
				            value: data[i].value,
				            label:{
				            	 normal: {
									show: true,
									position: 'center',
									color:'#ffff',
									fontSize:18,
									 formatter: [
									        '{a|{c}}','{b|'+this.unit+'}'
	
									    ].join('\n'),
									    rich: {
									        a: {
									            color: '#fff',
									            lineHeight: 40,
									            fontSize:32,
									            padding:[0,0,10,5],
									            fontWeight:'normal',
									            fontFamily:'DINOT'
									        },
									        b: {
									        	color:"#fff",
												fontSize: 16,
												padding:[0,0,10,5]
									        },
									        x: {
									            fontSize: 18,
									            fontFamily: 'Microsoft YaHei',
									            color:"#fff"
									        }
									}
								}
				            }
				        }, {
				            value: total - data[i].value,
				            name: 'invisible',
				            itemStyle: placeHolderStyle
				        }]
				    }
				    seriesObjs.push(seriesObj)
				}
				var option = {

				    tooltip: {
				        show: false,
				        formatter: '{a} : {c}'
				    },
				    legend: {
				        show: false
				    },
				    toolbox: {
				        show: false
				    },
				    series: seriesObjs
				}
				var myChartPie = this.$echarts.init(document.getElementById(id));
				myChartPie.setOption(option);
			}
		},
		mounted(){
			this.initPie(this.ids,this.data,this.total);
		},
		watch:{
			data:{
				handler(newVal,oldVal){
					this.data = newVal;
					this.initPie(this.ids,this.data,this.total);
				},
				deep:true
			}
		}
	}
</script>

<style>
</style>