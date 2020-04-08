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
				    'value': 5600
				}, {
				    'name': '上海',
				    'value': 5600
				}, {
				    'name': '广州',
				    'value': 1500
				}]
			}
		},
		methods:{
			initPie(id,data){
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
				        shadowBlur: 20,
				        color: 'rgba(0, 0, 0, 0)',
				        borderColor: '#303439',
				        borderWidth: 6
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
				            normal: {
				                label: {
				                    show: false,
				                    position: 'center'
				                },
				                
				                labelLine: {
				                    show: false
				                },
				                borderWidth: 6,
//				                shadowBlur: 20,
				                borderColor: color[i],
//				                shadowColor: 'rgba(142,152,241, 0.6)'
				            }
				        },
				        hoverAnimation: false,
				        data: [{
				            value: data[i].value
				        }, {
				            value: data[0].value - data[i].value,
				            name: 'invisible',
				            itemStyle: placeHolderStyle
				        },
				        {
				            value: data[0].value/3,
				            name: 'invisible',
				            itemStyle:{
				            normal: {
				                label: {
				                    show: false,
				                    position: 'center'
				                },
				                labelLine: {
				                    show: false
				                },
				                color: 'rgba(0, 0, 0, 0)',
				                borderColor: 'rgba(0, 0, 0, 0)',
				                borderWidth: 0
				            } 
				        
				            }
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
			this.initPie(this.ids,this.data);
		},
		watch:{
			data:{
				handler(newVal,oldVal){
					this.data = newVal;
					this.initPie(this.ids,this.data);
				},
				deep:true
			}
		}
	}
</script>

<style>
</style>