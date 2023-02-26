<template>
    <div>
        
    </div>
</template>

<script setup>
    import { onMounted, ref, defineProps } from 'vue'
    let loading = ref(true)
    onMounted(() => {
        setTimeout(() => {
            loading.value = !loading.value
        },2000)
    })
    defineProps({
        detail: Object
    })
</script>

<style>
</style>