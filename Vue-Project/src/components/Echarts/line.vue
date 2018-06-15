<template >
  <div class="__content" ref="container">
    <div class="description">
            具体功能请查看
       <a href="http://echarts.baidu.com/option.html#title" style="text-decoration:underline;color:blue;" target="_blank">echarts配置文档</a>
    </div>
    <div id="chartPanel" ref="chartPanel" style="height:300px;"></div>           
 </div>
</template>

<script>
import echarts from "echarts";
export default {
  props:{
      isMobile:"",
      isCollapse:false     
  },
  data() {

      return {
        chartPanel:null, 
        option:{},      
        data:[{'sumDate':'2016-05-03','Count1':11,'Count2':22,'Count3':33,'Count4':11},
              {'sumDate':'2016-05-04','Count1':41,'Count2':32,'Count3':13,'Count4':12},
              {'sumDate':'2016-05-05','Count1':2,'Count2':52,'Count3':66,'Count4':44},
              {'sumDate':'2016-05-06','Count1':44,'Count2':14,'Count3':83,'Count4':51},
              {'sumDate':'2016-05-07','Count1':17,'Count2':26,'Count3':32,'Count4':151},
              {'sumDate':'2016-05-08','Count1':11,'Count2':22,'Count3':33,'Count4':11},
              {'sumDate':'2016-05-09','Count1':41,'Count2':32,'Count3':13,'Count4':12},
              {'sumDate':'2016-05-10','Count1':2,'Count2':52,'Count3':66,'Count4':44},
              {'sumDate':'2016-05-11','Count1':44,'Count2':14,'Count3':83,'Count4':51},
              {'sumDate':'2016-05-12','Count1':17,'Count2':26,'Count3':32,'Count4':151},
      ]
      }
    },
    computed:{
        
    },
    watch: {
      'isCollapse': function(val, oldVal) {       
        setTimeout(() => {
            this.chartPanel.resize();
        }, 600);

      },
      isMobile(val,oldVal){
         setTimeout(() => {
            this.chartPanel.resize();
        }, 600); 
      }
    },
    methods:{
      setHeight() {
        let h = document.documentElement.clientHeight || document.body.offsetHeight;
        this.$refs.container.style.minHeight = h - 60 - 80-40 +'px';
      },
      refreshCharts() {
      let xAxisData = [],
        Data1 = [],
        Data2 = [],
        Data3 = [],
        Data4 = [],
        totalData = [],
        _this = this;
        this.data.forEach(function(item) {
        xAxisData.push(item.sumDate);
        Data1.push(item.Count1);
        Data2.push(item.Count2);
        Data3.push(item.Count3);
        Data4.push(item.Count4);
        totalData.push(
          item.Count1 +
            item.Count2 +
            item.Count3 +
            item.Count4
        );
      });
      if (this.chartPanel) {
        this.chartPanel.dispose();
      }      
      this.chartPanel = echarts.init(this.$refs['chartPanel']);
      
      
      this.option={
       title: {         
          //text:"echarts图表演示",
          textStyle: {
            fontSize: 24,
            color: "#1F2D3D",
            fontWeight: "bold",
            align:"left",
            verticalAlign:"middle",
            lineHeight: 56
          },         

        },
        tooltip: {
          trigger: "axis",
          padding: [5, 10],
          formatter: function(params, ticket, callback) {
            let labels = [params[0].name],
              total = 0;
            params.forEach(item => {
              labels.push(
                "<span style='position: relative; top: -2px;margin-right: 4px;display: inline-block; width: 6px; height: 6px; border-radius: 6px; background:" +
                  item.color +
                  "'></span> " +
                  item.seriesName +
                  " : " +
                  item.data
              );
              total += item.data;
            });
            labels.push(
              "<span style='display: inline-block; width: 6px;margin-right: 4px;height: 6px; border-radius: 6px; background:rgba(229, 229, 234,1);'></span> " +
                "总计" +
                " : " +
                total
            );
            return labels.join("<br/>");
          },
         
        },
        legend: {
           data:['Count1','Count2','Count3','Count4'],
           formatter: function (name) {
                return echarts.format.truncateText(name, 80, '14px Microsoft Yahei', '…');
            },
           tooltip: {
                show: true
            }
        },
        grid: {
          top:"15%",
          left: "5%",
          right: "5%",
          bottom: "0.06%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel : {
                 color:'rgba(0,0,0,0.65)'//y軸文字顏色
            },
             axisLine:{
                 lineStyle:{
                     color:'#d9d9d9' //x軸轴线顏色
                 },

             },
            data: xAxisData
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel : {
                 color:'rgba(0,0,0,0.65)'//y軸文字顏色
            },
            axisLine:{
                lineStyle:{
                    color:'#d9d9d9'//y軸轴线顏色
                },

            },
            splitLine:{//分割线样式
                 lineStyle:{
                     color:'#e8e8e8',
                     type:'dashed'
                 }
             }
          }
        ],
        series: [
          {
            name: "Count1",
            type: "line",
            stack: '总量', //总量会将数据叠加
            smooth: true,
            areaStyle: {
              normal: {
                color: "rgba(255,73,73,0.8)"
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(255,73,73,1)"
              }
            },
            data: Data1
          },
          {
            name: "Count2",
            type: "line",
            stack: '总量',
            smooth: true,
            areaStyle: {
              normal: {
                color: "rgba(250, 204, 20,0.8)"
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(250, 204, 20,1)"
              }
            },
            areaStyle: { normal: {} },
            data: Data2
          },
          {
            name: "Count4",
            type: "line",
            stack: '总量',
            smooth: true,
            areaStyle: {
              normal: {
                color: "rgba(47, 194, 91,0.8)"
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(47, 194, 91,1)"
              }
            },
            data: Data4
          },
          {
            name: "Count3",
            type: "line",
            stack: '总量',
            smooth: true,
            areaStyle: {
              normal: {
                color: "rgba(100, 114, 142,0.8)"
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(100, 114, 142,1)"
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: function(params) {
                  return totalData[params.dataIndex];
                },
                textStyle: {
                  color: "rgba(32,160,255,1)"
                }
              }
            },
            data: Data3
          }

        ]
      };
      this.chartPanel.setOption(this.option);
      this.chartPanel.resize();
    },
  },
  mounted(){

  this.$nextTick(function() {
    let self = this;
    
    window.onresize = function() {        
        setTimeout(() => {
           self.chartPanel.resize();
        }, 600);             
        
        self.setHeight();
    }
        
    
  });  
  this.refreshCharts();
  this.setHeight();

}
}
</script>

<style lang="scss">
.content{
  background: white;
  padding: 20px;
  margin: 20px;
}

</style>
