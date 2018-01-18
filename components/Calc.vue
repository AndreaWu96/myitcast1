<template>
  <div>
    <input type="text" v-model='a'>
    <span class='icon-plus'></span>
    <input type="text" v-model='b'>
    <input type="button" value="计算" @click='handle'>
    <span>{{result}}</span>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        a: '',
        b: '',
        result: ''
      }
    },
    methods: {
      handle: function(){
        this.result = parseInt(this.a) + parseInt(this.b);
      }
    }
  }
</script>
<style scoped>

</style>