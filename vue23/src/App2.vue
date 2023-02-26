<script>
import NavBar from './components/NavBar.vue';

// 放弃使用vue3 setup
// vue2 繁琐 ，为了面向对象而面向对象
export default {
  data() {
    return {
      loading: true
    }
  },
  components: {
    'nav-bar': NavBar
  },
  // 生命周期函数
  mounted() {
    console.log('挂载了。。。');
  }
}
</script>

<template>
  <div class="contain mb-5">
    <nav-bar></nav-bar>
    <div style="max-width: 90%;width: 500px;margin: auto;">
      <b v-if="loading">Loading</b>
    </div>
  </div>
</template>

<style scoped>

</style>
