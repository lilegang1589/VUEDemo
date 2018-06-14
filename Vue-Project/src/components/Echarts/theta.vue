<template>
  <div class="__content" ref="container">
      <div id="chartPanel" ref="chartPanel" style="width:50%;height:400px;margin-top:50px;"></div>
  </div>
</template>

<script>
import echarts from "echarts"
export default {
    props:{
      isMobile:"",
      isCollapse:false     
  },
  data(){
    return{
      chartPanel:null,
      data:[],
    }
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
    getData(){
      for (var i = 0; i <= 100; i++) {
          var theta = i / 100 * 360;
          var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
          this.data.push([r, theta]);
      };      
      this.refreshCharts();
    },
    refreshCharts(){
      if (this.chartPanel) {
        this.chartPanel.dispose();
      }
      this.chartPanel = echarts.init(this.$refs['chartPanel']);
      this.chartPanel.setOption({
      //   title: {
      //      text: '极坐标双数值轴'
      //  },
       legend: {
           data: ['line']
       },
       polar: {},
       tooltip: {
           trigger: 'axis',
           axisPointer: {
               type: 'cross'
           }
       },
       angleAxis: {
           type: 'value',
           startAngle: 0
       },
       radiusAxis: {
       },
       series: [{
           coordinateSystem: 'polar',
           name: 'line',
           type: 'line',
           data: this.data
       }]
      });
    },
    setHeight(){
      let h = document.documentElement.clientHeight || document.body.offsetHeight;
      this.$refs.container.style.minHeight = h - 60 - 80-40 +'px';
    },
    checktime(str){
      if(str < 10){
          return '0' + str;
      }
  	return str;
}
  },
  mounted(){
    this.$nextTick(function() {
    let self = this;
    window.onresize = function() {
        self.chartPanel.resize();
        self.setHeight();
    }
  });
    this.getData();
    this.setHeight();
    console.log(this.checktime(5));
  }

}
</script>

<style lang="css">
</style>
