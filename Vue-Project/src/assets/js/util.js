
var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var PHONE_REGEXP = /^(13|14|15|16|17|18|19)[0-9]{9}$/;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
var DEFAULT_TIME_PATTERN = 'hh:mm:ss';
var DEFAULT_DATETIME_PATTERN = 'yyyy-MM-dd hh:mm:ss';
var WEEKDAYS_STR = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
var WEEKDAYS_STREN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var EMAIL_REGEXP = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
function padding(s, len) {
    len = len - (s + '').length;
    for (let i = 0; i < len; i++) { s = '0' + s; }
    return s;
};

export default {
    regexps: {
      PHONE_REGEXP,
      EMAIL_REGEXP
    },
    to2arr(val) {
      let arr = val.toString(2).split("").reverse();
      let nums = [];
      for(let i=0;i<arr.length;i++) {
        let cur = arr[i];
        if(cur == 1) {
          nums.push(Math.pow(2,i));
        }
      }
      return nums;
    },
    to10val(val) {
      return eval(val.join('+')) || 0;
    },
    generateId: function(len) {
      len = len || 8;
      let str = "";
      for(let i=0;i<len;i++) {
        str = str+"x";
      }
      return str.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    },
    getPageInfo: function() {
      let h = document.documentElement.clientHeight || document.body.offsetHeight;

      let size = Math.floor((h - 60 - 40 - 56 - 40 - 52) / 40);
      return {
        pageSize : size,
        currentPage: 1,
        totalNum: 0,
        totalPage: 0,
        sortKey: null,
        sortAscDesc: 0
      }
    },
    getQueryStringByName: function (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        let context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    dateUtils: {
        DEFAULT_PATTERN,
        DEFAULT_TIME_PATTERN,
        DEFAULT_DATETIME_PATTERN,
        WEEKDAYS_STR,
        WEEKDAYS_STREN,
        beforeMonth: function(before) {
          before = before || 1;
          let date = new Date();
          date.setMonth(date.getMonth() - before);
          date.setDate(date.getDate() + 1);
          return date;
        },
        beforeMonthStr: function(before, pattern) {
          return this.format(this.beforeMonth(before), pattern);
        },
        beforeDays: function(before) {
          before = before || 9;
          let date = new Date();
          date.setDate(date.getDate() - before);
          return date;
        },
        beforeDaysStr: function(before, pattern) {
          return this.format(this.beforeDays(before), pattern);
        },
        formatLong: function(timestamp, pattern) {
          return this.format(new Date(timestamp), pattern);
        },
        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y': return padding(date.getFullYear(), $0.length);
                    case 'M': return padding(date.getMonth() + 1, $0.length);
                    case 'd': return padding(date.getDate(), $0.length);
                    case 'w': return date.getDay() + 1;
                    case 'h': return padding(date.getHours(), $0.length);
                    case 'm': return padding(date.getMinutes(), $0.length);
                    case 's': return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse: function (dateString, pattern) {
           pattern = pattern || DEFAULT_PATTERN;
            let matchs1 = pattern.match(SIGN_REGEXP);
            let matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                let _date = new Date(1970, 0, 1);
                for (let i = 0; i < matchs1.length; i++) {
                    let _int = parseInt(matchs2[i]);
                    let sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y': _date.setFullYear(_int); break;
                        case 'M': _date.setMonth(_int - 1); break;
                        case 'd': _date.setDate(_int); break;
                        case 'h': _date.setHours(_int); break;
                        case 'm': _date.setMinutes(_int); break;
                        case 's': _date.setSeconds(_int); break;
                    }
                }
                return _date;
            }
            return null;
        }
    },


};
