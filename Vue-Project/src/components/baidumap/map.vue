<template>
 <div class="__content" style="backgroud:white;height:100%;" ref="container">
     <div>杭州市</div>
     <div class="map" id="map" style="margin:0 0 20px 0">{{formatMap(120.15, 30.28, "map")}}</div>
     <div>合肥市</div>
     <div class="map" id="map1">{{formatMap(117.30 , 31.87,"map1")}}</div>
 </div>
</template>

<script>
import MapUtil from '../../assets/js/MapUtil'
export default {
 data() {
  return {

  }
 },
 components: {

 },
 methods:{
    formatMap(longitude,latitude,id) {
        let _this = this;
        MapUtil.getMapScript().then(() => {
            let point = new BMap.Point(longitude, latitude);
            var map = new BMap.Map(id);
            map.centerAndZoom(point, 11);
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));	  
            //map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开
            
        });
        return "";
    },
    setHeight() {
        let h = document.documentElement.clientHeight || document.body.offsetHeight;
        this.$refs.container.style.minHeight = h - 60 - 80-40 +'px';
    },
 },
 mounted(){
     this.setHeight();
 }
}
</script>

<style scoped lang="scss">
.map{
    width: 100%;
    height: 50%;
    float:left;
    overflow: hidden;
    margin:0;
}
</style>
