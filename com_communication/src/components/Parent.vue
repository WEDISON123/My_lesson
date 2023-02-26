<template>
    <!-- <child :msg1="msg1" :msg2="msg2" title="3333"></child>  -->
    <child v-model:key="key" v-model:value="value"></child>
</template>

<script setup>
import Child from './Child.vue'
 import { ref } from "vue"
// const msg1 = ref("1111")
// const msg2 = ref("2222")
const key = ref("1111")
const value = ref("2222")
</script>