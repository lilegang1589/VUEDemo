<template>
  <div class="__content" style="background:#001529">
    <div id="chartPanel" ref="chartPanel" style="width:100%;height:400px;margin-top:50px;"></div>
  </div>
</template>

<script>
import echarts from "echarts"
export default {
 data() {
  return {
    chartPanel:null,
    option:{},
    sudu:[{value:20,name:'km/h'}],
    zhuansu:[{value:50,name:'x1000 r/min'}],
    gas:[{value:70,name:'gas'}],
    water:[{value:1.5,name:'water'}],
  }
 },
 components: {

 },
 methods:{
   refreshCharts(){
      this.chartPanel = echarts.init(this.$refs['chartPanel']);
      this.chartPanel.setOption(this.option);
      this.option={   
            backgroundColor: '#001529',
            tooltip : {
                formatter: "{a} <br/>{c} {b}"
            },
            series : [
                {
                    name:'速度',
                    type:'gauge',
                    min:0,
                    max:220,
                    splitNumber:11,
                    radius: '50%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                            width: 3,
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length :15,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: {           // 分隔线
                        length :25,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:3,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {           // 分隔线
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title : {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 20
                        }
                    },
                    detail : {
                        backgroundColor: 'rgba(30,144,255,0.8)',
                        borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5,
                        offsetCenter: [0, '50%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff'
                        }
                    },
                    data:this.sudu
                },
                {
                    name:'转速',
                    type:'gauge',
                    center : ['35%', '55%'],    // 默认全局居中
                    radius : '40%',
                    min:0,
                    max:7,
                    endAngle:45,
                    splitNumber:7,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                            width: 2,
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length :12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: {           // 分隔线
                        length :20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:3,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width:5,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title : {
                        offsetCenter: [0, '-30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail : {
                        //backgroundColor: 'rgba(30,144,255,0.8)',
                    // borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5,
                        width: 80,
                        height:30,
                        offsetCenter: [25, '20%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff'
                        }
                    },
                    data:this.zhuansu
                },
                {
                    name:'油表',
                    type:'gauge',
                    center : ['65%', '50%'],    // 默认全局居中
                    radius : '30%',
                    min:0,
                    max:2,
                    startAngle:135,
                    endAngle:45,
                    splitNumber:2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                            width: 2,
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length :12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        },
                        formatter:function(v){
                            switch (v + '') {
                                case '0' : return 'E';
                                case '1' : return 'Gas';
                                case '2' : return 'F';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length :15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:3,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width:2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title : {
                        show: false
                    },
                    detail : {
                        show: false
                    },
                    data:this.gas
                },
                {
                    name:'水表',
                    type:'gauge',
                    center : ['65%', '50%'],    // 默认全局居中
                    radius : '30%',
                    min:0,
                    max:2,
                    startAngle:315,
                    endAngle:225,
                    splitNumber:2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                            width: 2,
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        },
                        formatter:function(v){
                            switch (v + '') {
                                case '0' : return 'H';
                                case '1' : return 'Water';
                                case '2' : return 'C';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length :15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:3,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width:2,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title : {
                        show: false
                    },
                    detail : {
                        show: false
                    },
                    data:this.water
        
                }
            ]
        
      };

   },
   refreshData(){

       this.sudu=[{value:(Math.random()*100).toFixed(1) - 0,name: 'km/h'}];        
        this.zhuansu = [{value:(Math.random()*7).toFixed(2) - 0,name:'x1000 r/min'}];
        this.gas= [{value:(Math.random()*2).toFixed(2) - 0,name:'gas'}];
        this.water= [{value:(Math.random()*2).toFixed(2) - 0,name:'water'}];
        this.refreshCharts();
   },
   
   
 },
 mounted(){
    this.refreshCharts();
    if(this.$route.path == "/time"){
        setInterval(this.refreshData,2000);  
        return;
    }
    
 }
}
</script>

<style scoped lang="scss">

</style>
