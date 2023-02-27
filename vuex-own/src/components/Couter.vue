<template>
    <div>
        {{ count }}
        <button @click="add">add</button>
    </div>
</template>

<script setup>
    // 1. count 来自中央
    import { useStore } from '../store/gvuex'
    import { computed } from 'vue'

    const store = useStore() // store 来到组件 hooks
    console.log(store,'///store');
    const count = computed(() => store.state.count)
    const add = () => {
        store.commit('add')
    }
</script>

<style scoped>
</style>