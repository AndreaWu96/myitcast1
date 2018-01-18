var obj = require('./js/calculate.js');
// css文件也可以require
require('./css/style.css');
// 引入less文件
require('./css/style.less');

var btn = document.getElementById('btn');
btn.onclick = function(){
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var ret = obj.add(a,b);
  var result = document.getElementById('result');
  result.innerHTML = ret;
}
