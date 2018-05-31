<template >
  <div class="content" ref="container">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-table
        :data="tableData"
        border
        style="width: 100%;margin:20px;">
          <el-table-column
           prop="date"
           label="日期"
           width="180">
         </el-table-column>
         <el-table-column
           prop="name"
           label="姓名"
           width="80">
         </el-table-column>
         <el-table-column
           prop="address"
           label="地址">
         </el-table-column>
       </el-table>
     </el-col>
     <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div id="chartPanel" ref="chartPanel" style="width:100%;height:300px;"></div>
     </el-col>
   </el-row>
 </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {

      return {
        chartPanel:null,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        data:[{'sumDate':'2016-05-03','Count1':11,'Count2':22,'Count3':33,'Count4':11},
              {'sumDate':'2016-05-04','Count1':41,'Count2':32,'Count3':13,'Count4':12},
              {'sumDate':'2016-05-05','Count1':2,'Count2':52,'Count3':66,'Count4':44},
              {'sumDate':'2016-05-06','Count1':44,'Count2':14,'Count3':83,'Count4':51},
              {'sumDate':'2016-05-07','Count1':17,'Count2':26,'Count3':32,'Count4':151}
      ]
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
      this.chartPanel.setOption({
        title: {
          text: "",
          textStyle: {
            fontSize: 14,
            color: "#1F2D3D",
            fontWeight: "normal"
          },
          padding: [5, 0, 0, 24]
        },
        tooltip: {
          trigger: "axis",
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
          padding: [8, 16]
        },
        legend: {
           data:['Count1','Count2','Count3','Count4']
        },
        grid: {
          top:"24px",
          left: "32px",
          right: "32px",
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
      });
    },
  },
  mounted(){
  this.$nextTick(function() {
    let self = this;
    window.onresize = function() {
        self.chartPanel.resize();
    }
  });
  this.refreshCharts();
  this.setHeight();

}
}
</script>

<style lang="scss">
.content{
  // flex-grow: 1;
  // display: flex;
  // .tableClass{
  //   flex: 0 0 50%;
  //   margin:20px;
  // }
  // .picture{
  //   flex:1;
  //   width: 0;
  // }
  background: white;
  padding: 20px;
  margin: 20px;
}

</style>
