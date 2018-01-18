<template>
  <div>
    <h1>登录或者注册</h1>
    <!-- 路由标签 to后面写地址 -->
    <router-link to='/login'>登录</router-link>
    <router-link to='/register'>注册</router-link>
    <router-link to='/calc'>计算器</router-link>
    <!-- 路由组件的填充位置 -->
    <router-view></router-view>
  </div>
</template>
<script>
  /* 里面写vue组件的配置选项 */
  export default {
    data: function(){
      return {

      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  /*scoped的作用就是保证组件之间同名的样式声明不冲突，各个组件的作用域独立*/

</style>