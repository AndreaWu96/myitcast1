
// vue单文件组件步骤
// - 需要在html模板页面，该页面内部需要提供填充位置 <div id="app"></div>
// - 安装相关依赖包
//     + vue
//     + vue-router
//     + vue-loader
//     + vue-template-compiler
// - 配置文件webpack.config.js中需要配置vue-loader
// - 编写单文件Vue组件
//     + template 
//     + script
//     + style 
// - 编写入口文件
//     + import Vue from 'vue'
//     + import VueRouter from 'vue-router'
//     + 导入相关vue单组件
//     + 启用路由 Vue.use(VueRouter);
//     + 配置路由映射
//     + 挂载路由和子组件

// > 注意事项：render 必须是箭头函数，普通函数不可以





// 如果ES6模块导出成员使用了default，那么导入的时候可以自己定义名称

import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由对应的组件
import Login from './components/Login.vue';
import Calc from './components/Calc.vue';
import Register from './components/Register.vue';

// 指定主页面组件入口
import App from './App.vue';

// use 启动路由  这样挂载后才能识别router
Vue.use(VueRouter);

// 引入样式
require('./src/css/style.css');

// 配置路由映射
let router = new VueRouter({
  routes: [
    {path: '/login',component: Login},
    {path: '/calc',component: Calc},
    {path: '/register',component: Register}
  ]
});

// 挂载路由
new Vue({
  el: '#app',
  router: router,
  render: create => create(App)
  //render后面要跟 箭头函数   渲染App组件  create是个回调函书   传入主页面组件入口App
})