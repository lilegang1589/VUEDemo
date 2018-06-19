const ak = "9CBPNtwNWoVDvk7NNXxNnSWwwMBPo8Pm";//百度地图api密钥，此处仅适用于浏览器查看，且仅供此demo，如果想要使用可自己在百度上申请

export default {
  getMapScript: function() {
    if (!global.BMap) {
      global.BMap = {}
      global.BMap._preloader = new Promise((resolve, reject) => {
        global._initBaiduMap = function () {
          resolve(global.BMap)
          global.document.body.removeChild($script)
          global.BMap._preloader = null
          global._initBaiduMap = null
        }
        const $script = document.createElement('script')
        global.document.body.appendChild($script)
        $script.src = `//api.map.baidu.com/api?v=2.0&ak=${ak}&callback=_initBaiduMap`;
      })
      return global.BMap._preloader
    } else if (!global.BMap._preloader) {
      return Promise.resolve(global.BMap)
    } else {
      return global.BMap._preloader
    }
  },
  getAddr: function(lng, lat) {
    let that = this;
    let p = new Promise(function(resolve, reject) {
        if(!lng && !lat) {
          resolve("");
          return;
        }
        that.getMapScript().then(() => {
            BMap.locations = BMap.locations || {};
            let key = [lng, lat].join("-");
            let addr = BMap.locations[key];
            if(addr) {
              resolve(addr);
              return;
            }

            let pt = new BMap.Point(lng, lat);
            if(!BMap.geoc) BMap.geoc = new BMap.Geocoder();
            BMap.geoc.getLocation(pt, function(rs){
              let addComp = rs.addressComponents;
              let adds = [];
              // let addr = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
              adds.push(addComp.province);
              adds.push(addComp.city);

              addr = adds.join(" ");
              if(addr) BMap.locations[key] = addr;
              resolve(addr);
            });
        });
    });
    return p;
  }
}
