<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore() // provide + inject 
// 
// const count = ref(store.state.count)  私有状态
const count = computed(() => store.state.count) //响应式归中央管  来到本地依然是数据状态
// let count = store.state.count  // 从中央到组件  响应式的
// console.log(count);
// count++
const addCount = () => {
  store.commit('add')
}
</script>

<template>
  <div>{{ $store.state.count }}</div>
  <div>{{ count }}</div>
  <button @click="addCount">加一</button>
</template>

<style scoped>

</style>
