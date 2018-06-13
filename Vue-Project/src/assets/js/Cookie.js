

var set = function (name, value, longExpires) {
  var exp = "";
  if (longExpires) {
    var exp = new Date();
    exp.setFullYear(exp.getFullYear() + 50);
    exp = ";expires=" + exp.toGMTString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) +  exp;
};

var get = function (name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return decodeURIComponent(arr[2]);
  else
    return null;
};

var remove = function (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  document.cookie = name + "=;expires=" + exp.toGMTString();
};

export default {
  set,
  get,
  remove
};